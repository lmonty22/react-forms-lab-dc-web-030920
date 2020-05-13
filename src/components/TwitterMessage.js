import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange =(e) => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>{this.props.maxChars - this.state.message.length} characters left </div>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
