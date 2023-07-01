const express = require('express');
const jwt = require("jsonwebtoken")
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
const secretKey = "secret_key"

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
})

const adminSchema = new mongoose.Schema({
  username: String,
  password: String
})

const courseSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  image: String,
  published: Boolean
})

const User = mongoose.model('User', userSchema)
const Admin = mongoose.model('Admin', adminSchema)
const Course = mongoose.model('Course', courseSchema)

let ADMINS = [];
let USERS = [];
let COURSES = [];

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
   } else {
    res.status(403).json({message: 'Forbidden'})
   }
}

// change the password as per your mongodb atlas password
mongoose.connect('url', {useNewUrlParser: true, useUnifiedTopology: true})

// Admin routes
app.post('/admin/signup', async (req, res) => {
  const {username, password} = req.body
  const adminAlreadyExist = await Admin.findone({username})
  if (adminAlreadyExist){
    res.status(403).json({message: 'Admin already exists'})
  } else {
    const admin = new Admin({username, password})
    await admin.save()
    ADMINS.push(admin)
    const token = jwt.sign({username, role: 'admin'}, secretKey, {expiresIn: '1h'})
    res.json({message: 'Admin created successfully', token: token})
  }
});

app.post('/admin/login', async (req, res) => {
    const {username, password} = req.headers
    const admin = await Admin.findone({username, password})
    if (admin){
      const token = jwt.sign({username, role: 'admin'}, secretKey, {expiresIn: '1h'})
      res.json({message: 'Logged in successfully', token: token})
    } else {
      res.status(403).json({message: "Invalid credentials"})
    }
});

app.post('/admin/courses', authenticateJwt, async (req, res) => {
  const course = new Course(req.body)
  const courseAlreadyExist = await Course.findone(c => c.name === course.name)
  if (courseAlreadyExist){
    res.status(403).json({message: 'Course already exists'})
  } else {
    await course.save()
    res.json({message: 'Course created successfully', courseId: course.id})
  }
});

app.put('/admin/courses/:courseId', authenticateJwt, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {new: true})
  if (course){
    res.json({message: 'Course updated successfully'})
  } else {
    res.status(404).json({message: 'Course not found'})
  }
});

app.get('/admin/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({})
    res.json({courses: COURSES})
});

// User routes
app.post('/users/signup', async (req, res) => {
  const {username, password} = req.body
  const userAlreadyExist = await User.findOne({username})
  if (userAlreadyExist){
    res.status(403).json({message: 'User already exists'})
  } else {
    const user = new User({username, password})
    await user.save()
    const token = jwt.sign({username, role: 'user'}, secretKey, {expiresIn: '1h'})
    res.json({message: 'User created successfully', token : token})
  }
});

app.post('/users/login', async (req, res) => {
  const {username, password} = req.headers
  const user = User.findOne({username, password})
  if (user){
    const token = jwt.sign({username, role: 'user'}, secretKey, {expiresIn: '1h'})
    res.json({message: 'Logged in successfully', token: token})
  } else {
    res.status(403).json({message: "Invalid credentials"})
  }
});

app.get('/users/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({published: true})
    res.json({courses: courses})
});

app.post('/users/courses/:courseId', authenticateJwt, async (req, res) => {
  const id = parseInt(req.params.courseId)
  const course = Course.findById(id)
  if (course){
    const username = req.user.username
    const user = await User.findone({username: username})
    user.purchasedCourses.push(course)
    await user.save()
    res.json({message: 'Course purchased successfully'})
  } else {
    res.status(404).json({message: 'Course not found'})
  }
});

app.get('/users/purchasedCourses', authenticateJwt, async (req, res) => {
  const username = req.user.username
  const user = User.findOne({username: username}).populate('purchasedCourses') 
  if (user){
    res.json({purchasedCourses: user.purchasedCourses || []})
  } else{
    res.status(404).json({message: 'User not found'})
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
