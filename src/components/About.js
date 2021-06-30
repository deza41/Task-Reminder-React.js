import {Link} from 'react-router-dom'
import AboutHeader from './AboutHeader'

const About = () => {
    return (
        <div>
            <AboutHeader className="footer" />
            <h4> Version 1.0.0</h4>
            <Link to='/'>Go back </Link>
        </div>
    )
}

export default About
