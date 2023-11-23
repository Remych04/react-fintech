type ColorScheme = {
  primary: string;
  white: string;
  darkBlue: string;
  gray: string;
  darkGray: string;
  onyx: string;
};

type Fonts = {
  medium: string;
  bold: string;
};

type Props = {
  text: string;
  fontKey?: keyof Fonts;
  size: number;
  colorKey: keyof ColorScheme;
};

const colorsLight: ColorScheme = {
  primary: "#000000",
  white: "#FFFFFF",
  darkBlue: "#141736",
  gray: "#798BA3",
  darkGray: "#333333",
  onyx: "#343744",
};

const colorsDark: ColorScheme = {
  primary: "#FCFCFC",
  white: "#FFFFFF",
  darkBlue: "#FCFCFC",
  gray: "#9A9FA5",
  darkGray: "#FCFCFC",
  onyx: "#FCFCFC",
};

const fonts: Fonts = {
  medium: "Gilroy-Medium",
  bold: "Gilroy-Bold",
};

export function TextField({
  text,
  fontKey = "bold",
  size,
  colorKey = "primary",
}: Props) {
  //TODO make dark theme
  const isDarkTheme = false;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const textColor = isDarkTheme ? colorsDark[colorKey] : colorsLight[colorKey];
  const font = fonts[fontKey];

  return (
    <p
      style={{
        margin: 0,
        padding: 0,
        display: "inline",
        color: textColor,
        fontFamily: font,
        fontSize: size,
      }}
    >
      {text}
    </p>
  );
}
