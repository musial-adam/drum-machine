import React from 'react';
import './DrumPad.scss';

class DrumPad extends React.Component {
  state = {
    active: false,
    style: 'DrumPad'
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  activateKey = () => {
    this.setState({ style: 'DrumPad Active' });
    setTimeout(() => this.setState({ style: 'DrumPad' }), 100);
    if (this.props.power) {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
    }
  };

  handleKeyPress = event => {
    if (event.keyCode === this.props.keyCode) {
      // console.log("You pressed " + event.keyCode);
      this.activateKey();
    }
  };

  render() {
    return (
      <div className={this.state.style} onClick={this.activateKey}>
        <h1>{this.props.keyTrigger}</h1>
        <h4>{this.props.id}</h4>
        <audio id={this.props.keyTrigger} src={this.props.url} />
      </div>
    );
  }
}

export default DrumPad;
