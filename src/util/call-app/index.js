/**
 * invoke apps using callApp lib, determines schemeUrl/deeplink/universal
 * link based on current path name and query params.
 * */

import { isIOS } from '../container';
import qs from 'qs';

const TRANSACTIONAL_ROUTING_URL = 'https://www.linkedin.com/transactional-routing/mobile-redirect',
  YINGYONGBAO_URL = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.linkedin.android',
  ZEPHYR_IOS_APP_STORE_URL = 'https://apps.apple.com/app/apple-store/id1052654880?pt=10746&mt=8',
  UNIVERSAL_LINK_URL = 'www.linkedinmobileapp.com';

const LINKEDIN_EVENT_TRK_VALUE = 'linkedin_event',
  TRK_IOS_VALUE = 'linkedin_event_ios',
  TRK_ANDROID_VALUE = 'linkedin_event_android',
  APP_TYPE_VALUE = 'FLAGSHIP';

const TRK_PARAM_KEY = 'trk',
  CT_PARAM_KEY = 'ct';

const linkMap = {
  profile: ['profile', 'you/profile'],
  messaging: ['messaging', 'you/messaging'],
  feed: ['feed', 'you/feed'],
};

export default function (CallApp, type = 'feed') {
  // callapp-lib is not supporting setting universal link's path dynamically,
  // we need to manually modify the host for now
  // https://github.com/suanmei/callapp-lib/issues/60
  const options = {
    scheme: {
      protocol: 'linkedin',
    },
    intent: {
      package: 'com.linkedin.android.flagshipdev.debug',
      action: 'android.intent.action.VIEW',
      category: 'android.intent.category.DEFAULT',
      component: 'com.linkedin.android.l2m.deeplink.CustomDeepLinkHelperActivity',
      scheme: 'linkedin',
    },
    universal: {
      host: UNIVERSAL_LINK_URL,
      pathKey: 'pathkey',
    },
    appstore: `${ZEPHYR_IOS_APP_STORE_URL}&${qs.stringify({ [CT_PARAM_KEY]: TRK_IOS_VALUE })}`,
    yingyongbao: YINGYONGBAO_URL,
    fallback: `${TRANSACTIONAL_ROUTING_URL}?${qs.stringify({
      [TRK_PARAM_KEY]: isIOS() ? TRK_IOS_VALUE : TRK_ANDROID_VALUE,
    })}`,
  };
  const config = {
    param: {
      trk: LINKEDIN_EVENT_TRK_VALUE,
      appType: APP_TYPE_VALUE,
    },
  };

  if (isIOS()) {
    config.path = linkMap[type] ? linkMap[type][0] : linkMap['/'][0];
  } else {
    config.path = linkMap[type] ? linkMap[type][1] : linkMap['/'][1];
  }

  options.universal.host = options.universal.host + '/' + config.path;
  const callLib = new CallApp(options);
  callLib.open(config);
}
