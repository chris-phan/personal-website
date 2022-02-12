const AboutMe = () => {
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>
                SITE UNDER CONSTRUCTION
            </h1>
            <p style={pStyle}>
                Verdana
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea maxime soluta nihil nostrum aperiam suscipit rem! Tempora, itaque obcaecati, eaque ipsum, iusto libero voluptatibus suscipit nisi tempore officiis animi aut blanditiis. A animi fuga dolore minus, est consequuntur, maiores modi necessitatibus laborum, beatae asperiores aut excepturi sequi impedit molestias sed illo porro nobis esse! Quod veritatis, repudiandae deserunt distinctio odio est magnam. Vero nisi dolorum sint nam eos vel voluptatibus voluptatum quos minus quisquam tenetur dolorem, nulla qui veniam dolore saepe eveniet ea fugiat quasi assumenda, voluptates optio magnam quam iste. Quaerat asperiores, debitis neque cum laudantium laborum harum.
            </p>
            <h1 style={smiley}>:D</h1>
        </div>
    );
}

export default AboutMe;

const divStyle = {
    width: '100%',
    height: '1000px',
    backgroundColor: 'white',
    zIndex: '1',
    position: 'relative'
}

const h1Style = {
    textAlign: 'center',
    fontSize: '100px',
    backgroundColor: 'yellow'
}

const pStyle = {
    width: '50%',
    margin: 'auto',
    textAlign: 'center'
}

const smiley = {
    marginTop: '100rem',
}