const borderColor = 0x555555;

export const draw = (
  g,
  width,
  height,
  color,
  playing,
) => {
  const opacity = playing ? 0.7 : 1;
  g.clear();
  g.beginFill(color, opacity);
  g.lineStyle(2, borderColor);
  g.drawRect(0, 0, width, height);
  g.endFill();
};
