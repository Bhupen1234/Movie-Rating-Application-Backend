
const reviewService = require("../services/reviewService")

const postReview =async (req,res)=>{
    try {
         const review = req.body;
         const {id} = req.params;
         
         await reviewService.postReview(review,id);
         res.status(201).json({message:"Review submitted successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
}

const updateReview = async (req,res)=>{
    try {
        const updatedReview = req.body;
        const {reviewId,movieId} = req.params;
        await reviewService.updateReview(updatedReview,reviewId,movieId);
        res.status(200).json({message:"Review updated successfully"});



    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const deleteReview =async(req,res)=>{
    try {
        const {reviewId,movieId} = req.params;
        await reviewService.deleteReview(reviewId,movieId);
       res.status(200).json({message:"Review deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


const getAllReview = async(req,res)=>{
    try {
        const movieId =req.params.id;
        const reviews = await reviewService.getAllReviews(movieId);
        res.status(200).json(reviews);


    } catch (error) {

        console.log(error);
        res.status(500).json({message:error.message});
    }
}

const getAverageRating=async(req,res)=>{
     try {
        const movieId =req.params.id;
        const averageRating = await reviewService.getAverageRating(movieId);

        res.status(200).json(averageRating);

     } catch (error) {
        res.status(500).json({message:error.message});
     }
}

module.exports = {postReview,updateReview,deleteReview,getAverageRating,getAllReview}