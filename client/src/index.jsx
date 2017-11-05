import React from 'react';
import ReactDOM from 'react-dom';
import Roster from './components/roster.jsx';
import Pairs from './components/pairs.jsx';
import Inputs from './components/inputs.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switch: 'roster',
    }
  }

  render() {
    return (<div>
      COMPONENTS: 
      <Inputs />

      {this.state.switch === 'roster' ? <Roster /> : <Pairs />}
    </div>);
  }

}


ReactDOM.render(<App />, document.getElementById('app'));