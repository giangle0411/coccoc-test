import React, { Component } from "react";
import "../style/footer.css";
import coccocLogo from "../assets/CC Logo Points.png";
import fbLogo from "../assets/facebook.png";
import insLogo from "../assets/instagram.png";
import linkedInLogo from "../assets/linkedIn.png";
import socialLogo from "../assets/Social.png";
import ytLogo from "../assets/youtube.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="content-wrapper">
          <div className="footer-logos">
            <img src={coccocLogo} alt="logo" className="cc-logo-footer"></img>
            <div className="social-logos">
              <a href="https://www.facebook.com/">
                <img
                  src={fbLogo}
                  alt="fb-logo"
                  className="social-logo-footer"
                />
              </a>
              <a href="https://www.linkedin.com/">
                <img
                  src={linkedInLogo}
                  alt="linkedIn-logo"
                  className="social-logo-footer"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={insLogo}
                  alt="ins-logo"
                  className="social-logo-footer"
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src={ytLogo}
                  alt="yt-logo"
                  className="social-logo-footer"
                />
              </a>
              <img
                src={socialLogo}
                alt="social-logo"
                className="social-logo-footer"
              ></img>
            </div>
          </div>
          <div className="footer-policies">
            <div className="copyright">
              © 2021. Bản quyền thuộc về Công ty TNHH Cốc Cốc.
            </div>
            <div className="footer-links">
              <a href="/">Điều khoản sử dụng</a>
              <a href="/">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
