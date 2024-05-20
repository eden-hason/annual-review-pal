import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Card, CardBody, Text, Table, SlideFade } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
const Chance = require('chance');
const chance = new Chance();
const SummaryStep = ({}) => {
  const rowsPerPage = 5; // Set the number of rows per page

  const [commits, setCommits] = useState([]);
  const [issues, setIssues] = useState([]);
  const [joinedData, setJoinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRows, setCurrentRows] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [indexOfLastRow, setIndexOfLastRow] = useState(1);
  const [indexOfFirstRow, setIndexOfFirstRow] = useState(1);

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
    if (issues.length > 0 && commits.length > 0) {
      const data = commits
        .map((commit) => {
          //const issue = issues.find(issue => commit.message.startsWith(issue.key));
          const issue = chance.pickone(issues);
          return issue ? { ...commit, key: issue.key } : null;
        })
        .filter((item) => item !== null);

      setTotalPages(Math.ceil(data.length / rowsPerPage));
      const lastRow = currentPage * rowsPerPage;
      setIndexOfLastRow(lastRow);
      setIndexOfFirstRow(lastRow - rowsPerPage);

      setJoinedData(data);
    }
  }, [commits, issues]);

  useEffect(() => {
    const lastRow = currentPage * rowsPerPage;
    setIndexOfLastRow(lastRow);
    setIndexOfFirstRow(lastRow - rowsPerPage);
    setCurrentRows(joinedData.slice(indexOfFirstRow, indexOfLastRow));
  }, [currentPage, joinedData]);

  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
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
          alignItems: 'space-between',
          height: '100%',
        }}>
        <Text fontSize="2xl" style={{ marginBottom: '16px' }}>
          Summary
        </Text>

        <SlideFade in={true} offsetY="20px">
          <Text style={{ textAlign: 'left' }} fontSize="md">
            Summary text goes here...
          </Text>
        </SlideFade>

        {/* <Box border="1px" borderColor="yellow.500" p={4}>
          {joinedData.length == 0 ? (
            <Center>
              <Spinner size="xl" />
            </Center>
          ) : (
            <>
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
                  {currentRows.map((row, index) => (
                    <Tr key={index}>
                      <Td>{row.lines}</Td>
                      <Td>{row.key}</Td>
                      <Td>{new Date(row.date).toLocaleString()}</Td>
                      <Td>{''}</Td>
                      <Td>{''}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </StyledTable>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={4}>
                <ButtonGroup size="sm">
                  <IconButton
                    icon={<ArrowLeftIcon />}
                    onClick={handlePreviousPage}
                    isDisabled={currentPage === 1}
                  />
                  <IconButton
                    icon={<ArrowRightIcon />}
                    onClick={handleNextPage}
                    isDisabled={currentPage === totalPages}
                  />
                </ButtonGroup>
                <Text>
                  Page {currentPage} of {totalPages}
                </Text>
              </Box>
            </>
          )}
        </Box> */}
      </CardBody>
    </Card>
  );
};
const StyledTable = styled(Table)`
  font-size: small;
  color: black;
`;
export default SummaryStep;
