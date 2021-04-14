import {UserDetail} from "../model/user-detail";
import {usersState} from "../store/user-store";
import {UserItem} from "./user-item"

export class UsersList{
    templateElement: HTMLTemplateElement;
    hostingElement: HTMLDivElement;
    element: HTMLElement;

    createdUsers: UserDetail[] = [];

    constructor(){
        this.templateElement = document.getElementById("users-list")! as HTMLTemplateElement;
        this.hostingElement = document.getElementById("app")! as HTMLDivElement;

        const templateContent = document.importNode(this.templateElement.content, true);

        this.element = templateContent.firstElementChild as HTMLElement;

        this.insertDomElements();
        this.configure();

        usersState.addListener((users: UserDetail[])=>{
            this.createdUsers = users;
            this.renderUsers();
        })

    }

    private configure(){
        const ulElement = this.element.querySelector("ul")!;
        ulElement.id = 'users-container';
    }

    private insertDomElements(){
        this.hostingElement.insertAdjacentElement('beforeend', this.element);
    }

    private renderUsers(){
        console.log("Here I will render the users since it is updated");

        const ulElement = this.element.querySelector("ul")! as HTMLElement;
        ulElement.innerHTML = '';

        for(const user of this.createdUsers){
            new UserItem(user, 'users-container');
        }
    }
}