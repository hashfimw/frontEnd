import "./navbar.css"
import NavItem from "./navitem"
import logo from '../assets/logo.png'

interface IProps {
    name : string
}

function Navbar (props : IProps) {

    return (
        <div className="navbar">
            <div style={{flex:1}}>
                <img alt="logo" src={logo} className="logo"/>
            </div>
            <NavItem />
            <p style={{textAlign:'end', fontSize:'15px'}}>Hello, {props.name}</p>
        </div>
    )
}

export default Navbar