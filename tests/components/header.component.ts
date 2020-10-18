import {BaseComponent} from "../base/base.component";
import {HeaderNavTabsEnum} from "../enums/header.nav.tabs.enum";

export class HeaderComponent extends BaseComponent {
    get headerBlock () { return $("//div[contains(@class,'navigation')]")}
    get navTabs () { return this.headerBlock.$$("//a[contains(@class,'Nav')]//span")}

    chooseTab (tab: HeaderNavTabsEnum) {
        let tabText = tab.toString()
        this.waitForLoadScripts()
        let tabByText = this.navTabs.find(tab => tab.getText().includes(tabText));
        this.click(tabByText, tabText);
    }
}

