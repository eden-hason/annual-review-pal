import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  SlideFade,
  Container,
  Spinner,
  Link,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import axios from 'axios';

const GithubStep = ({ onNextClick }) => {
  const [accessToken, setAccessToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [githubSummary, setGithubSummary] = useState(null);

  const handleSubmitClick = () => {
    setIsLoading(true);
    const response = axios
      .get(`http://localhost:2406/commits-summary`)
      .then((res) => {
        setIsLoading(false);
        setGithubSummary(res);
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
            {isLoading && (
              <SlideFade in={isLoading} offsetY="20px">
                <Text fontSize="xl">Getting Github data...</Text>
              </SlideFade>
            )}

            {!isLoading && githubSummary && (
              <SlideFade in={!isLoading && githubSummary} offsetY="20px">
                <Text fontSize={'xl'}>
                  Employee Of The Year 🔥
                  <br /> You performed 150 commits and 47 code reviews this
                  year, Good job!
                </Text>
              </SlideFade>
            )}

            {!isLoading && !githubSummary && (
              <FormControl style={{ marginBottom: '8px' }}>
                <FormLabel>
                  If you're a developer, adding an access token to Github can
                  help us compile a deeper analysis
                  <Link
                    style={{ marginLeft: '6px' }}
                    color="teal.500"
                    href="https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
                    target="_blank">
                    <QuestionOutlineIcon />
                  </Link>
                </FormLabel>
                <Input
                  placeholder="Github access token"
                  type="text"
                  onChange={(e) => setAccessToken(e.target.value)}
                />
              </FormControl>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '40px',
            }}>
            {isLoading && <Spinner />}

            {!isLoading && !githubSummary && (
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
                  onClick={handleSubmitClick}>
                  Submit
                </Button>
              </>
            )}

            {!isLoading && githubSummary && (
              <Button
                colorScheme="teal"
                style={{ flex: '1' }}
                isDisabled={!accessToken}
                onClick={onNextClick}>
                Go to summary
              </Button>
            )}
          </div>
        </Container>
      </CardBody>
    </Card>
  );
};

export default GithubStep;
