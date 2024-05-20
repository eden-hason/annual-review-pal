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
        <Text style={{ marginBottom: '24px' }}>Github access token</Text>

        <div>
          <FormControl style={{ marginBottom: '8px' }}>
            <FormLabel>Github access token</FormLabel>
            <Input
              type="text"
              onChange={(e) => setAccessToken(e.target.value)}
            />
          </FormControl>
          <div style={{ display: 'flex' }}>
            <Button
              style={{ flex: '50%', marginRight: '8px' }}
              onClick={onNextClick}>
              Skip
            </Button>
            <Button
              style={{ flex: '50%' }}
              isDisabled={!accessToken}
              onClick={() => onNextClick(accessToken)}>
              Next
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default GithubStep;
