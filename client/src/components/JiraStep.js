import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const JiraStep = ({ onNextClick }) => {
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
        <Text style={{ marginBottom: '24px' }}>Jira access token</Text>
        <FormControl>
          <FormLabel>Jira access token</FormLabel>
          <Input
            type="text"
            size="sm"
            onChange={(e) => setAccessToken(e.target.value)}
          />
        </FormControl>
        <Button
          isDisabled={!accessToken}
          onClick={() => onNextClick(accessToken)}>
          Next
        </Button>
      </CardBody>
    </Card>
  );
};

export default JiraStep;
