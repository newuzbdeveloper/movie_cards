import { ChakraProvider } from "@chakra-ui/react";
import MovieCards from "../features/MovieCard";

function App() {
  return (
    <>
      <ChakraProvider>
        <MovieCards />
      </ChakraProvider>
    </>
  );
}

export default App;
