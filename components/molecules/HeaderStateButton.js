import React, {useContext} from 'react';
import {View} from "react-native";
import AppContext from "../AppContext";

import {COLORS} from "../../constants";
import {RoundedButton} from "../atoms";

const HeaderStateButton = ({navigation}) => {
    const context = useContext(AppContext);

    return (
        <View>
            {context.loggedIn ?
                <RoundedButton title="10 tokens"
                               onPress={() => navigation.navigate('ConnectionStack', {screen: 'Login'})}
                               backgroundColor={COLORS.grey1} />
                :
                <RoundedButton title="Connexion"
                               onPress={() => navigation.navigate('ConnectionStack', {screen: 'Login'})}
                               backgroundColor={COLORS.red1} />
            }
        </View>
    )
}

export default HeaderStateButton;
