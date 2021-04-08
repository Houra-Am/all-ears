import "../css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <h3>ALL EARS</h3>

            <div className='section social-icons'>
              <ul>
                <li>
                  <a href='#' className='social-icon'>
                    <i class='fab fa-app-store'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='social-icon'>
                    <i class='fab fa-google-play'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='cookies'>
              Privacy Policy | Cookies Policy | Terms of Service | Wikipedia
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='section social-icons'>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href='#' className='social-icon'>
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='social-icon'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='social-icon'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='social-icon'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
