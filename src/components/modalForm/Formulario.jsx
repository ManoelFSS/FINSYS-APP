import React, { useState, useContext } from 'react'
import { Container } from './FormStyles'
import { MyContext } from '../../Context'

export const Formulario = ({transactionId, createEditeTransaction, setType, setCategory, setAmount, setTitle, type, category, amount, title, setCreateEditeTransaction}) => {

    const { createTransaction, updateTransaction  } = useContext(MyContext);

    const [closeModal, setCloseModal] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (type !== '' && category !== '' && amount !== '' && title !== '') {

            if(createEditeTransaction) {
                updateTransaction(transactionId, type, category, amount, title );
                console.log('update');
                setCreateEditeTransaction(false);
            }else {
                createTransaction(type, category, amount, title);
            }
            
        }else {
            alert('Preencha todos os campos');
            return
        }

        setTitle('');
        setAmount('');
        setCategory('');
        setType('');

        setCloseModal(true);

    }


    return (
        <Container>
            <h3>Cadastrar Despesa</h3>
            <div>
                <form action="#">
                    <div> 
                        <label htmlFor="title">Nome da Despesa</label>
                        <input 
                            type="text" 
                            id="dtitle" 
                            placeholder="Ex: pizza" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="amount">Valor da Despesa</label>
                        <input 
                            type="number" 
                            id="damount"
                            placeholder="Ez: 1000" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <input 
                            type="text" 
                            id="dcategory" 
                            placeholder="Ex: refeição, eletronico etc..."
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div> 
                        <label htmlFor="type">Tipo de Pagamento</label>
                        <input 
                            type="text" 
                            id="type" 
                            placeholder="Ex: pix, boleto, cartão ..." 
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>

                    <button 
                        onClick={handleSubmit}
                        type="submit"
                    >   
                       { createEditeTransaction ? 'Atualizar' : "Cadastrar"}
                    </button>

                </form>

            </div>
        </Container>
    )
}