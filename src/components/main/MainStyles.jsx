import styled from 'styled-components'

export const Conatianer = styled.main`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #fff;


    .spending-finance {
       display: flex;
       justify-content:center;
       gap: 1rem;
       flex-wrap: wrap;
       align-items: center;
       width: 100%;
       height: 100%;
       padding: 2rem 0;
       background-color: rgba(99, 230, 191, 0.5);
     


       .grafico {
            display: flex;
            height: 100%;
            width: 300px;
            flex-direction: column;
            align-items: center;
           

            .title{
                font-size: 1rem;
                text-align: center;
                padding: 0.5rem 0px;
                background-color: rgba(99, 230, 191, 0);
                width: 100%;
            }

            .despesas-categoria {
                width: 100%;  
                height: 100%;
                overflow-Y: auto;
                position: relative;
                padding-bottom: 0.5rem;
        

                &::-webkit-scrollbar {
                    width: 3px;
                }

                &::-webkit-scrollbar-track {
                    background: transparent;
                }

                &::-webkit-scrollbar-thumb {
                    background:red;
                }
                
                ul {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    list-style: none;
                    flex-wrap: wrap;
                    min-height: 150px;

                    li {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        width: 140px;
                        height: 60px;
                        padding: 0.5rem 0px;
                        
                    
                        h4 {
                            font-size: 0.6rem;
                            text-transform: capitalize;
                        }

                        p {
                            font-size: 0.6rem;
                            font-weight: 700;
                            color: #000;
                        }
                    }
                }
            }
       }

        .despesas {
            height: 100%;
            min-width:300px;
            padding: 0.5rem;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 3px;
            }

            &::-webkit-scrollbar-track {
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                background:red;
            }


            .list-despesas {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                .header-despesas {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 0 0.5rem;

                        .section-icon {
                            display: flex;
                            align-items: center;
                            gap: 1rem;

                            .icon-trash {
                                width: 1.2rem;
                                height: 1.2rem;
                                color: #fff;
                                cursor: pointer;
                                trasition: all 0.5s;

                                &:hover {
                                    transform: scale(1.2);
                                }
                            }
                        }
                    }

                }
               

                ul {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                    gap: 1rem;
                    
                }

                li {
                    display: flex;
                    width: 250px;
                    flex-direction: column;
                    background-color: #fff;
                    border-radius: 0.5rem;
                    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
                    margin: 0.5rem 0;
                    padding: 1rem ;
                    opacity: 0.7;

                    &:hover {
                        opacity: 1;
                    }
                }

                h4 {
                    font-size: 1.4rem;
                    font-weight: 700;
                    text-transform: capitalize;
                    color: #fff;
                    padding: 0.5rem 0;
                }

                h5 {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #000;
                    padding: 0.5rem 0;
                }

                p {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #fff;
                    background-color: #000;
                    padding: 0.3rem;
                    text-transform: capitalize;
                }

            }
        }
     
    }

    
   
`