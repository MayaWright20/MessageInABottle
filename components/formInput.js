import React from "react";
import {View, Text, TextInput} from "react-native";

export default function FormInput({multiline, textInputStyle, formInputContainerStyle, titleStyle, title, value, onChangeText, maxLength, placeholder, inputMode }){
    return(
        <View style={formInputContainerStyle}>
            <Text style={titleStyle}>{title}</Text>
            <TextInput multiline={multiline} style={textInputStyle} value={value} onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder}  inputMode={inputMode}/>
        </View>
    )
}