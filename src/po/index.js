const DashboardPage = require('./pages/dashboard.page');
const DoctorsPage = require('./pages/doctors.page');

/**
 *
 * @param name {'dashboard' | 'doctors'}
 * @returns {*} {DashboardPage | DoctorsPage}
 */
function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage()
    }
    return items[name.toLowerCase()];
}
module.exports = {
    DoctorsPage,
    DoctorsPage,
    pages,
}