import React from "react";
import { Avatar, Heading, VStack, chakra } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    gap="20px"
  >
    <VStack gap={3}>
      <Avatar size='lg' name='Pete' src='https://i.pravatar.cc/150?img=7' />
      <chakra.p fontWeight="bold">{greeting}</chakra.p>
    </VStack>
    <VStack>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
