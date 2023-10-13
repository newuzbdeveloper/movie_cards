import { CiHeart, CiShare2, CiChat1 } from "react-icons/ci";
import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

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
      sx={{}}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="5"
        p={3}
        minW="50%"
        maxH="100%"
      >
        <Box display="flex" gap={4}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={poster}
            alt={`${title}'s poster`}
            boxSize="150px"
            borderRadius="10px"
          />
          <Box>
            <Heading size="md">{title}</Heading>
            <Text>
              <Badge variant="solid" colorScheme="green">
                {date}
              </Badge>
            </Text>
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
              <CiShare2 />
            </Button>
            <Button
              variant="solid"
              bg="none"
              transition="transform .5s ease-out"
              _hover={{ transform: "scale(1.07)" }}
            >
              <CiHeart />
            </Button>
            <Button
              variant="solid"
              bg="none"
              transition="transform .5s ease-out"
              _hover={{ transform: "scale(1.07)" }}
            >
              <CiChat1 />
            </Button>
          </Box>
        </Box>
      </Box>
      <Image
        src={backgroundPicture}
        sx={{
          WebkitMaskImage:
            "-webkit -linear -gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, .7))",
          maskimage:
            " -webkit-linear-gradient(left,rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
          borderRadius: "15px",
        }}
      />
    </Card>
  );
}

export default MovieCard;
