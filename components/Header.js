import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'


const Header = (props) => (

    
   <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <nav>

            <div className="icons1">
                <ul className="icons">
                    <li><a className="gold" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a></li>
                    <li><a className="gold" href="https://www.facebook.com/profile.php?id=100006478817121" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a></li>
                    <li><a className="gold" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a></li>
                </ul>
            </div>

            <ul className="rightlinks">
      {/*           <li class="cool-link"><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>      */}
      <li className="cool-link"><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>CONTACT</a></li>
                <li className="cool-link"><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>eRESUME</a></li>
      {/*          <li class="cool-link"><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>         */}
                
            </ul>
        </nav> 



        
    <br></br>    
        
        <div className="content">
            <div className="inner">
            <a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}><h1 className="goldstyle cool-link">John Evans</h1></a>
            <br></br>                
                
        <h2 className="typetext">&#60;hello-world></h2><p>I'm John, a Web Designer and Developer devoted to implementing cutting-edge design methods in all of my works.</p>
                
        <div className="container">
    <button className="pulse-button" onCLick={this.setRedirect}>View Projects</button>
  </div>
                
                
                
               
  
      </div>          
            </div>
       
    </header>
)



Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}




export default Header

