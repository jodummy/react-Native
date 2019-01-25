import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    부모가 import 한 open_weather_map여기서 받아온다 {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    description 이거  : {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    temp 야 {this.props.temp}°F
                </Text>

                <Text style= {{fontStyle: "italic" }}> dsfksdlfjsdlk </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});

export default Forecast; 