import React, { useCallback } from 'react';
import { Graphics, Text } from '@pixi/react';
import { Rectangle } from 'pixi.js';

import { useFrequency } from 'react-frequency';

import { draw } from './draw.js';

const keyWidth = 30;
const keyHeight = keyWidth * 2.5;

const a4 = 440; // Concert pitch = 440 Hz
const g0 = a4 / 18; // 4 octaves and 1 major second below A4

const Key = (props) => {
  const {
    keyboardKey,
    row,
    col,
    octave,
  } = props;
  const {
    label,
    color,
    textColor,
    ratio,
  } = keyboardKey;

  const hz = g0 * (2 ** octave) * ratio;

  const { start, stop, toggle } = useFrequency({
    hz,
    gain: 0.5,
  });

  let x = col * keyWidth;
  if (row < 2) x += (keyWidth / 2);
  let y = row * keyHeight;

  const drawKey = useCallback((g) => draw(
    g, keyWidth, keyHeight, color
  ), [color]);

  return (
    <Graphics
      draw={(g) => drawKey(g)}
      position={[x, y]}
      interactive
      pointerdown={toggle}
      // pointerup={stop}
      // pointerupoutside={stop}
      hitArea={new Rectangle(0, 0, keyWidth, keyHeight)}
    >
      <Text
        text={label}
        position={[keyWidth / 2, keyWidth / 2]}
        anchor={0.5}
        style={{
          fill: textColor,
          fontSize: 20,
        }}
      />
    </Graphics>
  );
};

export default Key;
