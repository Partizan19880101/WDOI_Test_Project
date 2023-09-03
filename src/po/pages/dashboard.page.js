const SideMenu = require('./../components/common/sidemenu.component');
const BasePage = require('./../pages/base.page');

class DashboardPage extends BasePage {

    constructor() {
        super("/showcase/angular/appointmentplanner/#/dashboard");
        this.sideMenu = new SideMenu();
    }
}

module.exports = DashboardPage;