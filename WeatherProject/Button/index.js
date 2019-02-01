import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from "react-native";

import styles from "./style";

class button extends Component {
    render() {
        return (
            <TouchableHighlight onpress={this.props.onPress}>
                <View style={[styles.button, this.props.style]}>
                    <Text>
                        {this.props.label}
                    </Text>
                </View>
            </TouchableHighlight >
        );
    }
}

export default index;