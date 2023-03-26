import React from 'react';
import { Stage } from '@pixi/react';

import Key from './Key/Key.jsx';

import keys from './keys.js';
import layout from './layout.js';

const lowestOctave = 2;
const octaves = 3;

const colOffset = 7;

const Keyboard = () => {
  return (
    <Stage
      options={{
        backgroundColor: 0x282c34,
      }}
    >
      {
        [...Array(octaves).keys()].map((octave) => (
          keys.map((row, index) => (
            row.map((key, i) => (
              <Key
                key={key.label}
                keyboardKey={key}
                layoutKey={layout[index][(octave * 7 + i) - colOffset]}
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
