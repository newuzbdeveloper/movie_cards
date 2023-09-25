import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { data } from "./data";

function MovieCard() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md"></Heading>
          <Text>{data.title}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Learn More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
