import {ReactComponent as GithubIcon} from 'assets/img/instagram.svg'; 
import './styles.css';

function Navbar(){
    return (
    <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMOvie</h1>
            <a href="https://www.instagram.com/monsaniguilherme/">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link"> /monsaniguilherme</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
      );

      
}

export default Navbar;