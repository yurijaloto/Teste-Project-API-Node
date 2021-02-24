const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast.js')
//const geocode = require('../utils/geocode.js')

const app = express()

//definir paths para express config
const pathPublic = path.join(__dirname,'../public')
const pathPartials = path.join(__dirname,'../templates/partials')

//definir e setar diretorio de views e handlebars
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(pathPartials)
app.set('view engine', 'hbs')

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Yuri Jaloto'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'titulo about',
        name: 'yuri jalooooooooto'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Olha a senhrotira tuletinho wiii iiiih',
        name: 'yuri'
    })
})

app.get('/weather',(req,res) => {

    if (!req.query.adress){
        return res.send({
            error:'No place was provide'
        })
    }

    res.send({
        forecast: forecast('Rio de Janeiro'),
        adress: req.query.adress
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        errorMessage: 'Help arqticle not found!'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        errorMessage: 'Page not Found!'
    })
})

//setup static server to serve
app.use(express.static(pathPublic))


app.listen('3000',() => {
    console.log('server up on port 3000')
})