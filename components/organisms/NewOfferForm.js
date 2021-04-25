import React from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import RoundTabButton from "../atoms/RoundTabButton";
import {COLORS, FONTS} from "../../constants";
import SecondaryButton from "../atoms/SecondaryButton";
import {BigRedButton} from "../atoms";
import NameFormSection from "../molecules/NameFormSection";
import FoodInfoFormSection from "../molecules/FoodInfoFormSection";
import HoursFormSection from "../molecules/HoursFormSection";
import ReservationTypeFormSection from "../molecules/ReservationTypeFormSection";
import LocationFormSection from "../molecules/LocationFormSection";

const formTitles = ['Photo', 'Nom & Ingrédients', 'Portion & Quantité', 'Horaires', 'Modalité', 'Adresse']
const arr = [1, 2, 3, 4, 5, 6]
const data = Array(6)

const completedPages = Array(6).fill(false)

class NewOfferForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    changeState(selected) {
        if (this.state.page === selected) {return}

        this.setState(state => ({
            page: selected
        }))

        this.changePage()
    }

    changePage() {
        switch(this.state.page) {
            case 1:
                break
            case 2:
                return (
                    <NameFormSection style={styles.formPageHeight} />
                )
            case 3:
                return (
                    <FoodInfoFormSection style={styles.formPageHeight} />
                )
            case 4:
                return (
                    <HoursFormSection style={styles.formPageHeight} />
                )
            case 5:
                return (
                    <ReservationTypeFormSection style={styles.formPageHeight} />
                )
            case 6:
                return (
                    <LocationFormSection style={styles.formPageHeight} />
                )
            default:
                break
        }
    }

    prevPage() {
        if (this.state.page <= 1) {return}
        this.changeState(this.state.page - 1)
    }

    nextPage() {
        if (this.state.page >= arr.length) {return}
        this.changeState(this.state.page + 1)
    }

    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.bar}>
                    { arr.map(e => (
                        <RoundTabButton key={e}
                                        title={e}
                                        onPress={() => this.changeState(e)}
                                        isSelected={this.state.page === e}
                        />
                    ))}
                </View>

                <View style={{paddingTop: 16}}>
                    <Text style={FONTS.mediumTitle}>{formTitles[this.state.page - 1]}</Text>
                    {this.changePage()}
                </View>
                <View style={styles.bottomBar}>
                    <SecondaryButton title='←'
                                     onPress={() => this.prevPage()}
                                     style={{width: 50 }} />
                    <BigRedButton title='suivant →'
                                  onPress={() => this.nextPage()}
                                  style={{width: Dimensions.get('window').width - 98, marginLeft: 16 }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomBar: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    formPageHeight: {
        height: Dimensions.get('window').height - 60 - 214 - 45 - 16 - 16,
    }
})

export default NewOfferForm
