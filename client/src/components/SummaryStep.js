import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, Button, Text } from '@chakra-ui/react';

const SummaryStep = ({}) => {
  useEffect(() => {}, []);

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
        <Text style={{ marginBottom: '24px' }}>Summary</Text>
      </CardBody>
    </Card>
  );
};

export default SummaryStep;
