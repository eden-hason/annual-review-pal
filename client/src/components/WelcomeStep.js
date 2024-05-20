import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, Button, Text } from '@chakra-ui/react';

const WelcomeStep = ({ onNextClick }) => {
  const [userTickets, setUserTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:2406/userTickets');

      console.log('response.data', response.data);

      return response.data;
    };

    fetchData().then((res) => setUserTickets(res));
  }, []);

  return (
    <Card
      style={{
        background: 'unset',
        color: 'white',
        boxShadow: 'unset',
        border: '1px solid white',
        height: '400px',
        minHeight: '400px',
        width: '600px',
        maxWidth: '600px',
      }}>
      <CardBody
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-between',
          height: '100%',
        }}>
        <Text style={{ marginBottom: '24px' }}>Welcome to Apprise Me!</Text>
        <Button onClick={onNextClick}>Next</Button>
      </CardBody>
    </Card>
  );
};

export default WelcomeStep;
