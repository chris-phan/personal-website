import IntroCard from './components/IntroCard.js'
import AboutMe from './components/AboutMe.js'
import Background from './images/wizards_bg.PNG'

const App = () => {
	return (
		<div style={divStyle}>
			<IntroCard />
			<AboutMe />
		</div>
	);
}

export default App;

const divStyle = {
    height: '100%',
    backgroundImage: 'url(' + Background + ')',
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top'
}