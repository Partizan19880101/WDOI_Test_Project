const BaseComponent = require('./../common/base.component')

class SideMenuComponent extends BaseComponent {

    constructor() {
        super('#plannerSiderBar');
    }

    getName() {
        return this.rootEl.$('.name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]',
        }
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;