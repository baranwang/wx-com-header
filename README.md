# wx-com-header

小程序在 `custom` 所有的页面的顶部都会消失，然而实际项目中我们可能只需要部分页面全屏，这就要自定义一个顶部栏。


这个组件高度规范参照 iOS 及 Android 的 UI 规范即：

||iOS | Android|
|---|---|---|
|status bar|一般为 `20px`<br>iPhone X 下 为 `44px`|`24px`|
|navigation bar|`44px`|`48px`|


---

###  如何使用

导入[代码片段 wechatide://minicode/uK6KXgmb6WZT](wechatide://minicode/uK6KXgmb6WZT)

将 `component` 目录下的文件导入项目中

在使用的页面引入组件
```javascript
{
  "usingComponents": {
    "header": "../component/header" // 导入的文件路径
  }
}
```

页面中使用
``` html
<header background-color="#000" color="#fff" fixed>Title</header>
```

---

## 可配置项

|配置项|说明|
|---|---|
|fixed|导航是否固定，默认为 `false`|
|background-color|导航背景色，参考 css 颜色写法，默认为 `#fff`|
|color|导航文字颜色，参考 css 颜色写法，默认为 `#000`|
|back|显示返回按钮，当传入为数字时，则为 `wx.navigateBack` 的 `delta` 参数|


