
const Movie = require("../models/Movie");

const postMovie = async (movieData)=>{
     try {
        const movie = new Movie(movieData);

        await movie.save();

        console.log(movie);
        return movie;

     } catch (error) {
        throw error;
     }
}



const updateMovieById =async(id,updatedMovieData)=>{
   try {
      const movie = await Movie.findById(id);
      if(!movie){
         throw new Error("Movie not found");
      }
      const updatedMovie = await Movie.findOneAndUpdate({_id:id},{$set:updatedMovieData},{new:true});

      return updatedMovie
   } catch (error) {
      throw error;
   }
}

const deleteMovieById = async(id)=>{
   try {
      const movie = await Movie.findById(id);
      if(!movie){
         throw new Error("Movie not found");
      }
      const deletedMovie = await Movie.findOneAndDelete({_id:id});
      return deletedMovie
   } catch (error) {
      throw error;  
   }
}

const getMovieById = async(id)=>{
   try {
   const movie= await Movie.findById(id);
   if(!movie){
      throw new Error("Movie not found");
   }

   return movie;

   } catch (error) {
   throw error;   
   }
}


const getAllMovies = async()=>{

   try {
      const movies = await Movie.find({});
      if(!movies){
         throw new Error("Movies not found");
      }
      
      return movies;
      
   } catch (error) {
      throw error; 
   }
}




module.exports = {postMovie,updateMovieById,deleteMovieById,getMovieById,getAllMovies};