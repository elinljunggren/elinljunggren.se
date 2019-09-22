import React, { Component } from "react";
import me from "./img/me-bw.jpg";
import leaf from "./img/leaf.svg";
import "./App.css";
import { Header } from "./Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="intro-section">
          <img src={leaf} className="leaf leaf1" />
          <img src={leaf} className="leaf leaf2" />
          <img src={leaf} className="leaf leaf3" />
          <img src={leaf} className="leaf leaf4" />
          <div className="container">
            <div className="flex-box">
              <div className="img-bubbles">
                <div className="leaf-bubble" />
                <div className="green-bubble" />
                <img src={me} className="img-me" />
              </div>
              <div id="intro-text">
                <h2>I'm Elin,</h2>
                <p>
                  a Software Engineer interested in all things related to sustainability.
                  Currently trying to make an impact through my lifestyle, my work
                  at <a href="https://1928diagnostics.com" target="_blank">1928 Diagnostics</a> and
                  activism together with <a href="https://extinctionrebellion.se" target="_blank">Extinction Rebellion</a>.
                </p>
                <p>This site is about me.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
