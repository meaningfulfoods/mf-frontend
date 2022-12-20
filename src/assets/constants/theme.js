export const COLORS = {
  primary: "#435f6f",
  secondary: "#e8bcf0",
  white: "#FFF",
  lightgray: "#EAEAEA",
  gray: 'rgba(22, 21, 21, 0.1)',
  black: '#131312',
  yellow: '#F49E05',
  lightYellow:'rgba(244, 158, 5, 0.15)',
  red: '#FF0000'
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "Roboto_700Bold",
  semiBold: "Roboto_100Thin",
  medium: "Roboto_500Medium",
  regular: "Roboto_400Regular",
  light: "Roboto_100Thin",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const INPUT = {
  box1: {
    height: '30px',
    backgroundColor: 'rgba(22, 21, 21, 0.1)',
    border: '1px solid rgba(42, 42, 42, 0.4)',
    borderRadius: '4px',
    paddingLeft: '8px'
  },
  label1: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '6px',
  },
  label2: {
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '6px',
  }
};

export const ERROR = {
  inputFTrue: {
    color: COLORS.red,
    fontSize:'12px',
    visibility: 'visible',
    marginBottom: '10px',
  },
  inputFFalse: {
    visibility: 'hidden',
    fontSize:'12px',
    marginBottom: '10px',
  },
};

export const BUTTONS = {
  btn1: {
    fontWeight: '400',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 0px',
    width: '100px',
    cursor: 'pointer',
    color:COLORS.yellow,
    backgroundColor:COLORS.black
  },
  btn2: {
    fontWeight: '400',
    fontSize: '14px',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '6px 0px',
    width: '100px',
    cursor: 'pointer',
    color:COLORS.black,
    backgroundColor:'transparent'
  }
};