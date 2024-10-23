class FormManager {
    constructor(formId) {
        this.form = document.getElementById("formId");
        this.init();
    }

    //Init when the class is calling
    init() {
        this.form.addEventListener('submit', (event) => {
            //Avoid the page recharge
            event.preventDefault();
            this.extractData();
            this.sendData();
        })

    }
    extractData() { }
    sendData() { }

}