import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { selectAllMovies } from "./MovieCardSlice";
import MovieCard from "./MovieCard";
import { Heading } from "@chakra-ui/react";
import { MOVIEDB_IMAGES_URL } from "../common/constants";
// import { MOVIEDB_IMAGES_URL } from "../common/constants";

function MovieCardsList() {
  const movies = useSelector(selectAllMovies);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
      >
        <Heading mt={4}>Trending Movies.</Heading>
        <Box
          display="flex"
          flexDirection="column"
          gap={6}
          alignItems="center"
          justifyContent="center"
        >
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
              title={movie.title ? movie.title : movie.name}
              date={movie.release_date}
              overview={movie.overview}
              backgroundPicture={`${MOVIEDB_IMAGES_URL}/${movie.backdrop_path}`}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default MovieCardsList;
