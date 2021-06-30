
const AboutHeader = (props) => {

    return (
        <header className= 'header'>
          <h1>{props.title}</h1>
        </header>
        
    )
}

AboutHeader.defaultProps = {
    title:'Task Tracker',
}

export default AboutHeader
