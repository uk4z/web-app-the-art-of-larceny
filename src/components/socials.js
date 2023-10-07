import '../css/socials.css'

function Socials() {
  return(
    <div className="socials">
        <div className="socialContainer">
          <a href="https://github.com/uk4z/the-art-of-larceny" target="_blank">
            <button className="socialButton">
            <img src="github.png" style={{ height: 30 }} />
            </button>
          </a>
        </div>
        <div className="socialContainer">
          <a href="https://www.youtube.com/@TheArtofLarceny" target="_blank">
            <button className="socialButton">
            <img src="youtube.png" style={{ height: 30 }} />
            </button>
          </a>
        </div>
        <div className="socialContainer">
          <a href="https://twitter.com/TheArtofLarceny" target="_blank">
            <button className="socialButton">
            <img src="twitter.png" style={{ height: 30 }} />
            </button>
          </a>
        </div>
    </div>
  );
}

export default Socials;
