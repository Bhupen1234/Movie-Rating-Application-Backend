const mongoose = require('mongoose');



const reviewSchema = mongoose.Schema({
    // rating and text.
    rating:{
        type:Number,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Movie",
    
    }

},
{
    timestamps: true
}
)




const Review = mongoose.model('Review',reviewSchema);
module.exports.reviewSchema = reviewSchema;
module.exports = Review;