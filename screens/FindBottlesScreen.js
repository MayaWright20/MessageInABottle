import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from '../components/button';
import { LinearGradient } from 'expo-linear-gradient';

import { WINDOW_WIDTH } from '../constants/DIMENSIONS';
import { COLORS } from '../constants/COLORS';
import ScrollForm from '../components/scrollForm';

export default function FindBottlesScreen() {

    function addMessageHandler() {
        console.log('add message 2!')
    }

    return (
        <LinearGradient colors={COLORS.LIGHT_BLUE__DARK_BLUE} style={styles.screen}>
            <ActionButton btnWrapperStyle={styles.btnWrapperStyle} btnTitleStyle={styles.btnTitleStyle} onPress={addMessageHandler} linGradStyle={styles.linGradStyle} linGradCols={COLORS.MINT_GREEN__DARK_GREEN} btnTitle="Add Message in a Bottle" />
            <ScrollForm/>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnWrapperStyle: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    btnTitleStyle: {
        color: 'white',
        fontSize: 20
    },
    linGradStyle: {
        padding: 15,
        width: WINDOW_WIDTH / 1.5,
        alignItems: 'center',
    }
});