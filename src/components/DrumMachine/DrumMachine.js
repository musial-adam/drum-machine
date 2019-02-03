import React, { Component } from 'react';
import './DrumMachine.scss';

import DrumPad from '../DrumPad/DrumPad';
import PowerButton from '../PowerButton/PowerButton';
import NotesButton from '../NotesButton/NotesButton';

const notesSetOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const notesSetTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class DrumMachine extends Component {
  state = {
    power: true,
    set: 1,
    notesSet: notesSetOne
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.keyCode === 32) {
      // 32 - Space
      this.togglePower();
    } else if (event.keyCode === 16) {
      // 16 - Shift
      this.changeNotesSet();
    }
  };

  changeNotesSet = () => {
    if (this.state.power) {
      if (this.state.set === 1) {
        this.setState({ notesSet: notesSetTwo, set: 2 });
      } else {
        this.setState({ notesSet: notesSetOne, set: 1 });
      }
    }
  };

  togglePower = () => {
    if (this.state.power) {
      this.setState({ power: false });
    } else {
      this.setState({ power: true });
    }
  };

  render() {
    // const s = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';

    const drumMachine = this.state.notesSet.map(note => (
      <DrumPad
        key={note.id}
        keyCode={note.keyCode}
        keyTrigger={note.keyTrigger}
        id={note.id}
        url={note.url}
        power={this.state.power}
      />
    ));

    return (
      <div>
        <div className="DrumMachine">{drumMachine}</div>

        <div className="ButtonsContainer">
          <PowerButton
            power={this.state.power}
            togglePower={this.togglePower}
          />
          <NotesButton
            set={this.state.set}
            changeNotesSet={this.changeNotesSet}
          />
        </div>
      </div>
    );
  }
}

export default DrumMachine;
