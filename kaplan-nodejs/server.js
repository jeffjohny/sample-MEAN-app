import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Course from './models/courses';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/coursedb');

const connnection = mongoose.connection;

connnection.once('open', () => {
    console.log('MongogDB database connection estalished successfully!')
});

router.route('/courses').get((req, res) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(courses);
        }
    })
})

app.use('/', router)

app.listen(4001, () => console.log('express server is running on port 4001'))