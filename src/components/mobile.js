import '../css/mobile.css'

function LandingPageMobile () {
    return (
        <div>
            <div className="mobileNavbar">
                <div className="navLogo">
                    <img src="game_icon.ico" style={{height: '50px'}} /> 
                </div>
                <div className="navName">
                    <span style={{color: 'white', fontWeight: 'bold', fontSize: 'x-large', margin:'20px'}}>The Art of Larceny</span>
                </div>
            </div>
            <div className="mobileContent">
                <div className="helpMessage"> 
                    <span style={{color: 'white', fontSize: 'x-large', fontWeight:'bold', textAlign:'center'}}>You should play the game on your computer !</span>
                </div>
                <div className="enterCompetition">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAnxIgWP96JRO7b_cYMTiQbKd64BeJPZ57K-L5TovFUs2PbQ/viewform?usp=pp_url" target="_blank" style={{textDecoration:'None'}}>
                        <span style={{color: 'white'}}>Enter Competition</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LandingPageMobile; 