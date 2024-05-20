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
    Container, Spinner, SlideFade,
} from '@chakra-ui/react';
import axios from "axios";

const GithubStep = ({ onNextClick }) => {
  const [accessToken, setAccessToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [gitHubSummary, setGitHubSummary] = useState(null);

    const handleSubmitClick = () => {
        setIsLoading(true);

        setTimeout(() => {
            const somedata = [
                { key: 'APRV-42383', summary: 'Example issue summary 1' },
                { key: 'APRV-42384', summary: 'Example issue summary 2' },
            ];
            setGitHubSummary(somedata);
            setIsLoading(false);
        }, 5000); // Wait for 5 seconds
    };

  return (
    <Card
      style={{
        height: '400px',
        maxHeight: '600px',
        width: '800px',
        maxWidth: '800px',
      }}>
      <CardBody>
        <Container
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFUDe-vdiprKpCsiLoRmfCdUq0WS5tqUR9fyEzJjQ0g&s"
              style={{ width: '24px', marginRight: '8px' }}
            />
            <Text fontSize="2xl">Github Setup</Text>
          </div>

          <div>
              {!isLoading && !gitHubSummary && (
                  <>
            <FormControl style={{ marginBottom: '8px' }}>
              <FormLabel>
                If you're a developer, adding an access token to Github can help
                us compile a deeper analysis
              </FormLabel>
              <Input
                placeholder="Github access token"
                type="text"
                onChange={(e) => setAccessToken(e.target.value)}
              />
            </FormControl>
                  </>
              )}
              {isLoading && <Text fontSize="xl">Getting Jira data...</Text>}

              <SlideFade in={!!gitHubSummary} offsetY="20px">
                  <Text fontSize={'xl'}>
                      Employee Of The Year!
                      <br /> You created 150 commits this year! Good job!
                  </Text>
              </SlideFade>
          </div>

          <div >
              {!isLoading && !gitHubSummary && (
                  <>
                  <Button
                      colorScheme="teal"
                      variant="outline"
                      style={{ flex: '50%', marginRight: '8px' }}
                      onClick={onNextClick}>
                      Skip
                  </Button>
                    <Button
                        colorScheme="teal"
                        style={{ flex: '50%' }}
                        isDisabled={!accessToken}
                        onClick={() => handleSubmitClick(accessToken)}>
                        Submit
                    </Button>
                  </>
              )}

              {isLoading && <Spinner />}

              {!!gitHubSummary && (
                <Button
                  colorScheme="teal"
                  width={'100%'}
                  isDisabled={!accessToken}
                  onClick={() => onNextClick(accessToken)}>
                  Submit
                </Button>
              )}
          </div>
        </Container>
      </CardBody>
    </Card>
  );
};

export default GithubStep;
