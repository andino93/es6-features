import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      age: null,
      os: null,
      seatNumber: null,
    };
  }

  onInput(e) {
    const { value, name: key } = e.target;

    this.setState({
      [key]: value,
    }, () => console.log(this.state)); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <div className="title">Example Form:</div>
        <div className="field">
          <div className="label" htmlFor="name">Name:</div>
          <div className="control">
            <input
              name="name"
              className="input name"
              type="text"
              placeholder="Text input"
              onChange={e => this.onInput(e)}
            />
          </div>
        </div>
        <div className="field">
          <div className="label" htmlFor="age">Age:</div>
          <div className="control">
            <input
              name="age"
              className="input age"
              type="text"
              placeholder="Text input"
              onChange={e => this.onInput(e)}
            />
          </div>
        </div>
        <div className="field">
          <div className="label" htmlFor="os">OS:</div>
          <div className="control">
            <input
              name="os"
              className="input os"
              type="text"
              placeholder="Text input"
              onChange={e => this.onInput(e)}
            />
          </div>
        </div>
        <div className="field">
          <div className="label" htmlFor="seatNumber">Seat Number:</div>
          <div className="control">
            <input
              name="seatNumber"
              className="input seatNumber"
              type="text"
              placeholder="Text input"
              onChange={e => this.onInput(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
