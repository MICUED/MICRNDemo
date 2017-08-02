import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    Platform,
    ScrollView,
    TouchableOpacity,
    View
} from "react-native"
import { Client } from "bugsnag-react-native"
import { NavigationActions } from "react-navigation"
const navigateAction = (routeName, params) => {
    return NavigationActions.navigate({
        routeName,
        params
    })
}
const styles = StyleSheet.create({
    button: {
        marginTop: 40
    }
})
export default class ErrLog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
  static navigationOptions = {
      title: "log"
  }

  render() {
      return (
          <View>
              <Button style={styles.button} color="#841584" title='出现错误' onPress={() => {
                  const bugsnag = new Client()
                  bugsnag.notify(new Error("Test Error"))                
              }} />
          </View>
      )
  }
}