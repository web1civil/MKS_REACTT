import { useState, useEffect, useRef } from 'react';

const useCustomHook = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    // ��������� ��������� ����� � "�������"
    const fetchData = async () => {
      try {
        // ���� ����� ��� ��������� �����, ���������, ������ API ��� ������� � localstorage
        // � ������ ������� ������������� json-server
        const response = await fetch('http://localhost:3001/data');
        const result = await response.json();

        if (isMounted.current) {
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // �����������, �� ��������� �� ������� ���� ���� ����, �� ��������� ��� ���������
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { data };
};

export default useCustomHook;