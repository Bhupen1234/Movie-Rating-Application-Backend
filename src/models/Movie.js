const mongoose = require('mongoose');
const reviewSchema = require("./Review")
const Review = require("./Review")
const movieSchema = new mongoose.Schema({
    //title, director, genre, releaseYear, and description
    title :{
        type: String,
        required: true,
        unique: true
    },
    director :{
        type: String,
        required: true

    },
    genre:{
        type: String,
        enum:[ "action", "adventure", "comedy", "drama", "fantasy", "horror", "musicals", "mystery", "romance", "science fiction", "sports", "thriller",  "Western"],
        required: true
    },
    releaseYear:{
      type: Date,
      required: true
    },
    description:{
        type: String,
        required: true
    },
   
    
},
{
    timestamps: true
}
);


const Movie = mongoose.model('Movie', movieSchema);

module.exports= Movie