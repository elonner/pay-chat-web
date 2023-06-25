import ProfNames from '../ProfNames/ProfNames';

export default function ChatHeader() {
    const currPerson = {
        username: 'other_guy',
        first: 'First',
        last: 'Last',
        img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg'
    }
    
    return (
        <div>
            <div className='chatHeader'>
                <ProfNames person={currPerson} />
                <div className="paySection">
                    <input className='payInput' type="text" placeholder="$00.00" />
                    <button className="payBtn">PAY</button>
                </div>
            </div>
        </div>
    );
}