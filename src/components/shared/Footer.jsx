import './style/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Academlo 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://www.instagram.com/yeizermarrugo/" className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.linkedin.com/in/yeizer-marrugo-vel%C3%A1squez-4a584a165/" className="redes__links">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <p></p>
       <div className="footer_name">
      <p><i className='bx bxl-netlify'></i><b> Made by Yeizer Marrugo </b> <i className='bx bxl-github' ></i></p>
      </div> 
        
       
    </footer>
  );
};

export default Footer;