import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './container/Home.js'
import QRScanScreen from './components/QRScan.js'
import QRScanResultScreen from './container/QRScanResult.js'
import ImageCacheScreen from './container/ImageCache.js'
import FlatListView from './container/FlatListView.js'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'

const paramsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions
        render() {
            const { navigation, ...otherProps } = this.props
            const { state: { params } } = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

const routes = {
    Home: { screen: paramsToProps(HomeScreen) },
    QRScan: { screen: paramsToProps(QRScanScreen) },
    QRScanResult: { screen: paramsToProps(QRScanResultScreen) },
    ImageCache: { screen: paramsToProps(ImageCacheScreen) },
    FlatListView: { screen: paramsToProps(FlatListView) }
}

const stackNavigatorConfig = {
    mode: 'card',
    headerMode: 'none',
    transitionConfig: (() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }))
};

export const AppNavigator = StackNavigator(routes, stackNavigatorConfig)
