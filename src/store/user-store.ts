import {UserDetail} from "../model/user-detail"

type Listener = (items: UserDetail[]) => void;

//Lets store all the users data in some central store
export class UserStore{

    private usersList: UserDetail[] = [];
    private listeners: Listener[] = [];
    private static instance: UserStore | null = null;

    private constructor(){}

    static getInstance(){
        if(!this.instance){
            this.instance = new UserStore();
        }
        return this.instance;
    }

    addUser(user: UserDetail): void{
        this.usersList.push(user);
        this.updateListeners();
    }

    removeUser(userId: string): void{
        this.usersList = this.usersList.filter((user) => user.id !== userId);
        this.updateListeners();
    }

    addListener(listener: Listener){
        this.listeners.push(listener)
    }

    updateListeners(): void{
        for(const listener of this.listeners){
            listener([...this.usersList]);
        }
    }
}

export const usersState = UserStore.getInstance();

