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
  Container,
} from '@chakra-ui/react';

const GithubStep = ({ onNextClick }) => {
  const [accessToken, setAccessToken] = useState('');

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
          </div>

          <div style={{ display: 'flex' }}>
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
              onClick={() => onNextClick(accessToken)}>
              Submit
            </Button>
          </div>
        </Container>
      </CardBody>
    </Card>
  );
};

export default GithubStep;
