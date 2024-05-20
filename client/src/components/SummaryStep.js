import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, Button, Text } from '@chakra-ui/react';

const SummaryStep = ({}) => {
    useEffect(() => {
        const fetchUserCommits = async () => {
            return await axios.get('http://localhost:2406/userCommits');
        };
        fetchUserCommits().then((res) => {
            console.log('userCommits', res.data);
        });

        const fetchUserTickets = async () => {
            return await axios.get('http://localhost:2406/userTickets');
        };
        fetchUserTickets().then((res) => {
            console.log('userTickets', res.data?.issues);
        });
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
          alignItems: 'space-between',
          height: '100%',
        }}>
        <Text style={{ marginBottom: '24px' }}>Summary</Text>
      </CardBody>
    </Card>
  );
};

export default SummaryStep;
