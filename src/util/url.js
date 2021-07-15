export function keepBackStack(url, pageKey) {
  const urlObject = new URL(url);
  urlObject.searchParams.set('keep_back_stack', 'true');
  return urlObject.href;
}

export function appendTrk(url, pageKey) {
  // pageKey needs to be formatted as a-b-c, do not use underscore _
  const urlObject = new URL(url);
  const srcUrlObject = new URL(location.href);

  if (urlObject.searchParams.get('trk')) {
    return urlObject.href;
  }
  // https://iwww.corp.linkedin.com/wiki/cf/pages/viewpage.action?pageId=147433689
  if (/signup\/cold-join/.test(urlObject.pathname)) {
    // registration-flow: one of coreg,brandpage,interstitial.
    // reg流程中的flow和custom都是本身url上带的参数,flavor为limatteo
    const registrationFlow = srcUrlObject.searchParams.get('flow') || 'interstitial'
    const flowFlavor = 'limatteo'
    const custom = pageKey || 'join' // or src trk for finer data
    urlObject.searchParams.set('trk', `${registrationFlow}_${flowFlavor}_${custom}`);
  } else urlObject.searchParams.set('trk', `limatteo_${pageKey}`); //or src trk for finer data

  return urlObject.href;
}

export function handleUrl(url, pageKey) {
  let finalUrl = keepBackStack(url, pageKey);
  return appendTrk(finalUrl, pageKey);
}

export function navigateToMiniWebview(wxLink) {
  wx.miniProgram.navigateTo({
    url: wxLink,
  });
}
