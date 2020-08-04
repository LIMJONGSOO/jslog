import React, { Component } from "react";
import "./Navigator.scss";
import logo from "../../images/logo.png";

export default class Naigator extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ upButtonShow: window.scrollY === 0 ? false : true });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      upButtonShow: false,
    };
  }

  scrollMoveTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="navigationContainer">
        <div className="navigationWrapper">
          <div className="navigationLogo">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
          <div className="navigationMenu">
            <div className="navigationEnd">
              <div className="socialContainer">
                <a
                  href="https://github.com/LIMJONGSOO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialButton"
                >
                  <svg fill="#3a3934" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                <a href="mailto:limjs4535@gmail.com" className="socialButton">
                  <svg fill="#3a3934" viewBox="0 0 24 24">
                    <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.state.upButtonShow && (
          <a href="#" className="upButton" onClick={this.scrollMoveTop}>
            <svg viewBox="0 0 24 24">
              <path
                fill="#3a3934"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z"
              ></path>
            </svg>
          </a>
        )}
      </div>
    );
  }
}
