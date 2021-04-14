import {autobind} from "../decorators/autobinder"
import {usersState} from "../store/user-store"

export class UserInputForm{

    templateElement: HTMLTemplateElement;
    hostingElement: HTMLDivElement;
    element: HTMLFormElement;

    fnameElement: HTMLInputElement;
    mnameElement: HTMLInputElement;
    lnameElement: HTMLInputElement;
    ageElement: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById('user-input-form')! as HTMLTemplateElement;
        this.hostingElement = document.getElementById("app")! as HTMLDivElement;

        const templateContent = document.importNode(this.templateElement.content, true);

        this.element = templateContent.firstElementChild as HTMLFormElement;

        this.fnameElement = this.element.querySelector("#fname")! as HTMLInputElement;
        this.mnameElement = this.element.querySelector('#mname')! as HTMLInputElement;
        this.lnameElement = this.element.querySelector("#lname")! as HTMLInputElement;
        this.ageElement = this.element.querySelector("#age")! as HTMLInputElement;

        this.insertDomElements();
        this.configure();
    }

    private insertDomElements(): void{
        this.hostingElement.insertAdjacentElement("afterbegin", this.element);
    }

    private configure(): void{
        this.element.addEventListener('submit', this.submitFormHandler)
    }

    private validateAndRetrieveFormValues(): [string, string, string, number]{
        console.log("I am here to validate the form");

        const fname = this.fnameElement.value;
        const mname = this.mnameElement.value;
        const lname = this.lnameElement.value;
        const age = +this.ageElement.value;

        return [fname, mname, lname, age]
    }

    @autobind
    submitFormHandler(event: Event){
        console.log("submit Form handler called");
        event.preventDefault();

        const userInput = this.validateAndRetrieveFormValues();

        if(Array.isArray(userInput)){
            const [fname, mname, lname, age] = userInput;

            console.log({fname, mname, lname, age})

            usersState.addUser({
                id: Math.random().toString(),
                firstName: fname,
                middleName: mname,
                lastName: lname,
                age: age
            });

            this.clearForm();
        }
    }

    private clearForm(){
        console.log('clearForm called')
        this.fnameElement.value = "";
        this.mnameElement.value = "";
        this.lnameElement.value = "";
        this.ageElement.value = "";
    }
}