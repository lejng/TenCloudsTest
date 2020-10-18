
class HeaderComponent  {
    get headerBlock () { return $("//div[contains(@class,'navigation')]")}
    get navTabs () { return this.headerBlock.$$("//a[contains(@class,'Nav')]//span")}

    chooseTab (tabText) {
        let tabByText = this.navTabs.find(tab => tab.getText().includes(tabText))
        tabByText.click();
    }
}

module.exports = HeaderComponent
