function inIframe() {
    let isInIframe = false;
    try {
        isInIframe = window.self !== window.top;
    } catch (e) {
        isInIframe = true;
    }
    if(isInIframe) show('leaveBrowser');
}