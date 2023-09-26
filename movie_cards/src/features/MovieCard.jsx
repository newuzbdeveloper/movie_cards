import { CiHeart, CiShare2, CiChat1 } from "react-icons/ci";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";

function MovieCard({ poster, title, date, overview, backgroundPicture }) {
  return (
    <Card
      direction={{ base: "row", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="60%"
      h="35vh"
      boxShadow="xl"
      rounded="md"
      bg="whiteSmoke"
      borderRadius="10"
      __hover={{
        transition: "transform 0.3s",
        cursor: "pointer",
      }}
    >
      <Box display="flex" flexDirection="column" gap="5" p={3} flex="1">
        <Box display="flex" gap={4}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={poster}
            alt={`${title}'s poster`}
            boxSize="150px"
          />
          <Box>
            <Heading size="lg">{title}</Heading>
            <Text>{date}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Text py="2" size="xl" fontWeight="500" wordBreak="10">
            {overview.substring(0, 300) + "..."}
          </Text>
          <Box display="flex">
            <Button variant="solid" bg="none">
              <CiShare2 size="sm" />
            </Button>
            <Button variant="solid" bg="none">
              <CiHeart size="sm" />
            </Button>
            <Button variant="solid" bg="none">
              <CiChat1 size="sm" />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box position="relative">
        <Box position="absolute" float="left" width="100%" />
        <Image
          objectFit="contain"
          display="block"
          w="100%"
          src={backgroundPicture}
          h="100%"
        />
      </Box>
    </Card>
  );
}

export default MovieCard;
