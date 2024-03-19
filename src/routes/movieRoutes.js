const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");
const authenticateToken = require('../middleware/authenticateToken');

const reviewController = require('../controllers/reviewController');




// Add Movie: POST /api/movies - Allows users to add a new movie. Requires details such as title, director, genre, releaseYear, and description.
// Update Movie: PUT /api/movies/:id - Enables users to update an existing movie's details by its ID.
// Delete Movie: DELETE /api/movies/:id - Permits users to delete a movie by its ID.
// Get Movie Details: GET /api/movies/:id - Retrieves details of a specific movie.
// List Movies: GET /api/movies - Lists all movies. Supports filtering by genre, releaseYear, or director through query parameters.


router.post("/",authenticateToken,movieController.postMovie);
router.put("/:id",authenticateToken,movieController.updateMovieById);
router.delete("/:id",authenticateToken,movieController.deleteMovieById);
router.get("/:id",authenticateToken,movieController.getMovieById);
router.get("/",authenticateToken,movieController.getAllMovies);
router.post("/:id/reviews",authenticateToken,reviewController.postReview);
router.put("/:movieId/reviews/:reviewId",authenticateToken,reviewController.updateReview);
router.delete("/:movieId/reviews/:reviewId",authenticateToken,reviewController.deleteReview);
router.get("/:id/reviews",authenticateToken,reviewController.getAllReview);
router.get("/:id/averageRating",authenticateToken,reviewController.getAverageRating);



module.exports = router;





