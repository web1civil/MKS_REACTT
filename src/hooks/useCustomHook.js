import { useState, useEffect, useRef } from 'react';

const useCustomHook = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    // Симулюємо отримання даних з "бекенду"
    const fetchData = async () => {
      try {
        // Ваша логіка для отримання даних, наприклад, виклик API або читання з localstorage
        // В даному випадку використовуємо json-server
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

    // Забезпечуємо, що компонент не оновлює стан після того, як компонент був видалений
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { data };
};

export default useCustomHook;