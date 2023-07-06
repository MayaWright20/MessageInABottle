import * as React from 'react';
import { Pressable, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ActionButton({btnWrapperStyle, btnTitleStyle, onPress, linGradStyle, linGradCols, btnTitle}){
    return(
        <Pressable style={btnWrapperStyle} onPress={onPress}>
            <LinearGradient style={linGradStyle} colors={linGradCols}>
                <Text style={btnTitleStyle}>{btnTitle}</Text>
            </LinearGradient>
        </Pressable>
    );
}
