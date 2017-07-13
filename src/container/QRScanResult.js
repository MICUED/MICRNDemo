import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    View
} from "react-native"

const styles = StyleSheet.create({
})
export default class QRScanResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }    
    }
    render() {
        return (
            <View>
                <View style={{height: 40}}></View>
                <Text>{this.props.result.data}</Text>
            </View>
        )
    }
}