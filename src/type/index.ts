export type color = {
  palette: "neutral" | "primary" | "secondary";
  tone: "050" | "100" | "150" | "200" | "250";
};

export type breakpoints<Type> = {
  xs?: Type;
  md?: Type;
  lg?: Type;
};
