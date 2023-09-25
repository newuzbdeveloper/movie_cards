import { ChakraProvider } from "@chakra-ui/react";
import MovieCardsList from "../features/MovieCardsList";

function App() {
  return (
    <>
      <ChakraProvider>
        <MovieCardsList />
      </ChakraProvider>
    </>
  );
}

export default App;
