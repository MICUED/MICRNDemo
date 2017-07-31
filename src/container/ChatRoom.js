import React from "react"
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native"

import { GiftedChat, Actions, Bubble } from "react-native-gifted-chat"
export default class Example extends React.Component {

    state = {
        messages: [],
    };

    componentWillMount() {
        const ws = new WebSocket("ws://localhost:3000")

        ws.onopen = () => {
            // 打开一个连接
        }

        ws.onmessage = (e) => {
            // 接收到了一个消息
            console.log(e.data)
            this.onReceive(e.data)
        }

        ws.onerror = (e) => {
            // 发生了一个错误
            console.log(e.message)
        }

        ws.onclose = (e) => {
            // 连接被关闭了
            console.log(e.code, e.reason)
        }


        this.setState({
            ws: ws,
            messages: [
                {
                    _id: 1,
                    text: "Hello developer",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: "https://facebook.github.io/react/img/logo_og.png",
                    },
                },
            ],
        })


    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: "https://facebook.github.io/react/img/logo_og.png",
                    },
                }),
            }
        })
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
        this.state.ws.send("diyigechaxun")
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }

}
