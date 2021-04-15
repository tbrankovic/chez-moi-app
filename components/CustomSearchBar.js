import React from 'react';
import { StyleSheet } from "react-native";
import { SearchBar } from 'react-native-elements';
import {COLORS} from "../constants";

export default class CustomSearchBar extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({search});
    };

    render() {
        const {search} = this.state;

        return (
            <SearchBar
                placeholder="Chercher.."
                onChangeText={this.updateSearch}
                value={search}
                placeholderTextColor={COLORS.dark5}
                containerStyle={[styles.shadow, {
                    backgroundColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    paddingHorizontal: 0
                }]}
                inputContainerStyle={{
                    backgroundColor: COLORS.dark3,
                    borderRadius: 6
                }}
                inputStyle={{
                    color: COLORS.secondary
                }}
                searchIcon={{
                    color: COLORS.dark5
                }}
                clearIcon={{
                    color: COLORS.dark5
                }}
                platform="default"
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 14,

        elevation: 5,
    }
})
