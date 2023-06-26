import ProfHeader from './ProfHeader';
import Conversations from './Conversations';
import BalanceFooter from './BalanceFooter';
import './Left.css';

export default function Left({activeConvo, setActiveConvo, activeConvoRef}) {
    return (
        <div className='left'>
            <ProfHeader />
            <Conversations 
                activeConto={activeConvo}
                setActiveConvo={setActiveConvo}
                activeConvoRef={activeConvoRef}
            />
            <BalanceFooter />
        </div>
    );
}