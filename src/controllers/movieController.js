const movieService = require("../services/movieService")


const postMovie =async (req,res)=>{
    try {
       const movieData = req.body;
       const movie =await  movieService.postMovie(movieData);


       res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



const updateMovieById = async (req,res)=>{
    try {
        const {id}= req.params;
        const movieData = req.body;

        const movie = await movieService.updateMovieById(id,movieData);
        res.status(200).json({message: "Movie updated successfully"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const deleteMovieById = async (req,res)=>{
    try{
    const {id} = req.params;
    await movieService.deleteMovieById(id);
    res.status(200).json({message: "Movie deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }


}


const getMovieById = async (req,res)=>{
     try {
        const {id} = req.params;
        const movie = await movieService.getMovieById(id);
        res.status(200).json(movie);
     } catch (error) {
        res.status(500).json({message:error.message})
     }


}

const getAllMovies = async(req,res)=>{
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports ={postMovie,updateMovieById,deleteMovieById,getMovieById,getAllMovies};


