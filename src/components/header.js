import React from 'react';


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <header id="control-menu">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span className="glyphicon glyphicon-folder-open"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="../index.php">Home</a></li>
                      <li><a href="../logout.php" id="logOutLink">Log Out</a></li>
                    </ul>
                  </li>

                  <li id="paginator-left"><a href="#"><span className="glyphicon glyphicon-arrow-left"></span></a></li>
                  <li id="paginator-right"><a href="#"><span className="glyphicon glyphicon-arrow-right"></span></a></li>
                </ul>
                <form id="numOfRecordsSelector" className="navbar-form navbar-left">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="0" aria-describedby="basic-addon2"/>
                    <span className="input-group-addon" id="basic-addon2" >Get Records</span>
                  </div>
                </form>
                <form className="navbar-form navbar-left">
                  <button type="submit" className="btn btn-default">Set Window</button>  
                  <button id="total-count" type="submit" className="btn btn-default">Open Windows</button>
                  <button type="submit" className="btn btn-default">Remove Customs</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <p className="navbar-text">Project: </p>
                  <p className="navbar-text">Signed in as </p>
                </ul>
                
                {/*
                <form className="navbar-form navbar-left">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Quick Find" />
                  </div>
                  <button className="btn btn-default" type="button">Search</button>
                </form>
                */}


                
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;