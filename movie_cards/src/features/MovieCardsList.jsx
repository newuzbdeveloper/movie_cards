import { Heading, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { MOVIEDB_IMAGES_URL } from "../common/constants";
import { useSelector } from "react-redux";

function MovieCardsList() {
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <>
      <Heading textAlign="center" size="xl" mb={4}>
        Trending Movies
      </Heading>
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MovieCardsList;
