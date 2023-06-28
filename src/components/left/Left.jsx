import ProfHeader from './ProfHeader';
import Conversations from './Conversations';
import BalanceFooter from './BalanceFooter';
import './Left.css';

export default function Left({ currProf, activeConvoRef }) {
    return (
        <div className='left'>
            <ProfHeader currProf={currProf} />
            <Conversations
                currProf={currProf}
                activeConvoRef={activeConvoRef}
            />
            <BalanceFooter />
        </div>
    );
}