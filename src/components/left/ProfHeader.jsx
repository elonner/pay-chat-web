import ProfNames from '../ProfNames/ProfNames';

export default function ProfHeader() {
    const currPerson = {
        username: 'username',
        first: 'First',
        last: 'Last',
        img: 'https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png'
    }

    function testClick() {
        alert('logout');
    }

    return (
        <div>
            <div className='profHeader'>
                <p onClick={testClick} className='logOut'>Log Out</p>
                <ProfNames className="userProfNames" person={currPerson} />
            </div>
        </div>
    );
}