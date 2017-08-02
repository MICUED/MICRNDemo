# MICRNDemo

这是一个基于micrn项目的一个demo

1. 运行

```
npm install

```
或者

```
yarn install
```
2. 安装react-native-cli工具
通过 npm 安装 React Native 命令行工具

```
npm install -g yarn react-native-cli

```
3.由于部分组件是原生开发，wrapper了一层js，因此需要link组件到项目

```
react-native link
```

4. 安卓运行，需要打开模拟器，或者电脑连接真机

```
react-native run-android
```
iOS运行，需要安装xcode

```
react-native run-ios
```
baidu地图使用时，需要将/android/app/src/main/java/com/micrndemo/MainApplication.java中new BaiduMapPackage()给删除，方可正确使用
⚠️推送组件暂时在push分支中提供[消息通知](https://github.com/MICUED/MICRNDemo/tree/push)<br>
⚠️奔溃及错误日志展示组件暂时在errLog分支中提供[errLog](https://github.com/MICUED/MICRNDemo/tree/errLog)<br>
