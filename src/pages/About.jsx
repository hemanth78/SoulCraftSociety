import React from "react";
import { Box, Heading, Text, SimpleGrid, Card, CardBody, Image } from "@chakra-ui/react";

const About = () => (
  <Box className="bg" fontFamily="Montserrat" height="100vh" overflowY="auto" py={16} px={4}>
    <Box textAlign="center" mb={10}>
      <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="#F3B95F" mb={{ base: "5", md: "10" }}>
        Our Story
      </Heading>
      <Text fontSize={{ base: "sm", md: "xl" }} color="#1C1C1A">
        Welcome to Soul Craft Society, where compassion meets action to create meaningful change. Founded with a vision to uplift underprivileged
        communities, we are a new NGO dedicated to making a positive impact on the world. Our journey began with a simple yet powerful idea - that
        every individual deserves the opportunity to thrive, regardless of their circumstances. Through our unwavering commitment to our mission and
        values, we strive to ignite hope and empower lives.
      </Text>
    </Box>

    <Box textAlign="center" mb={10}>
      <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="#F3B95F" mb={{ base: "5", md: "10" }}>
        Meet the Hearts Behind Soul Craft Society
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} borderRadius="md" boxShadow="md">
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <Image src={`https://via.placeholder.com/150`} alt={`Person ${index + 1}`} borderRadius="full" boxSize="200px" mb={4} bg="teal" />
              <Heading as="h3" size="md" mb={2}>
                Person {index + 1}
              </Heading>
              <Text>This is a brief description of Person {index + 1}.</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>

    <Box textAlign="center">
      <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="#F3B95F" mb={{ base: "5", md: "10" }}>
        Sparking Change with Heartfelt Actions
      </Heading>
      <Text fontSize={{ base: "sm", md: "xl" }} color="#1C1C1A">
        At Soul Craft Society, we believe in spreading joy, hope, and opportunity to those who need it most. With compassion and determination, we
        uplift communities and transform lives. Our scholarship programs offer more than financial assistance; they fulfill dreams and brighten
        futures. Through skill development initiatives, we nurture talents and unlock potential. Our community outreach efforts focus on spreading
        love and building solidarity. It's not just about what we do, but how we do it—with kindness, empathy, and heart. Join us in spreading smiles,
        one heart at a time. Together, we create a world where everyone shines brighter and finds their craft.
      </Text>
    </Box>
  </Box>
);

export default About;
