import React, { useCallback } from 'react';
import { Graphics, Text } from '@pixi/react';

import { draw } from './draw.js';

const keyWidth = 30;
const keyHeight = keyWidth * 2.5;

const Key = (props) => {
  const { keyboardKey, row, col } = props;
  const { label, color } = keyboardKey;
  console.log(row, col);

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
    >
      <Text
        text={label}
        position={[keyWidth / 2, keyWidth / 2]}
        anchor={0.5}
      />
    </Graphics>
  );
};

export default Key;
