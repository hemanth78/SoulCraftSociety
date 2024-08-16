import React from "react";
import { Card, CardBody, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import {initiatives} from "./Data";

const ICard = () => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} justifyContent="center">
    {initiatives.map((item, index) => (
      <Card key={index} borderRadius="md" overflow="hidden" boxShadow="lg">
        <Box height="15px" bg="#FFC94A" />
        <CardBody bg="#1C1C1A" display="flex" flexDirection="column" justifyContent="center" p={4}>
          <Heading as="h3" size="md" color="white" mb={2}>
            {item.heading}
          </Heading>
          <Text color="white">{item.description}</Text>
        </CardBody>
      </Card>
    ))}
  </SimpleGrid>
);

export default ICard;
