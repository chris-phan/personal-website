const AboutMe = () => {
	return (
		<div style={divStyle}>
			<h1
				style={{
					fontSize: '5vw',
					backgroundColor: 'transparent',
					color: 'darkblue',
					textAlign: 'center',
                    marginTop: '10vh',
				}}
			>
				CHRIS PHAN
			</h1><br/><br/>
			<p style={pStyle}>
				Hi! I'm Chris (he/they), a first year Computer Science major at
				UCD. In the past, I was an avid FPS player, but now, I mainly
				play rogue-likes and platformers. I enjoy historical trivia and
				writing limericks. Here's one I wrote about myself:<br/><br/>

                <i>I'm a CS major don't be scared</i><br/>
                <i>Please know that I wasn't </i><code>--force</code><i>d, I'm aware</i><br/>
				<i>That that crowd's perception </i><br/>
                <code>throws</code> <i>an expcetion</i><br/>
                <i>I </i><code>Promise</code> <i>I'm normal. I swear</i><br/><br/>
            
                <code>Uncaught (in promise)<code style={{color: 'black'}}>undefined</code></code><br/>
				My goal is to be the polar opposite of a stereotypical CS major
				but after spending my weekends making this website, I can't say
				that it is going well.
				<br/><br/>
            </p>
			<h1 style={h1Style}>SITE UNDER CONSTRUCTION</h1>
			<p style={pStyle}>
				Verdana
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Expedita ea maxime soluta nihil nostrum aperiam suscipit rem!
				Tempora, itaque obcaecati, eaque ipsum, iusto libero
				voluptatibus suscipit nisi tempore officiis animi aut
				blanditiis. A animi fuga dolore minus, est consequuntur, maiores
				modi necessitatibus laborum, beatae asperiores aut excepturi
				sequi impedit molestias sed illo porro nobis esse! Quod
				veritatis, repudiandae deserunt distinctio odio est magnam. Vero
				nisi dolorum sint nam eos vel voluptatibus voluptatum quos minus
				quisquam tenetur dolorem, nulla qui veniam dolore saepe eveniet
				ea fugiat quasi assumenda, voluptates optio magnam quam iste.
				Quaerat asperiores, debitis neque cum laudantium laborum harum.
			</p>
			<h1 style={smiley}>:D</h1>
		</div>
	);
};

export default AboutMe;

const divStyle = {
	width: 'auto',
	height: '100vh',
	backgroundColor: 'transparent',
	zIndex: '1',
	position: 'relative',
};

const h1Style = {
	width: '100%',
	textAlign: 'center',
	fontSize: '5vw',
	backgroundColor: 'yellow',
    marginTop: '5vh'
};

const pStyle = {
	width: '65%',
	margin: 'auto',
	backgroundColor: 'transparent',
};

const smiley = {
	backgroundColor: 'red',
	marginTop: '100rem',
};
