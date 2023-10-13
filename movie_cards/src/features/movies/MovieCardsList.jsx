import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Spinner, useToast } from "@chakra-ui/react";
import {
  fetchCards,
  selectAllMovies,
  selectError,
  selectStatus,
} from "./MovieCardSlice";
import MovieCard from "./MovieCard";
import { Heading } from "@chakra-ui/react";
import { MOVIEDB_IMAGES_URL } from "../../common/constants";
import { useEffect } from "react";

function MovieCardsList() {
  const movies = useSelector(selectAllMovies);
  const toast = useToast();
  const dispatch = useDispatch();
  const dataStatus = useSelector(selectStatus);
  const dataError = useSelector(selectError);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCards()).unwrap();
      } catch (err) {
        toast({
          title: "Error Occured.",
          description:
            "Something went wrong, please check your internet connection.",
          status: "error",
          duration: "9000",
          isClosable: true,
        });
      }
    };
    fetchData();
  }, [dispatch, toast]);

  let content;
  if (dataStatus === "succeeded") {
    content = (
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
    );
  } else if (dataStatus === "loading") {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        <Spinner text="Loading.." />
      </Flex>
    );
  } else if (dataStatus === "failed") {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        {dataError}
      </Flex>
    );
  }
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
        {content}
      </Box>
    </>
  );
}

export default MovieCardsList;
