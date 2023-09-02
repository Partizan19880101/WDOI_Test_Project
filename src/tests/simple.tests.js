const dashboardPageTitle = "Appointment Planner - Syncfusion Angular Components Showcase App";

describe('Open Doctor page', () => {
    beforeEach(async ()=> {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
    })

    it("Check page title", async () => {
        await expect(browser).toHaveTitle(dashboardPageTitle);
    });

    it("Open modal window for adding new doctor", async () => {
        const doctorsButton = await $('[routerlink="/doctors"]');
        const addNewDoctorButton = await $('button=Add New Doctor');
        const newDoctorModalTitle = await $('#_title');

        await doctorsButton.click();
        await addNewDoctorButton.click();

        await expect(newDoctorModalTitle).toBeDisplayed();
        await expect(newDoctorModalTitle).toHaveText("New Doctor");
    })

    it("Add new doctor", async () => {
        const newDoctorModalTitle = await $('#_title');
        const doctorsButton = await $('[routerlink="/doctors"]');
        const addNewDoctorButton = await $('button=Add New Doctor');
        const name = await $('[name="Name"]');
        const phoneNumber = await $('#DoctorMobile');
        const email = await $('[name="Email"]');
        const education = await $('[name="Education"]');
        const designations = await $('[name="Designation"]');
        const saveButton = await $('button=Save');
        const newDoctor = await $('#Specialist_8');
        const doctorName = "Pavel Zuyonak";

        await doctorsButton.click();
        await addNewDoctorButton.click();
        await newDoctorModalTitle.waitForDisplayed();
        await name.setValue(doctorName);
        await phoneNumber.setValue('2020327222');
        await email.setValue('zuyonok88@gmail.com');
        await education.setValue('BSU');
        await designations.setValue('123');
        await saveButton.click();

        await expect(newDoctor).toBeDisplayed();
        await expect(newDoctor.$('.name')).toHaveText("Dr. " + doctorName);
    })

    it("Close a modal window for new doctor", async () => {
        const newDoctorModalTitle = await $('#_title');
        const doctorsButton = await $('[routerlink="/doctors"]');
        const addNewDoctorButton = await $('button=Add New Doctor');
        const newDoctorModalWindow = await $('.new-doctor-dialog');
        const closeButton = await $('.e-dlg-closeicon-btn');

        await doctorsButton.click();
        await addNewDoctorButton.click();
        await newDoctorModalTitle.waitForDisplayed();
        await closeButton.click();
        await expect(newDoctorModalWindow).not.toBeDisplayed();
    })
});