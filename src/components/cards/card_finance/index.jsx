import { Conatianer } from './CardStyles'


export const CardFinance = ({title, prace, icone}) => {
    return (
        <Conatianer>
           {icone}
           <div>
                <h3>{title}</h3>
                <p>R$ {prace}</p>
           </div>
        </Conatianer>
    )
}