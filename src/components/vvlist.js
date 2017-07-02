import React, { Component } from 'react';
import { Items } from '../fakeData/vvitems'
import { connect } from 'react-redux';

class VVItem extends Component {
  constructor() {
    super();

    this.state = {
      defectFormOpen: false
    }

    this.toggleCustom = this.toggleCustom.bind(this);
  }

  toggleCustom() {
    this.setState({
      defectFormOpen: !this.state.defectFormOpen
    })
  }

  render() {
    return (
      <li className="vv-item">
        <div onClick={this.props.openWindow}><p style={this.props.verified ? {'textDecoration': 'line-through'} : null}>{this.props.item.title}</p></div>
        <div>
          <div>
            {this.props.windowActive && 
              <button className="btn btn-default" onClick={this.props.handleVerify}>Verify</button>
            }
            <button className="btn btn-default" onClick={this.toggleCustom}>Custom Defect</button>
          </div>
        </div>

        {this.state.defectFormOpen && 
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-10">
                <input type="text" className="form-control" name="summary" placeholder="Summary" />
              </div>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="description" placeholder="Description" />
              </div>
              <div className="col-sm-10">
                <input type="text" className="form-control" name='button-text' placeholder="Button Text" />
              </div>
              <div className="col-sm-10">
                <button className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        }
      </li>
    );
  }
}




class VVList extends Component {
  constructor() {
    super();
  }
  

  render() {
    return (
      <ul>
        {this.props.listItems.map((item, index) => {
          return <VVItem windowActive={item.windowActive} openWindow={this.props.openWindow.bind(null, index)} handleVerify={this.props.handleVerify.bind(null, index)} verified={item.verified} item={item.data} key={item.data.ID} />
        })/*.sort((a,b) => {
          return (a.props.verified === b.props.verified) ? 0 : b.props.verified ? -1 : 1;
        })*/}
      </ul>
    );
  }
}

export default VVList;