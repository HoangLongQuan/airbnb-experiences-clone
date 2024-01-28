import './Header.css';
import logo from "../../images/airbnb-logo.png"

const Header = () =>{
    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo" />           
        </header>
    )
}

export default Header;