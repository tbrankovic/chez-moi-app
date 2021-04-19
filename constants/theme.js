import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // main colors
    primary: "#ff2727",
    secondary: "#fff",

    // all colors
    grey1: "#24272c",
    grey2: "#2c3033",
    grey3: "#3c4043",
    grey4: "#707070",
    grey5: "#bebebe",

    red1: "#cc0000",
    red2: "#ff3434"
}

export const SIZES = {
    // spacing
    radius6: 6,
    radius13: 13,
    radius17: 17,
    spacing4: 4,
    spacing8: 8,
    spacing16: 16,
    spacing24: 24,
    spacing32: 32,

    // font
    megaTitle: 100,
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
    // classic font styles
    largeTitle: { fontFamily: "Bodoni 72", fontSize: SIZES.largeTitle, color: COLORS.secondary },
    smallTitle: { fontFamily: "Bodoni 72", fontSize: SIZES.smallTitle, color: COLORS.secondary },
    h1:         { fontFamily: "Rubik_700Bold", fontSize: SIZES.h1, color: COLORS.secondary },
    h2:         { fontFamily: "Rubik_400Regular", fontSize: SIZES.h2, color: COLORS.secondary },
    h3:         { fontFamily: "Rubik_700Bold", fontSize: SIZES.h3, color: COLORS.secondary },
    h4:         { fontFamily: "Rubik_700Bold", fontSize: SIZES.h4, color: COLORS.secondary },
    body1:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body1, color: COLORS.secondary },
    body2:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body2, color: COLORS.secondary },
    body3:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body3, color: COLORS.secondary },
    body4:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body4, color: COLORS.secondary },
    body5:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body5, color: COLORS.secondary },
    body6:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body6, color: COLORS.secondary },

    // custom font styles
    megaTitle:      { fontFamily: "Rubik_700Bold", fontSize: SIZES.megaTitle, color: COLORS.grey3 },
    h1BoldPrimary:  { fontFamily: "Rubik_700Bold", fontSize: SIZES.h1, color: COLORS.primary },
    h4reg:          { fontFamily: "Rubik_400Regular", fontSize: SIZES.h4, color: COLORS.secondary },
    h4regGrey:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.h4, color: COLORS.grey2 },
    body3Primary:   { fontFamily: "Rubik_400Regular", fontSize: SIZES.body3, color: COLORS.primary },
    body3Grey:      { fontFamily: "Rubik_400Regular", fontSize: SIZES.body3, color: COLORS.grey5 }
}

export const MARGINS = {
    mt4: { marginTop: 4 },
    mt8: { marginTop: 8 },
    mt16: { marginTop: 16 },
    mb4: { marginBottom: 4 },
    mb8: { marginBottom: 8 },
    mb16: { marginBottom: 16 },
    mtb8: { marginTop: 8, marginBottom: 8 },
    mtb16: { marginTop: 16, marginBottom: 16 }
}

const appTheme = { COLORS, SIZES, FONTS, MARGINS };

export default appTheme;
