import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  SlideFade,
  Box,
} from '@chakra-ui/react';
import axios from 'axios';

const JiraStep = ({ onNextClick }) => {
  const [accessToken, setAccessToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [jiraSummary, setJiraSummary] = useState(null);

  const handleSubmitClick = () => {
    setIsLoading(true);

    axios
      .get(`http://localhost:2406/tickets-summary?accessToken=${accessToken}`)
      .then((res) => {
        console.log('res', res);
        setIsLoading(false);
        setJiraSummary(res);
      });
  };

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <img
            src="https://assets-global.website-files.com/621c63f4d47b2e3664b182bb/661e5ee6d4d6f14c2d8a6e2c_81c17e59-bc19-4b12-b54f-9af911a35c62.jpeg"
            style={{ width: '24px', marginRight: '8px' }}
          />
          <Text fontSize="2xl">Jira Setup</Text>
        </div>
        <div>
          {!isLoading && !jiraSummary && (
            <>
              <FormControl style={{ marginBottom: '3px' }}>
                <FormLabel>
                  First let's connect to your Jira account to pull all the tasks
                  you've worked on this year
                </FormLabel>
                <Input
                  placeholder="Jira access token"
                  type="text"
                  onChange={(e) => setAccessToken(e.target.value)}
                />
              </FormControl>
            </>
          )}

          {isLoading && <Text fontSize="xl">Getting Jira data...</Text>}

          <SlideFade in={!!jiraSummary} offsetY="20px">
            <Text fontSize={'xl'}>
              Nice!
              <br /> During the year you worked on 68 tasks, of which 22 were
              bug fixes
            </Text>
          </SlideFade>
        </div>

        <div>
          {!isLoading && !jiraSummary && (
            <Button
              colorScheme="teal"
              width={'100%'}
              isDisabled={!accessToken}
              onClick={() => handleSubmitClick()}>
              Submit
            </Button>
          )}

          {isLoading && <Spinner />}

          {!!jiraSummary && (
            <Button
              colorScheme="teal"
              width={'100%'}
              isDisabled={!accessToken}
              onClick={() => onNextClick(accessToken)}>
              Next
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default JiraStep;
