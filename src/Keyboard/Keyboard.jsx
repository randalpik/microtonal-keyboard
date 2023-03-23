import React from 'react';
import { Stage } from '@pixi/react';

import Key from './Key/Key.jsx';

import keys from './keys.js';

const Keyboard = () => {
  return (
    <Stage>
      {
        keys.map((row, index) => (
          row.map((key, i) => (
            <Key
              key={key.label}
              keyboardKey={key}
              row={index}
              col={i}
              octave={3}
            />
          ))
        ))
      }
    </Stage>
  )
}

export default Keyboard;
