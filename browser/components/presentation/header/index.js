import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="#" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="header-nav right hide-on-med-and-down">
            <li><a href="#">About LVH</a></li>
            <li><a href="#">LVH Services</a></li>
            <li><a href="#">Contact LVH</a></li>
            <li><a href="#">Charity</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="#">About LVH</a></li>
            <li><a href="#">LVH Services</a></li>
            <li><a href="#">Contact LVH</a></li>
            <li><a href="#">Charity</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {

}

export default Header;
