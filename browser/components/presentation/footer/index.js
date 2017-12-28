import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">About LVH</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">LVH services</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Contact LVH</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Charity</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container black-text text-lighten-3">
          © 2017 Copyright Text
          <div className="fixed-action-btn horizontal click-to-toggle">
            <a className="btn-floating btn-large red">
              <i className="material-icons">menu</i>
            </a>
            <ul>
              <li><a className="btn-floating red"><i className="material-icons">play_circle_filled</i></a></li>
              <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
              <li><a className="btn-floating green"><i className="material-icons">camera_alt</i></a></li>
            </ul>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {

}

export default Footer;
