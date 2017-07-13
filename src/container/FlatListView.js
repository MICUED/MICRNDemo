import React, { Component } from "react"
import { StyleSheet, Text, FlatList, View, Button, Animated, RefreshControl } from "react-native"

const flatData = new Array(15).fill(0).map((value, index) => {
    return { key: index }
})

const footerText = ["加载中 ~~~", "已经到头了 ~~~"]

class FlatListView extends Component {
    _keyExtractor = (item, index) => item.key;

    _separator = () => {
        return <View style={{ height: 2, backgroundColor: "yellow" }} />
    }

    _header = () => {
        return <Text style={[styles.txt, { backgroundColor: "black" }]}>这是头部</Text>
    }

    _footer = () => {
        return <Text style={{ textAlign: "center", flex: 1, height: 30, fontSize: 12, lineHeight: 30 }}>{footerText[+this.state.isEnded]}</Text>
    }

    _onRefresh = () => {
        return <RefreshControl
            refreshing={this.state.isRefresh}
            onRefresh={() => {
                this.setState({
                    isRefresh: true
                })
                setTimeout(() => {
                    this.setState({
                        listData: flatData,
                        isEnded: flatData.length >= 18,
                        isRefresh: false
                    })
                }, 2500)
            }}
            title={"load..."}
            tintColor={"#ff0000"}
            colors={["#fff"]}
            progressBackgroundColor={"#ffff00"} />
    }

    _renderItem = (item) => {
        return <Text style={[{
            flex: 1,
            height: 80,
            backgroundColor: item.index % 2 === 0 ? "red" : "blue"
        }, styles.txt]}>{item.index}</Text>
    }
    _onEndReached = (info) => {
        console.log(info.distanceFromEnd)
        if (!this.state.loading) {
            this.setState({
                loading: true
            })
            console.log(info.distanceFromEnd)
            setTimeout(() => {
                if (this.state.listData.length >= 18) return this.setState({
                    isEnded: true,
                    loading: false
                })
                this.setState({
                    listData: this.state.listData.concat({
                        key: this.state.listData.length + 1,

                    }),
                    loading: false
                })
            }, 1000)
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            listData: flatData,
            loading: false,
            isEnded: false,
            isRefresh: false
        }
    }

    render() {
        return (<View style={{ flex: 1 }}>
            <Button title='滚动到头部' onPress={() => {
                this._flatList.scrollToOffset({ animated: true, offset: 0 })
            }} />
            <Button title='滚动到第八个点' onPress={() => {
                this._flatList.scrollToIndex({ viewPosition: 0, index: 8 })
            }} />
            <Button title='滚动到末尾' onPress={() => {
                this._flatList.scrollToEnd()
            }} />
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={(flatList) => this._flatList = flatList}
                    data={this.state.listData}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onEndReached={this._onEndReached}
                    refreshControl={this._onRefresh()}
                    onEndReachedThreshold={0.01}
                //getItemLayout={(data, index) => (
                //    { length: 80, offset: 82 * index + 30, index }
                //)}
                />
            </View>

        </View>)
    }
}
const styles = StyleSheet.create({
    txt: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 30,
    }
})

export default FlatListView