import ProfNames from '../ProfNames';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import formatDate from '../../utilities/formatDate';

export default function Conversations() {
    const people = [
        {
            username: 'other_guy',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(),
            paymentConfirm: false
        }, {
            username: 'some_gal',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(2023, 5, 22, 14, 20),
            paymentConfirm: false
        }, {
            username: 'person123',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(2023, 5, 21),
            paymentConfirm: true
        }, {
            username: 'tester',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(2023, 5, 15),
            paymentConfirm: false
        }, {
            username: '__dude__',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(2023, 5, 6),
            paymentConfirm: false
        }, {
            username: 'another',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(2023, 5, 19),
            paymentConfirm: true
        }, {
            username: 'one_more',
            first: 'First',
            last: 'Last',
            img: 'https://img.myloview.com/canvas-prints/white-cat-kitten-kitty-icon-cute-kawaii-cartoon-round-character-funny-head-face-happy-valentines-day-pink-cheeks-baby-greeting-card-template-blue-background-isolated-flat-design-700-196364716.jpg',
            date: new Date(2023, 5, 17),
            paymentConfirm: false
        },
    ];

    useEffect(() => {

    }, []);

    return (
        <div className='conversations'>
            {people.sort((a, b) => b.date - a.date).map(person => {
                const formattedDate = formatDate(person.date);
                return (
                    <Link to="" key={person.username}>
                        <div className="convoSection">
                            <p className="date">{formattedDate}</p>
                            <ProfNames person={person} />
                            {person.paymentConfirm ? <i className="check fa-solid fa-check fa-3x"></i> : <></>}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}