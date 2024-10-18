class buttonManager{
    constructor(button){
        this.button =  button
    }

    get text(){
        this.button.onclick = () => {
            return input.value
        }
    }

    showBox(){
        this.button.onclick = () => {

        }
    }
}