import {UserDetail} from "../model/user-detail"

export class UserItem{

    templateElement: HTMLTemplateElement;
    hostingElement: HTMLElement;
    element: HTMLElement;

    fnameElement: HTMLDivElement;
    mnameElement: HTMLDivElement;
    lnameElement: HTMLDivElement;
    ageElement: HTMLDivElement;

    userData: UserDetail;

    constructor(user: UserDetail, hostingId: string){
        this.templateElement = document.getElementById("user-card")! as HTMLTemplateElement;

        this.hostingElement = document.getElementById(hostingId)! as HTMLElement;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as HTMLElement;

        this.userData = user;

        this.fnameElement = this.element.querySelector(".firstname")! as HTMLDivElement;
        this.mnameElement = this.element.querySelector(".middlename")! as HTMLDivElement;
        this.lnameElement = this.element.querySelector(".lastname")! as HTMLDivElement;
        this.ageElement = this.element.querySelector(".age")! as HTMLDivElement;

        this.renderContent();

        this.insertDomElements();
    }

    private insertDomElements(){
        this.hostingElement.insertAdjacentElement('beforeend', this.element);
    }

    private renderContent(){
        this.fnameElement.textContent = this.userData.firstName;
        this.mnameElement.textContent = this.userData.middleName;
        this.lnameElement.textContent = this.userData.lastName;
        this.ageElement.textContent = this.userData.age.toString();
    }
}