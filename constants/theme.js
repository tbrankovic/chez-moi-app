import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // main colors
    primary: "#ff2727",

    // all colors
    dark1: "#24272c",
    dark2: "#2c3033",
    dark3: "#3c4043",
    dark4: "#707070",
    dark5: "#bebebe",

    red1: "#cc0000",
    red2: "#ff3434"
};

export const SIZES = {
    // spacing
    radius1: 6,
    radius2: 13,
    radius3: 17,
    spacing1: 8,
    spacing2: 16,
    spacing3: 24,
    spacing4: 32,

    // font
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 18,
    body2: 17,
    body3: 15,
    body4: 13,
    body5: 12,
    body6: 11,

    // dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Bodoni 72", fontSize: SIZES.largeTitle},
    h1: { fontFamily: "Rubik-Bold", fontSize: SIZES.h1},
    h2: { fontFamily: "Rubik-Regular", fontSize: SIZES.h2},
    h3: { fontFamily: "Rubik-Regular", fontSize: SIZES.h3},
    h4: { fontFamily: "Rubik-Regular", fontSize: SIZES.h4},
    body1: { fontFamily: "Rubik-Regular", fontSize: SIZES.body1},
    body2: { fontFamily: "Rubik-Regular", fontSize: SIZES.body2},
    body3: { fontFamily: "Rubik-Regular", fontSize: SIZES.body3},
    body4: { fontFamily: "Rubik-Regular", fontSize: SIZES.body4},
    body5: { fontFamily: "Rubik-Regular", fontSize: SIZES.body5},
    body6: { fontFamily: "Rubik-Regular", fontSize: SIZES.body6}
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
