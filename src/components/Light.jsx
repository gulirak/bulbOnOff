import React from "react";
class Light extends React.Component {
  constructor() {
    super();
    this.state = { isTheLightOn: true };
  }
  render() {
    return (
      <>
        <h1>This is my app</h1>
        <button
          onClick={() => {
            this.setState({ isTheLightOn: !this.state.isTheLightOn });
          }}
        >
          turn On/Off the light
        </button>
        {this.state.isTheLightOn ? (
          <img
            src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
            alt=""
          />
        ) : (
          <img
            src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
            alt=""
          />
        )}
      </>
    );
  }
}
export default Light;
