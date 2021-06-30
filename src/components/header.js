//allows for prop types
import PropTypes from 'prop-types'
import Button from './button'

//can use props for the object or you can destructure {tittle}
const header = (props) => {
    // const onClick = () =>{
    //     console.log("click");
    
    // }

    
    return (
        <header className= 'header'>
          <h1>{props.title}</h1>
          <Button color={props.showAdd ? 'Red' : 'Green' } text= {props.showAdd ? 'Close' : 'Add' } onClick= {props.onAdd} />
        </header>
        
    )
}

//sets prop defalts
header.defaultProps = {
    title:'Task Tracker',
}

//set type for each prop object
Headers.propTypes = {
    title:  PropTypes.string,  
}

//css in JS (style={headingStyle})
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default header
