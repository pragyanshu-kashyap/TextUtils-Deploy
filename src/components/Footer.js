import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="footer" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <p className="footer__title">Contact me on my Social Accounts</p>
        <div className="footer__social" >
          <a
            href="https://www.facebook.com/pragyanshu.kashyap.9/"
            className="footer__icon " style={{color: props.mode==='dark'?'white':'#1f82d1'}}
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/pragyanshu_kashyap/"
            className="footer__icon" style={{color: props.mode==='dark'?'white':'#d62976'}}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://github.com/pragyanshu-kashyap" className="footer__icon" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/pragyanshu-kashyap/"
            className="footer__icon" style={{color: props.mode==='dark'?'white':'#1f82d1'}}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="footer__copy">&#169; All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
