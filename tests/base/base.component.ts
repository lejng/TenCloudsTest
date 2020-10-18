export class BaseComponent{
    waitForLoadScripts() {
        browser.waitUntil(() => {
                const state = browser.execute(function () {
                    return document.readyState;
                });
                return state === 'complete';
            }, {
                timeout: browser.config.waitforTimeout,
                timeoutMsg: 'Page is not loaded by default timeout',
                interval: 100
            }
        );
    }
}
