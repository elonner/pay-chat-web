import ProfHeader from './ProfHeader';
import Conversations from './Conversations';
import BalanceFooter from './BalanceFooter';
import './Left.css';

export default function Left() {
    return (
        <div className='left'>
            <ProfHeader />
            <Conversations />
            <BalanceFooter />
        </div>
    );
}