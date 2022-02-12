import Notepad from './Notepad'
import Background from '../images/wizards_bg.PNG'

const IntroCard = () => {
    return (
        <div style={divStyle} id='landingScreen'>
            <Notepad />
        </div>
    );
}

export default IntroCard;

const divStyle = {
    height: '100%',
    backgroundImage: 'url(' + Background + ')',
    backgroundSize: 'cover'
}