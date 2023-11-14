import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return data;
};

export default useData;
