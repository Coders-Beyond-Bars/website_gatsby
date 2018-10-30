import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';


class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header">
        <Container>
          <div className="header-body">
            <h1 className="header-title">
              Coders <br />
              Beyond <br />
              Bars
            </h1>
            <p className="header-mission">
              Empowering incarcerated individuals to transform their lives
              by educating them in high-tech skills and preparing them for careers
              in high-tech industries for successful re-entry into society</p>
            <p className="header-hashtag">
              #PrisonEducation • #Coding • #Re-entry • #DataScience
            </p>
          </div>
        </Container>
      </Jumbotron>
    );
  }
};

export default Header;
