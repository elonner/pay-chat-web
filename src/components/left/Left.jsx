import ProfHeader from './ProfHeader';
import Conversations from './Conversations';
import BalanceFooter from './BalanceFooter';
import './Left.css';

export default function Left({ currProf, convos, setConvos, selectConvo, activeConvo, setActiveConvo, messages }) {
    return (
        <div className='left'>
            <ProfHeader 
                currProf={currProf}
                convos={convos}
                setConvos={setConvos}
                setActiveConvo={setActiveConvo}
            />
            <Conversations
                currProf={currProf}
                convos={convos}
                selectConvo={selectConvo}
                setConvos={setConvos}
                activeConvo={activeConvo}
                setActiveConvo={setActiveConvo}
                messages={messages}
            />
            <BalanceFooter />
        </div>
    );
}