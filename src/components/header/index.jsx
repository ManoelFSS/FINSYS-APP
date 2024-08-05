import { Conatianer } from './headerStyles'
import { RiMoneyDollarCircleFill } from "react-icons/ri";


export const Header = () => {
    return (
        <Conatianer>
            <RiMoneyDollarCircleFill className='icon-money' />
            <span className='icon-after'></span>
            <h1>FinSys</h1>
        </Conatianer>
    )
}