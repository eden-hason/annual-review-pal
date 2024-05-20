import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
} from '@chakra-ui/react';

const GithubStep = ({ onNextClick }) => {
  const [accessToken, setAccessToken] = useState('');

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
        <Text style={{ marginBottom: '24px' }}>Github access token</Text>
        <FormControl>
          <FormLabel>Github access token</FormLabel>
          <Input
            type="text"
            size="sm"
            onChange={(e) => setAccessToken(e.target.value)}
          />
        </FormControl>
        <HStack spacing="8px">
          <Button
            isDisabled={!accessToken}
            onClick={() => onNextClick(accessToken)}>
            Next
          </Button>
          <Button onClick={onNextClick}>Skip</Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GithubStep;
