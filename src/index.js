import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div className="cat" style={{ left: mouse.x, top: mouse.y }}>
        🐈
      </div>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div className="mouse-pad" onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MouseTracker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
