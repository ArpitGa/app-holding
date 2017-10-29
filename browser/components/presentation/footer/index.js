import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer grey lighten-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="black-text">Footer Content</h5>
              <p className="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="black-text">Links</h5>
              <ul>
                <li><a className="black-text text-lighten-3" href="#!">About LVH</a></li>
                <li><a className="black-text text-lighten-3" href="#!">LVH services</a></li>
                <li><a className="black-text text-lighten-3" href="#!">Contact LVH</a></li>
                <li><a className="black-text text-lighten-3" href="#!">Charity</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container black-text text-lighten-3">
          © 2017 Copyright Text
          <a className="black-text text-lighten-3 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {

}

export default Footer;
