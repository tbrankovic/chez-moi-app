import {StyleSheet, View} from "react-native";
import LargeInput from "../atoms/LargeInput";
import {COLORS, MARGINS} from "../../constants";
import React from "react";
import RadioButton from "../atoms/RadioButton";
import RoundTabButton from "../atoms/RoundTabButton";

const arr = [0, 1, 2]
const titles = ["Sur place", "À emporter", "Sur place & à emporter"]
class ReservationTypeFormSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: 0
        }
    }

    changeState(selected) {
        if (this.state.choice === selected) {return}

        this.setState(state => ({
            choice: selected
        }))
    }

    render() {
        return(
            <View style={[styles.container, this.props.style]}>
                { arr.map(e => (
                    <RadioButton key={e}
                                 title={titles[e]}
                                 onPress={() => this.changeState(e)}
                                 isSelected={this.state.choice === e}
                                 style={MARGINS. mb8}
                    />
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: COLORS.primary,
        borderWidth: 0
    },
})

export default ReservationTypeFormSection
