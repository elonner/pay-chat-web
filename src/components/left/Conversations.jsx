import ProfNames from '../ProfNames/ProfNames';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import formatDate from '../../utilities/formatDate';
import { getAll } from '../../utilities/conversations-api';
import { setActiveConvoAPI } from '../../utilities/users-api';
import { getUser } from '../../utilities/users-service';

export default function Conversations({ activeConvo, setActiveConvo, activeConvoRef }) {
    // const people = [
    //     {
    //         username: 'other_guy',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(),
    //         paymentConfirm: false
    //     }, {
    //         username: 'some_gal',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(2023, 5, 22, 14, 20),
    //         paymentConfirm: false
    //     }, {
    //         username: 'person123',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(2023, 5, 21),
    //         paymentConfirm: true
    //     }, {
    //         username: 'tester',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(2023, 5, 15),
    //         paymentConfirm: false
    //     }, {
    //         username: '__dude__',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(2023, 5, 6),
    //         paymentConfirm: false
    //     }, {
    //         username: 'another',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(2023, 5, 19),
    //         paymentConfirm: true
    //     }, {
    //         username: 'one_more',
    //         first: 'First',
    //         last: 'Last',
    //         img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
    //         date: new Date(2023, 5, 17),
    //         paymentConfirm: false
    //     },
    // ];
    const [convos, setConvos] = useState([]);
    const activeDivRef = useRef(null);

    useEffect(() => {
        async function getConvos() {
            const allConvos = await getAll();
            const allConvosMod = await Promise.all(
                allConvos.map(async (convo) => {
                    const personId = convo.users.find((id) => id !== getUser()._id);  // CHANGE THIS TO POPULATE CAN AVOID ALL THIS SHIT
                    const person = await getUser(personId);
                    return { conversation: convo, person };
                })
            );
            setConvos(allConvosMod);
        }
        getConvos();
        const user = getUser();
        setActiveConvo(user.activeConvo);
    }, []);

    function selectConvo(convo) {
        return function (e) {
            activeConvoRef.current = convo;
            const activeConvo = convo.conversation;
            setActiveConvoAPI(getUser(), {activeConvo});
            const clickedDiv = e.currentTarget;

            clickedDiv.classList.add('activeConvo');
            if (activeDivRef.current && activeDivRef.current !== clickedDiv) {
                activeDivRef.current.classList.remove('activeConvo');
            }
            activeDivRef.current = clickedDiv;
        };
    }

    return (
        <div className='conversations'>
            {convos.sort((a, b) => b.updatedAt - a.updatedAt).map(convo => {
                const formattedDate = formatDate(new Date(convo.conversation.updatedAt));
                return (
                    <Link to="" key={convo.conversation._id}>
                        <div onClick={selectConvo(convo)} className="convoSection">
                            <p className="date">{formattedDate}</p>
                            <ProfNames person={convo.person} />
                            {/* {person.paymentConfirm ? <i className="green-icon fa-solid fa-check fa-3x"></i> : <></>} */}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}