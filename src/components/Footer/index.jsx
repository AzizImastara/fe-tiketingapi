import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import Llogo from "../../assets/img/Vector.png";
import Lebuid from "../../assets/img/ebuid.png";
import Lcine from "../../assets/img/cineone.png";
import Lhiflix from "../../assets/img/hiflix.png";
import Ifacebook from "../../assets/img/facebook.png";
import Iinstagram from "../../assets/img/instagram.png";
import Itwitter from "../../assets/img/twitter.png";
import Iyt from "../../assets/img/yt.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.name
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row footer">
            <div className="col-4 footer__content">
              <div className="footer__content--logo">
                <img src={Llogo} alt="logoBerwarna" />
                <p>
                  Stop waiting in line. Buy tickets <br />
                  conveniently, watch movies quietly.
                </p>
              </div>
            </div>
            <div className="col-2 footer__content">
              <h3>Explore</h3>
              <div className="footer__content--header--desc">
                <p>Cinemas</p>
                <p>Movies list</p>
                <p>My ticket</p>
                <p>Notification</p>
              </div>
            </div>
            <div className="col-3 footer__content">
              <h3>Our Sponsor</h3>
              <div className="footer__content--header--img">
                <div className="footer__content--header--size">
                  <img src={Lebuid} alt="ebuid" />
                </div>
                <div className="footer__content--header--size">
                  <img src={Lcine} alt="cineone" />
                </div>
                <div className="footer__content--header--size">
                  <img src={Lhiflix} alt="hiflix" />
                </div>
              </div>
            </div>
            <div className="col-3 footer__content">
              <h3>Follow Us</h3>
              <div className="footer__content--header">
                <div className="footer__content--page">
                  <img src={Ifacebook} alt="" />
                  <p>Tickitz Cinema id</p>
                </div>
                <div className="footer__content--page">
                  <img src={Iinstagram} alt="" />
                  <p>tickitz.id</p>
                </div>
                <div className="footer__content--page">
                  <img src={Itwitter} alt="" />
                  <p>tickitz.id</p>
                </div>
                <div className="footer__content--page">
                  <img src={Iyt} alt="" />
                  <p>Tickitz Cinema id</p>
                </div>
              </div>
            </div>

            <footer>© 2020 Tickitz. All Rights Reserved.</footer>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Footer);
