import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100%;
  background-color: rgba(99, 230, 191, 1);
  padding: 1rem;

  
    h3 {
        color: #000;
        font-size: 1.3rem;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
        padding-bottom: 1rem;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
    }


    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
        padding: 1rem 0;
        width: 200px;

       
        label {
            display:block;
            font-size: 1rem;
            font-weight: bold;
            color: #000;
            padding-bottom: 0.3rem;
        }

        input {
            padding: 0.5rem;
            border-radius: 0.3rem;
            width: 160px;
            font-size: 0.8rem;
            font-weight: bold;
            color: #000;
            transition: 0.3s;
            outline: none;
            box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.4);
            border: 2px solid trasparent;

            &:focus {
                border: 2px solid #63E6BE;
            }

            &::placeholder {
                color : #aaa;
                font-size: 0.7rem;
            }
            
            

        }

        input:not(:placeholder-shown) {
            border: 2px solid #63E6BE;
        }

        input:focus:placeholder-shown {
            border: 2px solid #63E6BE;
        }


        button {
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid #000;
            width: 160px;
            background-color: #63E6BE;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            border:none;
            box-shadow:  0px 2px 6px rgba(0, 0, 0, 0.4);
            &:hover {
               background-color: #000;
            }
        }
    }

    

`