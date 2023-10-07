import '../css/navbar.css';
import {useState} from 'react'; 
import Socials from './socials';
import Rules from './rules';
import Tournament from './tournament';

function Navbar() {
    const [showSocials, setShowSocials] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [showTournament, setShowTournament] = useState(false);

    const handleHoverSocials = () => {
        if (showSocials) {
            setShowSocials(false); 
        } else {
            setShowSocials(true); 
        } 
    };

    const handleHoverRules = () => {
        if (showRules) {
            setShowRules(false); 
        } else {
            setShowRules(true); 
        } 
    };

    const handleHoverTournament = () => {
        if (showTournament) {
            setShowTournament(false); 
        } else {
            setShowTournament(true); 
        } 
    };
        
    return(
        <div className="navbar">
            <div className="name-and-logo">
            <div className="nav-logo">
                <img src="game_icon.ico" style={{height: '100%'}} /> 
            </div>
            <button className="nav-name">
                <span style={{color: 'white', fontWeight: 'bold', fontSize: 'x-large'}}>The Art of Larceny</span>
            </button>
            </div>
            <div className="menu-selection">
            <button className="nav-button" onMouseEnter={handleHoverTournament} onMouseLeave={handleHoverTournament}>
                <span style={{color: 'white'}}>Tournament</span>
                {showTournament && <Tournament />}
            </button>
            <button className="nav-button" id="shareButton" onMouseEnter={handleHoverSocials} onMouseLeave={handleHoverSocials}>
                <img src="share.png" style={{height: '60%', backgroundColor: 'None'}} />
                {showSocials && <Socials />}
            </button>
            <button className="nav-button" onMouseEnter={handleHoverRules} onMouseLeave={handleHoverRules}>
                <span style={{color: 'white'}}>Rules</span>
                {showRules && <Rules />}
            </button>            
            <button className="signUpButton">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAnxIgWP96JRO7b_cYMTiQbKd64BeJPZ57K-L5TovFUs2PbQ/viewform?usp=pp_url" target="_blank" style={{textDecoration:'None'}}>
                    <span style={{color: 'white'}}>Enter Competition</span>
                </a>
            </button>
            </div>
        </div>
    );
}

export default Navbar;
