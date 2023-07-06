import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import scrollImg from "../assets/scroll.png";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants/DIMENSIONS";
import ActionButton from "./button";
import FormInput from "./formInput";
import {COLORS} from "../constants/COLORS";

export default function ScrollForm() {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [voiceNote, setVoiceNote] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={scrollImg} style={styles.image}>
                <View style={styles.formContainerStyle}>
                    <FormInput multiline={false} formInputContainerStyle={styles.formInputContainerStyle} titleStyle={styles.titleStyle} title="Title" value={title} onChangeText={(enteredValue)=>{setTitle(enteredValue)}} maxLength={25} placeholder="Add a title" inputMode="text" textInputStyle={styles.textInputStyle}/>
                    <FormInput multiline={true}  formInputContainerStyle={styles.formInputContainerStyle} titleStyle={styles.titleStyle} title="Message" value={message} onChangeText={(enteredValue)=>{setMessage(enteredValue)}} maxLength={300} placeholder="Add a Message" inputMode="text" textInputStyle={[styles.textInputStyle, styles.messageInputStyle]}/>
                    <Text style={[styles.titleStyle,styles.formInputContainerStyle]}>Voice Note</Text>
                    <ActionButton btnWrapperStyle={styles.btnWrapperStyle} btnTitleStyle={styles.btnTitleStyle} onPress={undefined} linGradStyle={styles.linGradStyle} linGradCols={[COLORS.LIGHT_BROWN, COLORS.LIGHT_BROWN]} btnTitle="Hold to add voice note"/>
                    <ActionButton btnWrapperStyle={[styles.btnWrapperStyle, styles.sendBtnWrapper]} btnTitleStyle={[styles.btnTitleStyle, styles.sendBtn]} onPress={undefined} linGradStyle={styles.linGradStyle} linGradCols={COLORS.DARK_BROWN__DARKEST_BROWN} btnTitle="Send"/>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    image: {
        justifyContent: 'center',
        height: WINDOW_HEIGHT /2,
        width: WINDOW_WIDTH / 1.2,
        overflow: 'hidden',
        padding: WINDOW_WIDTH /10
    },
    formContainerStyle:{
        height: '100%',
        width: '100%',
    },
    formInputContainerStyle:{
        margin: 5,
        marginBottom: 5
    },
    titleStyle:{
        fontSize: 20,
        fontWeight: 600
    },
    textInputStyle:{
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5
    },
    messageInputStyle:{
        minHeight: '40%',
    },
    btnWrapperStyle: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        height: '10%',
        marginBottom: 10
    },
    btnTitleStyle: {
        fontSize: 20
    },
    linGradStyle: {
        alignItems: 'center',
        justifyContent:'center',
        height: '100%'
    },
    sendBtn:{
        color: 'white'
    },
    sendBtnWrapper:{
        width: '50%',
        alignSelf:'center'
    }
});