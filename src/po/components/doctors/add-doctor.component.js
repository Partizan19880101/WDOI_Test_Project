const BaseComponent = require('./../common/base.component');

class AddDoctorComponent extends BaseComponent {

    constructor() {
        super('.new-doctor-dialog');
    }

    get title() {
        return this.rootEl.$('#_title');
    }
    get closeButton() {
        return this.rootEl.$('.e-dlg-closeicon-btn');
    }

    get saveButton() {
        return this.rootEl.$('button=Save');
    }

    /**
     * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
     * @returns {ChainablePromiseElement<ThenArg<ReturnType<$ElementCommands["$"]>>>}
     */
    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]'
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = AddDoctorComponent;