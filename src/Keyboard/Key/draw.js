const borderColor = 0x555555;

export const draw = (
  g,
  width,
  height,
  color,
) => {
  g.clear();
  g.beginFill(color);
  g.lineStyle(2, borderColor);
  g.drawRect(0, 0, width, height);
  g.endFill();
};
