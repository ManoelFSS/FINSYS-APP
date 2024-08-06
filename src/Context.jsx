import React, { useState, useEffect, createContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {

    const [data, setData] = useState([]);

    // Função para buscar dados da API
    const getTransactions = async () => {

        try {
            const response = await fetch('https://finsys.up.railway.app/transactions');

            if (!response.ok) {
                throw new Error('error na requisição');
            }

            const data = await response.json();
            return data;
            
        } catch (error) {
            console.log(error);
        }
        
    };

    const  createTransaction = async (type, category, amount, title) => {
        
        try {
          const response = await fetch('https://finsys.up.railway.app/transactions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              type: type,
              category: category,
              amount: Number(amount),
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json(); // Manipule os dados conforme necessário

          const updatedData = await getTransactions();
          setData(updatedData);
          console.log(updatedData);
          

        } catch (error) {
          console.error('Fetch error:', error); // Lida com erros
        }
      };
      
      // Chama a função para enviar os dados
    //   createTransaction();

 


    const updateTransaction = async (id, type, category, amount, title) => {
        try {
          const response = await fetch(`https://finsys.up.railway.app/transactions/${id}`, {
            method: 'PUT', // Define o método como PUT
            headers: {
              'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify({
              title: title,
              type: type,
              category: category,
              amount: Number(amount),
            }), // Dados atualizados
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json(); // Converte a resposta em JSON

          const updatedData = await getTransactions();
          setData(updatedData);
          console.log(updatedData);

        } catch (error) {
          console.error('Fetch error:', error); // Lida com erros
        }
      };
      


    const deleteTransaction = async (id) => {
        console.log(id);

        try {
          const response = await fetch(`https://finsys.up.railway.app/transactions/${id}`, {

            method: 'DELETE', // Define o método como PUT
            headers: {
              'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            }

          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json(); // Converte a resposta em JSON
          console.log(data); // Manipule os dados conforme necessário

          const updatedData = await getTransactions();
          setData(updatedData);
          console.log(updatedData);

        } catch (error) {
          console.error('Fetch error:', error); // Lida com erros
        }
    };


    // useEffect para buscar dados quando o componente monta
    useEffect(() => {
        const fetchData = async () => {
            const data = await getTransactions();
            setData(data);
        };
        fetchData();

        }, []);


  return (
    <MyContext.Provider value={{
        data,
        createTransaction,
        updateTransaction,
        deleteTransaction
    }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
