class buttonManager{
    constructor(button){
        this.button =  button
    }

    getInputText(input){
        this.button.onclick = () => {
            return input.value
        }
    }

    showBox(){
        this.button.onclick = () => {

        }
    }
}

