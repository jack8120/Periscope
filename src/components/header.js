import Logo from "../Assets/Logo.png";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
           
                <img className="header-logo" src={Logo} alt="Logo"></img>
                <h3 className="header-text">Peri-menopause early warning system</h3>
         
        </header>
    )
}

export default Header