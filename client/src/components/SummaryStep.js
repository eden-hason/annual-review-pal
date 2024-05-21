import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import {Card, CardBody, Text, Table, SlideFade, Textarea} from '@chakra-ui/react';
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
          <Textarea style={{ textAlign: 'left',  height:'100%', minHeight:'300px'}} fontSize="md">
            {/*AI-Generated Annual Review Notes*/}
            {/*Performance Summary:*/}

            {/*High Productivity and Code Contribution:*/}

            {/*Committed 200 commits in the past year, indicating a significant contribution to the system code.*/}
            {/*Involved in five huge projects, each comprising over 2000 lines of code across different repositories.*/}
            {/*Impact on Team and Code Quality:*/}

            {/*Conducted 60 code reviews, demonstrating a high level of engagement in improving the team's coding skills.*/}
            {/*Very few bugs were reported for committed tasks, highlighting strong coding skills and attention to detail.*/}
            {/*Cross-Platform and Cross-System Contributions:*/}

            {/*Contributed to five repositories in Approve and one repository in Tipalti, showcasing versatility and the ability to work across multiple platforms and systems.*/}
            {/*Collaboration and Teamwork:*/}

            {/*Completed 10 tasks in collaboration with other employees, illustrating strong teamwork and collaborative skills.*/}
            {/*Project Management and Leadership:*/}

            {/*Managed four big projects, each involving more than five subtasks and spreading over three weeks, demonstrating effective project management and leadership skills.*/}
            Dedication to Customer Success:

            The high number of commits and the quality of code produced directly contributed to the success of our customer-facing projects.
            Collaborative efforts on tasks ensured that customer needs were met efficiently and effectively.
            Get Shit Done:

            The volume of code contributions and code reviews showcases a strong ability to deliver results and maintain a high level of productivity.
            Successfully managed complex projects and ensured timely completion, reflecting a strong "get shit done" attitude.
            Grow Our Talent:

            Conducting numerous code reviews helped in elevating the coding standards of the team, fostering a culture of continuous improvement and learning.
            Collaborating on tasks provided mentorship opportunities and facilitated knowledge sharing among team members.
            Conclusion:
            The past year has been marked by exceptional performance in code contributions, project management, and team collaboration. The ability to deliver high-quality work consistently and contribute to the growth of team members aligns perfectly with our core values. Looking forward to continued success and growth in the coming year.
          </Textarea>
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
