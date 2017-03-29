/**
 * Created by Hsiang on 2017/3/22.
 *
 * 用户自定义配置
 */
export default {
  ios: {
    settings: {
      statusbarPadding: true,
      pageTransition: 'fade-right-transition',  // ios-transition/zoom-transition/fade-bottom-transition/fade-right-transition
    }
  },
  android: {
    settings: {
      statusbarPadding: true,
      pageTransition: 'zoom-transition', // ios-transition/zoom-transition/fade-bottom-transition/fade-right-transition
    }
  },
  wechat: {
    settings: {
      jsSDKUrl: 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js', // 自动判断https还是http
      hideNavBar: true,
      hideNavBar2: true,
      hideNavBar3: true,
    },
  },
  alipay: {
    settings: {
      hideNavBar: true,
    }
  },
  dingtalk: {
    settings: {
      hideNavBar: true,
    },
  },
  qq: {
    settings: {
      hideNavBar: true,
    },
  },
  dtdream: {
    settings: {
      hideNavBar: true,
    },
  },
}