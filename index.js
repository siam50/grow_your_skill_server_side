const express = require('express')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Grow your skill server is Running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(p => p.id === id);
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log(`Grow your skill running on port, ${port}`)
});