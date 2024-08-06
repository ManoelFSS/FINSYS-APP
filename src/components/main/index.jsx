import React, { useState, useContext, useEffect } from 'react';
import { Conatianer } from '../main/MainStyles';
import { CardFinance } from '../cards/card_finance';

import { FcBearish } from "react-icons/fc";
import { FaRegSquare, FaEdit  } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";


import randomColor from 'randomcolor';


import PieChatComponent from '../PieChart/PieChartComponent';
import { MyContext } from '../../Context';
import { Formulario } from '../modalForm/Formulario';

export const Main = () => {

    const { data, deleteTransaction } = useContext(MyContext);

    const [transactionId, setTransactionId] = useState();
    const [createEditeTransaction, setCreateEditeTransaction] = useState(false);


    const [despesasTotais, setDespesasTotais] = useState(0);
    const [categories, setCategories] = useState([]);
    const [categoryTotals, setCategoryTotals] = useState([]);
    const [chartData, setChartData] = useState([]);

    const [type , setType] = useState("");
    const [category , setCategory] = useState("");
    const [amount , setAmount] = useState("");
    const [title , setTitle] = useState("");

    const newDAta = data.map((d, index) => ({ 
        ...d, 
        color: `hsl(${(index * 360) / data.length}, 70%, 50%)`

    }));

    useEffect(() => {

        console.log(newDAta);

        const sumByCategory = (data) => {
            return data.reduce((acc, { category, amount }) => {
                if (!acc[category]) {
                    acc[category] = amount;
                } else {
                    acc[category] += amount;
                }
                return acc;
            }, {});
        };

        const categoryTotals = sumByCategory(newDAta);
        console.log(categoryTotals);

        const chartData = Object.keys(categoryTotals).map((category, index) => ({
            title: category,
            value: categoryTotals[category],
            color: `hsl(${(index * 360) / Object.keys(categoryTotals).length}, 70%, 50%)`,
        }));

        console.log(chartData);

        setDespesasTotais(chartData.reduce((acc, { value }) => acc + value, 0));
        setCategories(Object.keys(categoryTotals));
        setCategoryTotals(categoryTotals);
        setChartData([...chartData]);
    }, [data]);


    function formatToBRL(value) {
        // Usa o Intl.NumberFormat para formatar o número como moeda
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }

    const handleDelete = (id) => {
        deleteTransaction(id);
    }

    const  handleUpdate = (id) => {
        setTransactionId(id);
        setCreateEditeTransaction(true);

        const transaction = newDAta.find((transaction) => transaction._id === id);
        setType(transaction.type);
        setCategory(transaction.category);
        setAmount(transaction.amount);
        setTitle(transaction.title);

    }


    return (
        <Conatianer>
            <section className='spending-finance'>
                <div className='grafico'>
                    <CardFinance title="Despesas Totais" prace={formatToBRL(despesasTotais)} icone={<FcBearish className='icon' />} />
                    <PieChatComponent teste={chartData} />
                    <h4 className='title'>{categories.length > 0 ? "Despesas por categoria" : "Nenhuma Despesa Cadastrada"}</h4>
                    <div className='despesas-categoria'>
                        
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <FaRegSquare style={{ backgroundColor: chartData[index]?.color, color: chartData[index]?.color }} />
                                    <h4>{category}</h4>
                                <p>{`${formatToBRL(categoryTotals[category]?.toFixed(2))}`}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className='despesas'>
                    <div className='list-despesas'>
                        <ul>
                            {newDAta.map((item , index) => (
                                <li key={item._id} style={{ backgroundColor: item.color}}  >
                                    <div className='header-despesas'>
                                        <h4>{item.title}</h4>
                                        <div className='section-icon'>
                                            <IoTrashBinSharp 
                                                className='icon-trash' 
                                                onClick={() => handleDelete(item._id)}
                                            />
                                            <FaEdit 
                                                className='icon-trash' 
                                                onClick={() => handleUpdate(item._id)}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Valor da despesa</h5>
                                        <p>{`${formatToBRL(item.amount.toFixed(2))}`}</p>
                                    </div>
                                    <div>
                                        <h5>Data da despesa</h5>
                                        <p>{`${item.createDate}`}</p>
                                    </div>
                                    <div>
                                        <h5>Categoria</h5>
                                        <p>{`${item.category}`}</p>
                                    </div>
                                   <div>
                                        <h5>Metodo de Pagamento</h5>
                                        <p>{`${item.type}`}</p>
                                   </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Formulario 
                    transactionId={transactionId}
                    createEditeTransaction={createEditeTransaction} 
                    setType={setType}
                    setCategory={setCategory}
                    setAmount={setAmount}
                    setTitle={setTitle}
                    type={type}
                    category={category}
                    amount={amount}
                    title={title}
                    setCreateEditeTransaction={setCreateEditeTransaction}
                 />

            </section>
        </Conatianer>
    );
};
