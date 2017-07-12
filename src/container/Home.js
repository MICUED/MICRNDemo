import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  Animated,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { show, hide } from '../action/home.js'
const navigateAction = (routeName, params) => {
    return NavigationActions.navigate({
        routeName,
        params
    })
}
const ExampleRoutes = {
  QRScanScreen: {
    routeName: 'QRScan',
    name: '扫一扫',
    description: '扫一扫',
    params: {
      onScanResultReceived(e) {
        const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'}),
            NavigationActions.navigate({ routeName: 'QRScanResult', params: {result: e}})
          ]
        })
        this.props.navigation.dispatch(resetAction)
      }      
    }
  },
  ImageCacheScreen: {
    routeName: 'ImageCache',
    name: '图片缓存',
    description: '图片缓存'    
  }
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  }
})
@connect(state => ({
  status: state.home.status
}), dispatch => ({
  showFunc: () => dispatch(show()),
  hideFunc: () => dispatch(hide()),
  navGo: (routeName, params) => dispatch(navigateAction(routeName, params))
}))
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }    
  }
  render() {
    return (
      <ScrollView>
        {Object.keys(ExampleRoutes).map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => {
              const { routeName, params } = ExampleRoutes[item]
              this.props.navGo(routeName, params)
            }}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{ExampleRoutes[item].name}</Text>
              <Text style={styles.description}>
                {ExampleRoutes[item].description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}