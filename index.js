const express = require('express')
const fileUpload = require('express-fileupload')

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const resultsController = require('./controllers/results')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

const customMiddleware = require('./middleware/m1')
const validateMiddleware = require('./middleware/validationMiddleware')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vinod1297:vinod@cluster0.cqphpr1.mongodb.net/chap10?retryWrites=true&w=majority&appName=AtlasApp',  {useNewUrlParser:true} )

const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
// app.use(customMiddleware)   // to call our middleware each time any page is opened.
app.use('/posts/new',customMiddleware)   // to call our middleware only when newpost page is opened
app.use('/posts/store',validateMiddleware)

app.listen(4000, ()=>{
console.log('App listening on port 4000')
})

app.get('/', homeController)
app.get('/post/:id', getPostController)
app.get('/posts/new', newPostController)
app.post('/posts/store', storePostController)
app.get('/auth/register',newUserController)
app.get('/auth/login',loginController)



app.get('/search',(req,res)=>{ 
    res.render('search');
})
app.post('/searchresults', resultsController)
app.post('/users/register', storeUserController)
app.post('/users/login', loginUserController)


