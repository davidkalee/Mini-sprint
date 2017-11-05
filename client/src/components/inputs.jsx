import React from 'react';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <input placeholder="engineer1" />
      <input placeholder="engineer2" /> <br/>
      <input placeholder="event" />
      <input placeholder="misc" /> <br/>
      <button>Submit New Pairs</button> <br/>
      <button>Roster</button>
      <button>Pairs</button>
    </div>
    )
  }
}


export default Inputs;