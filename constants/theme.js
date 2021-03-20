import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // main colors
    primary: "#ff2727",
    secondary: "#fff",

    // all colors
    dark1: "#24272c",
    dark2: "#2c3033",
    dark3: "#3c4043",
    dark4: "#707070",
    dark5: "#bebebe",

    red1: "#cc0000",
    red2: "#ff3434"
}

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
    largeTitle: 38,
    smallTitle: 20,
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
}

export const FONTS = {
    largeTitle: { fontFamily: "Bodoni 72", fontSize: SIZES.largeTitle, color: COLORS.secondary},
    smallTitle: { fontFamily: "Bodoni 72", fontSize: SIZES.smallTitle, color: COLORS.secondary},
    h1: { fontFamily: "Rubik Bold", fontSize: SIZES.h1, color: COLORS.secondary},
    h2: { fontFamily: "Rubik Regular", fontSize: SIZES.h2, color: COLORS.secondary},
    h3: { fontFamily: "Rubik Regular", fontSize: SIZES.h3, color: COLORS.secondary},
    h4: { fontFamily: "Rubik Regular", fontSize: SIZES.h4, color: COLORS.secondary, fontWeight: 'bold'},
    body1: { fontFamily: "Rubik Regular", fontSize: SIZES.body1, color: COLORS.secondary},
    body2: { fontFamily: "Rubik Regular", fontSize: SIZES.body2, color: COLORS.secondary},
    body3: { fontFamily: "Rubik Regular", fontSize: SIZES.body3, color: COLORS.secondary},
    body4: { fontFamily: "Rubik Regular", fontSize: SIZES.body4, color: COLORS.secondary},
    body5: { fontFamily: "Rubik Regular", fontSize: SIZES.body5, color: COLORS.dark5},
    body6: { fontFamily: "Rubik Regular", fontSize: SIZES.body6, color: COLORS.secondary}
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
