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
        <Text>Jira access token</Text>
        <div>
          <FormControl style={{ marginBottom: '3px' }}>
            <FormLabel>Jira access token</FormLabel>
            <Input
              type="text"
              onChange={(e) => setAccessToken(e.target.value)}
            />
          </FormControl>
          <Button
            width={'100%'}
            isDisabled={!accessToken}
            onClick={() => onNextClick(accessToken)}>
            Next
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default JiraStep;
