import Notepad from './Notepad'

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
}