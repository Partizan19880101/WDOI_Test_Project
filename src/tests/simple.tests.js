const {pages} = require('./../po')

const dashboardPageTitle = "Appointment Planner - Syncfusion Angular Components Showcase App";

describe('Open Doctor page', () => {
    beforeEach(async ()=> {
        await pages('dashboard').open();
    })

    it("Check page title", async () => {
        await expect(browser).toHaveTitle(dashboardPageTitle);
    });

    it("Open modal window for adding new doctor", async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages("doctors").listHeader.addNewDoctorButton.click();

        await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
        await expect(pages("doctors").addDoctorModal.title).toHaveText("New Doctor");
    })

    it("Add new doctor", async () => {
        const doctorName = "Pavel Zuyonak";

        await pages('dashboard').sideMenu.item('doctors').click();
        await pages("doctors").listHeader.addNewDoctorButton.click();
        await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();
        await pages('doctors').addDoctorModal.input('name').setValue(doctorName);
        await pages('doctors').addDoctorModal.input('phone').setValue('2020327222');
        await pages('doctors').addDoctorModal.input('email').setValue('zuyonok88@gmail.com');
        await pages('doctors').addDoctorModal.input('education').setValue('BSU');
        await pages('doctors').addDoctorModal.input('designation').setValue('123');
        await pages('doctors').addDoctorModal.saveButton.click();


        await expect(pages("doctors").specialistCard(8).name).toHaveText("Dr. " + doctorName);
        await expect(pages("doctors").specialistCard(8).education).toHaveText('BSU');
    })

    it("Close a modal window for new doctor", async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages("doctors").listHeader.addNewDoctorButton.click();

        await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();
        await pages("doctors").addDoctorModal.closeButton.click();
        await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
    })
});