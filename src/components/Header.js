import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    // properties like import syntax
    const { textStyle, viewStyle } = styles;

    // properties for styling
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: 'pink',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: .2,
        elevation: 2,
        position: 'relative'
    }
};

export default Header;
