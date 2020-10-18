import allureReporter from '@wdio/allure-reporter';

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

    click(element: WebdriverIO.Element, name: string = ""){
        allureReporter.addAttachment(`Clicking by element '${name}'`, "")
        element.click()
    }

    getText(element: WebdriverIO.Element, name: string = ""){
        let text = element.getText()
        allureReporter.addAttachment(`Text from element '${name}'`, text)
        return text;
    }

    setValue(element: WebdriverIO.Element, value: string, name: string = ""){
        allureReporter.addAttachment(`Setting text in element '${name}'`, `Text for set: '${value}'`)
        element.setValue(value)
    }
}
