import React from 'react';
import { Stage } from '@pixi/react';

import Key from './Key/Key.jsx';

import keys from './keys.js';

const lowestOctave = 2;
const octaves = 3;

const Keyboard = () => {
  return (
    <Stage>
      {
        [...Array(octaves).keys()].map((octave) => (
          keys.map((row, index) => (
            row.map((key, i) => (
              <Key
                key={key.label}
                keyboardKey={key}
                row={index}
                col={i}
                octave={octave + lowestOctave}
              />
            ))
          ))
        ))
      }
    </Stage>
  )
}

export default Keyboard;
