import React, { Component } from 'react';
import TableList from './components/TableList';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
   
  render() {
    return (
      <div className="App">
        <TableList/>
      </div>
    );
  }
}

export default connect()(App)