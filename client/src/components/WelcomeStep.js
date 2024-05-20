import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, Button, Text } from '@chakra-ui/react';

const WelcomeStep = ({ onNextClick }) => {
  const [userTickets, setUserTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:2406/userTickets');

      return response.data;
    };

    // fetchData().then((res) => setUserTickets(res));
  }, []);

  return (
    <Card
      style={{
        height: '400px',
        maxHeight: '600px',
        width: '800px',
        maxWidth: '800px',
      }}>
      <CardBody
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <Text>
          Welcome to{' '}
          <span style={{ color: '#2C7A7B', fontWeight: 'bold' }}>Apprise</span>
          Me
        </Text>
        <div style={{ textAlign: 'left' }}>
          <Text fontSize="lg" style={{ marginBottom: '8px' }}>
            The tool that will help you be ready for the annual review
          </Text>
          <Text fontSize="md">
            Using APIs and AI, you can get an in-depth summary of your
            performance over the past year in less than a minute
          </Text>
        </div>
        <Button colorScheme="teal" onClick={onNextClick}>
          Let's start
        </Button>
      </CardBody>
    </Card>
  );
};

export default WelcomeStep;
