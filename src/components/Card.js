import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="white"
      borderRadius="md"
    >
    <VStack
      borderWidth="1px"

      borderRadius="md"
      borderColor="gray.200"
      spacing={4}
      alignItems="flex-start"
    >
        <Image src={imageSrc} alt={title} w="full" objectFit="cover" borderTopRadius="md"/>
        <Box padding={4}>
      <Heading as="h5" size="sm" color="#000">
        {title}
      </Heading>
      <Text color="gray.400" fontSize="sm">{description}</Text>
      <HStack spacing={"lg"} gap={2}>
        <Text fontWeight="bold" color="gray.600" fontSize="2xs">See More</Text>
            <FontAwesomeIcon icon={faArrowRight} size="2xs"  color="#000"/>
          </HStack>
      </Box>
      </VStack>
      </Box>
  );
};

export default Card;
