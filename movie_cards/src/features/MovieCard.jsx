import { CiHeart, CiShare2, CiChat1 } from "react-icons/ci";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import { ImageCard } from "./styled";

function MovieCard({ poster, title, date, overview, backgroundPicture }) {
  return (
    <Card
      direction={{ base: "row", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="60%"
      h="45vh"
      boxShadow="2xl"
      borderRadius="15px"
      bg="whiteSmoke"
      mb="6"
      transition="transform .5s ease-out "
      _hover={{
        transform: "scale(1.03)",
        cursor: "pointer",
      }}
    >
      <Box display="flex" flexDirection="column" gap="5" p={3} minW="50%">
        <Box display="flex" gap={4}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={poster}
            alt={`${title}'s poster`}
            boxSize="150px"
          />
          <Box w="200px" h="100px">
            <Heading size="md">{title}</Heading>
            <Text>{date}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          h="100%"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Text py="2" size="xl" fontWeight="500" wordBreak="10">
            {overview}
          </Text>
          <Box display="flex">
            <Button
              variant="solid"
              bg="none"
              transition="transform .5s ease-out"
              _hover={{ transform: "scale(1.07)" }}
            >
              <CiShare2 size="sm" />
            </Button>
            <Button
              variant="solid"
              bg="none"
              transition="transform .5s ease-out"
              _hover={{ transform: "scale(1.07)" }}
            >
              <CiHeart size="sm" />
            </Button>
            <Button
              variant="solid"
              bg="none"
              transition="transform .5s ease-out"
              _hover={{ transform: "scale(1.07)" }}
            >
              <CiChat1 size="sm" />
            </Button>
          </Box>
        </Box>
      </Box>
      <ImageCard src={backgroundPicture} />
    </Card>
  );
}

export default MovieCard;
