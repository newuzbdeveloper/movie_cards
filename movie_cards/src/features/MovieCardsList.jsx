import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useGetMovieCardsQuery } from "./MovieCardApi";
import MovieCard from "./MovieCard";
import { MOVIEDB_IMAGES_URL } from "../common/constants";

function MovieCardsList() {
  const { data, isError, error, isLoading, isSuccess } =
    useGetMovieCardsQuery();

  let content;
  if (isSuccess) {
    console.log(data);
    content = (
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={4}>
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
          />
        ))}
      </SimpleGrid>
    );
  } else if (isLoading) {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        <Spinner text="Loading..." />
      </Flex>
    );
  } else if (isError) {
    console.log(error);
    content = (
      <Flex alignItems="center" bg="red" justifyContent="center" minH="100vh">
        {error}
      </Flex>
    );
  }
  return content;
}

export default MovieCardsList;
