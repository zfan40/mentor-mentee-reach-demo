// import wx from './weixin-js-sdk'
const zephyrRegex = /(Z|z)ephyr/;

const iOSRegex = /iP(hone|od|ad)/;

const androidRegex = /Android/;

const wechatRegex = /MicroMessenger/;

const weiboRegex = /WeiBo/;

/**
 * Get the user agent. IIFE to cache userAgent so it isn't checked each time.
 *
 * @public
 * @return {String} - user agent (or empty string if not in a browser env)
 */

export const getUserAgent = (function getUserAgent() {
  let userAgent;

  return () => {
    if (!userAgent) {
      userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    }

    return userAgent;
  };
})();

export function isIOS(ua = getUserAgent()) {
  return iOSRegex.test(ua);
}

export function isAndoird(ua = getUserAgent()) {
  return androidRegex.test(ua);
}

/**
 * Determines if user agent is for a Zephyr app.
 *
 * @public
 * @param {String} - ua (optional user agent string)
 * @return {Boolean} is in Zephyr app or not
 */
export function isInZephyrApp(ua = getUserAgent()) {
  return zephyrRegex.test(ua);
}

/**
 * Determines if user agent is for a zephyr ios mobile device.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isZephyrIOSDevice(ua = getUserAgent()) {
  return iOSRegex.test(ua) && zephyrRegex.test(ua);
}

/**
 * Determines if user agent is for a zephyr android mobile device.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isZephyrAndroidDevice(ua = getUserAgent()) {
  return androidRegex.test(ua) && zephyrRegex.test(ua);
}

/**
 * Determines if user agent is for a Wechat app.
 *
 * @public
 * @param {String} - ua (optional user agent string)
 * @return {Boolean} is in Wechat app or not
 */
export function isInWechatApp(ua = getUserAgent()) {
  return wechatRegex.test(ua);
}

/**
 * Determines if user agent is for a wechat ios mobile device.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isWechatIOSDevice(ua = getUserAgent()) {
  return iOSRegex.test(ua) && wechatRegex.test(ua);
}

/**
 * Determines if user agent is for a wechat android mobile device.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isWechatAndroidDevice(ua = getUserAgent()) {
  return androidRegex.test(ua) && wechatRegex.test(ua);
}

/**
 * Determines if user agent is for a Wechat app.
 *
 * @public
 * @param {String} - ua (optional user agent string)
 * @return {Boolean} is in Wechat app or not
 */
export function isInWeiboApp(ua = getUserAgent()) {
  return weiboRegex.test(ua);
}

/**
 * Determines if user agent is for a weibo ios mobile device.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isWeiboIOSDevice(ua = getUserAgent()) {
  return iOSRegex.test(ua) && weiboRegex.test(ua);
}

/**
 * Determines if user agent is for a weibo android mobile device.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isWeiboAndroidDevice(ua = getUserAgent()) {
  return androidRegex.test(ua) && weiboRegex.test(ua);
}

/**
 * Determines if user agent is for a wechat miniprogram.
 *
 * @public
 * @param {String} ua (optional user agent string)
 * @return {Boolean}
 */
export function isInWechatMiniprogram() {
  var userAgent = window.navigator.userAgent.toLowerCase();

  return new Promise((resolve) => {
    if (userAgent.indexOf('micromessenger') == -1) {
      resolve(false);
    } else {
      try {
        wx.miniProgram.getEnv((res) => {
          if (res.miniprogram) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } catch (e) {
        //WeChat webview ua contains micromessenger,'wx' con't find variable.
        resolve(false);
      }
    }
  });
}
