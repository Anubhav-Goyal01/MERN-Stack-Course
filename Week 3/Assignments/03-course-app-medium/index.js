const express = require('express');
const jwt = require("jsonwebtoken")
const app = express();
const fs = require('fs');

app.use(express.json());
const secretKey = "secret_key"


let ADMINS = [];
let USERS = [];
let COURSES = [];

try {
  ADMINS = JSON.parse(fs.readFileSync('admins.json', 'utf8'));
  USERS = JSON.parse(fs.readFileSync('users.json', 'utf8'));
  COURSES = JSON.parse(fs.readFileSync('courses.json', 'utf8'));
} catch {
  ADMINS = [];
  USERS = [];
  COURSES = [];
}

const generateJwt = (user, secret) => {
  const payload = {username: user.username}
  return jwt.sign(payload, secretKey, {expiresIn: '1h'})
}

const authenticateJwt = (req, res, next) => {
   const authHeader = req.headers.authorization
   if (authHeader){
    const token = authHeader.split(' ')[1]
    jwt.verify(token, secretKey, (err, user) => {
      if (err){
        res.status(403).json({message: 'Forbidden'})
      } else {
        req.user = user
        next()
      }
    })
   }
}

// Admin routes
app.post('/admin/signup', (req, res) => {
  const {username, password} = req.body
  const adminAlreadyExist = ADMINS.find(admin => admin.username === username)
  if (adminAlreadyExist){
    res.status(403).json({message: 'Admin already exists'})
  } else {
    const admin = {username: username, password: password}
    ADMINS.push(admin)
    fs.writeFileSync('admins.json', JSON.stringify(ADMINS));
    const token = generateJwt(admin)
    res.json({message: 'Admin created successfully', token: token})
  }
});

app.post('/admin/login',  (req, res) => {
    const {username, password} = req.headers
    const admin = ADMINS.find(admin => admin.username === username && admin.password === password)
    if (admin){
      const token = generateJwt(admin)
      res.json({message: 'Logged in successfully', token: token})
    } else {
      res.status(403).json({message: "Invalid credentials"})
    }
});

app.post('/admin/courses', authenticateJwt, (req, res) => {
  const course = req.body
  const courseAlreadyExist = COURSES.find(c => c.name === course.name)
  if (courseAlreadyExist){
    res.status(403).json({message: 'Course already exists'})
  } else {
    course.id = COURSES.length + 1;
    COURSES.push(course)
    fs.writeFileSync('courses.json', JSON.stringify(COURSES));
    res.json({message: 'Course created successfully', course: course.id})
  }
});

app.put('/admin/courses/:courseId', authenticateJwt, (req, res) => {
  const {title, desc, price, image, published} = req.body
  const id = parseInt(req.params.courseId)
  const course = COURSES.find(c => c.id === id)
  if (course){
    course.title = title
    course.desc = desc
    course.price = price
    course.image = image
    course.published = published
    fs.writeFileSync('courses.json', JSON.stringify(COURSES));
    res.json({message: 'Course updated successfully'})
  } else {
    res.status(404).json({message: 'Course not found'})
  }
});

app.get('/admin/courses', authenticateJwt, (req, res) => {
    res.json({courses: COURSES})
});

// User routes
app.post('/users/signup', (req, res) => {
  const {username, password} = req.body
  const userAlreadyExist = USERS.find(user => user.username === username)
  if (userAlreadyExist){
    res.status(403).json({message: 'User already exists'})
  } else {
    const user = {username: username, password: password, purchasedCourses: []}
    USERS.push(user)
    fs.writeFileSync('users.json', JSON.stringify(USERS));
    const token = generateJwt(user)
    res.json({message: 'User created successfully', token : token})
  }
});

app.post('/users/login', (req, res) => {
  const {username, password} = req.headers
  const user = USERS.find(user => user.username === username && user.password === password)
  if (user){
    const token = generateJwt(user)
    res.json({message: 'Logged in successfully', token: token})
  } else {
    res.status(403).json({message: "Invalid credentials"})
  }
});

app.get('/users/courses', authenticateJwt, (req, res) => {
    res.json({courses: COURSES.filter(c => c.published)})
});

app.post('/users/courses/:courseId', authenticateJwt, (req, res) => {
  const username = req.user.username
  const id = parseInt(req.params.courseId)
  const course = COURSES.find(c => c.id === id && c.published)
  if (course){
    const user = USERS.find(u => u.username === username)
    user.purchasedCourses.push(id)
    fs.writeFileSync('users.json', JSON.stringify(USERS));
    res.json({message: 'Course purchased successfully'})
  } else {
    res.status(404).json({message: 'Course not found'})
  }
});

app.get('/users/purchasedCourses', authenticateJwt, (req, res) => {
  const username = req.user.username
  const user = USERS.find(u => u.username === username)
  const purchasedCourses = COURSES.filter(c => user.purchasedCourses.includes(c.id))
  res.json({purchasedCourses: purchasedCourses})
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
