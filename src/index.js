import express from 'express'
import { engine } from 'express-handlebars'
import viewRouter from './routes/views.route.js'
const app = express()
const PORT = 3000

app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: './src/views/layouts',
    partialsDir: './src/views/partials'
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use(express.static('public'))

app.use('/', viewRouter)


app.listen(PORT, ()=> {
    console.log('listen to port 3000')
});

