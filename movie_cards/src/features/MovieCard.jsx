import { CiHeart, CiShare2, CiChat1 } from "react-icons/ci";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function MovieCard({ poster, title, date, overview }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="900px"
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="whiteSmoke"
      borderRadius="10"
      __hover={{
        transform: translateY(50px) scale(1.2);
      }}
      transition="transform 0.3s"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={poster}
        alt={`${title}'s poster`}
      />

      <Stack>
        <CardBody>
          <Heading size="lg">{title}</Heading>
          <Text>{date}</Text>

          <Text py="2" size="xl" fontWeight="500">
            {overview.substring(0, 300) + "..."}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" bg="none">
            <CiShare2 size="sm" />
          </Button>
          <Button>
            <CiHeart size="sm" />
          </Button>
          <Button>
            <CiChat1 size="sm" />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default MovieCard;
