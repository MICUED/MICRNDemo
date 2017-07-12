import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View
} from 'react-native'
import CachedImage from 'react-native-cached-image'
const styles = StyleSheet.create({
})
export default class ImageCache extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }    
  }
  render() {
    return (
        <View>
            <View style={{height: 40}}></View>
            <CachedImage
                source={{
                    uri: 'https://cdn2-techbang.pixfs.net/system/images/216939/original/c1bacada834a111a73c26414d44f0162.gif'
                }}
                style={{height: 100, width: 100}}
            />            
        </View>
    )
  }
}