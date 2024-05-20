import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import {
    Card,
    CardHeader,
    CardBody,
    Spinner,
    Text,
    Box,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Center
} from '@chakra-ui/react';
const Chance = require('chance');
const chance = new Chance();
const SummaryStep = ({}) => {
    const [commits, setCommits] = useState([]);
    const [issues, setIssues] = useState([]);
    const [joinedData, setJoinedData] = useState([]);

    useEffect(() => {
        const fetchUserCommits = async () => {
            return await axios.get('http://localhost:2406/userCommits');
        };
        fetchUserCommits().then((res) => {
            setCommits(res.data);
            console.log('userCommits', commits);
        });

        const fetchUserTickets = async () => {
            return await axios.get('http://localhost:2406/userTickets');
        };
        fetchUserTickets().then((res) => {
            setIssues(res.data?.issues);
           console.log('userTickets', issues);
        });


    }, []);

    useEffect(() => {
        if(issues.length > 0 && commits.length > 0) {
            const data = commits.map(commit => {
                //const issue = issues.find(issue => commit.message.startsWith(issue.key));
                const issue = chance.pickone(issues)
                return issue ? {...commit, key: issue.key} : null;
            }).filter(item => item !== null);
            setJoinedData(data);
        }
    }, [commits, issues]);

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
          alignItems: 'space-between',
          height: '100%',
        }}>
        <Text style={{ marginBottom: '24px' }}>Summary</Text>
          <Box border="1px" borderColor="yellow.500" p={4}>
              {joinedData.length == 0 ? (
                  <Center>
                      <Spinner size="xl" />
                  </Center>
              ) : (
              <StyledTable variant="striped" colorScheme="yellow">
                  <Thead>
                      <Tr>
                          <Th>Lines</Th>
                          <Th>Key</Th>
                          <Th>Date</Th>
                          <Th>The Impact Dscription</Th>
                          <Th>Score</Th>
                      </Tr>
                  </Thead>
                  <Tbody>
                      {joinedData.map((data, index) => (
                          <Tr key={index}>
                              <Td>{data.lines}</Td>
                              <Td>{data.key}</Td>
                              <Td>{new Date(data.date).toLocaleString()}</Td>
                              <Td>{'' }</Td>
                              <Td>{ ''}</Td>
                          </Tr>
                      ))}
                  </Tbody>
              </StyledTable>
                  )}
          </Box>
      </CardBody>

    </Card>
  );
};
const StyledTable = styled(Table)`
  font-size: small;
  color: black;
`;
export default SummaryStep;
