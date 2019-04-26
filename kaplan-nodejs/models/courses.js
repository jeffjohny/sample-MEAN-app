import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let courses = new Schema({
    title: {
        type: String
    },
    description:{
        type: String
    },
    instructorName:{
        type: String
    },
    instructorPhotoUrl:{
        type: String
    },
    subjectPhotoUrl:{
        type: String
    },
    time:{
        type: String
    },
});

export default mongoose.model("courses", courses);