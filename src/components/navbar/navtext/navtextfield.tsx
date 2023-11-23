type Colors = {
  dark: string;
  active: string;
  primary: string;
};

const lightColors: Colors = {
  dark: "#2F2F32",
  active: "#0177FD",
  primary: "#131635",
};

const darkColors: Colors = {
  dark: "#FFFFFF",
  active: "#FCFCFC",
  primary: "#6F767E",
};

type Props = {
  text: string;
  margin?: 12 | 10;
  weight?: 400 | 500 | 600;
  colorKey?: keyof Colors;
};

export function NavTextField({
  text,
  margin = 10,
  weight = 400,
  colorKey = "primary",
}: Props) {
  //TODO add dark theme
  const isDark = false;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const color = isDark ? darkColors[colorKey] : lightColors[colorKey];

  return (
    <p
      style={{
        margin: 0,
        padding: 0,
        display: "inline",
        fontFamily: "Poppins",
        color: color,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: weight,
        lineHeight: "normal",
        marginLeft: margin,
      }}
    >
      {text}
    </p>
  );
}
