import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
  <div className="pos-f-t">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-white h4">Collapsed content</h5>
        <span className="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
);

export default Header;