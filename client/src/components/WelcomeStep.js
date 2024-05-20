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

    fetchData().then((res) => setUserTickets(res));
  }, []);

  return (
    <Card
      style={{
        background: 'unset',
        color: 'white',
        boxShadow: 'unset',
        height: '400px',
        minHeight: '400px',
        width: '600px',
        maxWidth: '600px',
      }}>
      <CardBody
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <Text>Welcome to AppriseMe!</Text>
        <Button onClick={onNextClick}>Next</Button>
      </CardBody>
    </Card>
  );
};

export default WelcomeStep;
