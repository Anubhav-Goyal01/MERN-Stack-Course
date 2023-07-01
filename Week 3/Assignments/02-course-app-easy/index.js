const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let courseId = 1;


const adminAuthenticator = (req, res, next) => {
  const {username, password} = req.headers
  const admin = ADMINS.find(admin => admin.username === username && admin.password === password)
  if (admin){
    next()
  } else {
    res.status(401).json({message: 'Invalid credentials'})
  }
}

const userAuthenticator = (req, res, next) => {
  const {username, password} = req.headers
  const user = USERS.find(user => user.username === username && user.password === password)
  if (user){
    next()
  } else{
    res.status(401).json({message: 'Invalid credentials'})
  }
}


// Admin routes
app.post('/admin/signup', (req, res) => {
  const {username, password} = req.body
  const adminAlreadyExist = ADMINS.find(admin => admin.username === username)
  if (adminAlreadyExist){
    res.status(403).json({message: 'Admin already exists'})
  } else {
    ADMINS.push({username: username, password: password})
    res.json({message: 'Admin created successfully'})
    console.log(ADMINS)
  }
});

app.post('/admin/login', adminAuthenticator,  (req, res) => {
    res.json({message: 'Logged in successfully'})
});

app.post('/admin/courses', adminAuthenticator, (req, res) => {
  const course = req.body
  const courseAlreadyExist = COURSES.find(c => c.name === course.name)
  if (courseAlreadyExist){
    res.status(403).json({message: 'Course already exists'})
  } else {
    course.id = courseId;
    courseId += 1
    COURSES.push(course)
  }
});

app.put('/admin/courses/:courseId', adminAuthenticator, (req, res) => {
  const {title, desc, price, image, published} = req.body
  const id = parseInt(req.params.courseId)
  const course = COURSES.find(c => c.id === id)
  if (course){
    course.title = title
    course.desc = desc
    course.price = price
    course.image = image
    course.published = published
    res.json({message: 'Course updated successfully'})
  } else {
    res.status(404).json({message: 'Course not found'})
  }
});

app.get('/admin/courses', adminAuthenticator, (req, res) => {
    res.json({courses: COURSES})
});

// User routes
app.post('/users/signup', (req, res) => {
  const {username, password} = req.body
  const userAlreadyExist = USERS.find(user => user.username === username)
  if (userAlreadyExist){
    res.status(403).json({message: 'User already exists'})
  } else {
    USERS.push({username: username, password: password, purchasedCourses: []})
    res.json({message: 'User created successfully'})
  }
});

app.post('/users/login', userAuthenticator, (req, res) => {
  res.json({message: 'Logged in successfully'})
});

app.get('/users/courses', userAuthenticator, (req, res) => {
    res.json({courses: COURSES.filter(c => c.published)})
});

app.post('/users/courses/:courseId', userAuthenticator, (req, res) => {
  const username = req.headers.username
  const id = parseInt(req.params.courseId)
  const course = COURSES.find(c => c.id === id && c.published)
  if (course){
    const user = USERS.find(u => u.username === username)
    user.purchasedCourses.push(id)
    res.json({message: 'Course purchased successfully'})
  } else {
    res.status(404).json({message: 'Course not found'})
  }
});

app.get('/users/purchasedCourses', userAuthenticator, (req, res) => {
  const username = req.headers.username
  const user = USERS.find(u => u.username === username)
  const purchasedCourses = COURSES.filter(c => user.purchasedCourses.includes(c.id))
  res.json({purchasedCourses: purchasedCourses})
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
