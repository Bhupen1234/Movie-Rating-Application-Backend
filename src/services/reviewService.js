const Movie = require("../models/Movie");
const Review = require("../models/Review");


const postReview =async(review , id)=>{
    try {
        const movie = await Movie.findById(id);
        if(!movie){
            throw new Error("Movie not found");
        }

        const newReview = new Review({...review,movieId:id});
      
        await newReview.save();

        return review;
    } catch (error) {
        throw error
    }
}


const updateReview = async(review,reviewId,movieId)=>{
    try {
        const currentreview = await Review.findById(reviewId);
        if(!currentreview){
            throw new Error("Review not found");
        }
        const movie = await Review.findById(movieId);
        if(!movie){
            throw new Error("Movie not found");
        }

        const updatedReview = await Review.findOneAndUpdate({_id:reviewId,movieId:movieId},{$set:review},{new:true});
        return updatedReview
    } catch (error) {
        throw error;
    }
}


const deleteReview = async(reviewId,movieId)=>{
    try {
        const review= await Review.findOneAndDelete({_id:reviewId,movieId:movieId}) ;
        return review
    } catch (error) {
        throw error ;
    }
 
}


const getAllReviews =async (movieId)=>{
    try{
        const movie = await Movie.findById(movieId);
        if(!movie){
            throw new Error("Movie not found");
        }
        const reviews = await Review.find({movieId:movieId});
        if(reviews.length===0){
            throw new Error("Reviews not found");
        }
        return reviews;
    }
    catch(error){

        console.log(error)
        throw error;
    }
}


const getAverageRating =async(movieId)=>{
    try{
        const movie = await Movie.findById(movieId);
        if(!movie){
            throw new Error("Movie not found");
        }
        const reviews = await Review.find({movieId:movieId});
        if(reviews.length===0){
            throw new Error("Reviews not found");
        }
        let sum=0;
        let count=0;
        reviews.forEach(review=>{
            sum+=review.rating;
            count++;
        })
        return sum/count;
    }
    catch(error){
        throw error;
    }
}


module.exports={updateReview,postReview,deleteReview,getAllReviews,getAverageRating};