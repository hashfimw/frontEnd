import Button from "../components/button";
import logo from '../assets/photo.png';
import "./home.css"


function HomePage () {
    
    return (    
        <div className="container">
            <div className="Photo">
                <img alt="photo" src={logo} className="photo"/>
            </div>
            <div className="fontmid">
                <h1 style={{color: 'white'}}>Hellow!</h1>
                <h2 style={{color: 'white'}}>I'm Mister Bean,</h2>
                <h2 style={{color: 'white'}}>a web Designer.</h2>
            <Button/>
            </div> 
        </div>
    )
}

export default HomePage