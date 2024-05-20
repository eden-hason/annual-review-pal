import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Step1 = ({}) => {
  const [userTickets, setUserTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:2406/userTickets');

      console.log('response.data', response.data);

      return response.data;
    };

    fetchData().then((res) => setUserTickets(res));
  }, []);
  return 'Step 1';
};

export default Step1;
