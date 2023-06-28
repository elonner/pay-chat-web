import ProfNames from '../ProfNames/ProfNames';
import { getOther } from '../../utilities/users-service';

export default function ChatHeader({activeConvoRef}) {
    return (
        <div>
            <div className='chatHeader'>
                <ProfNames prof={getOther(activeConvoRef?.current)} />
                <div className="paySection">
                    <input className='payInput' type="text" placeholder="$00.00" />
                    <button className="payBtn">PAY</button>
                </div>
            </div>
        </div>
    );
}