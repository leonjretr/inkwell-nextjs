import {makeAutoObservable} from "mobx";

class registerStore {

    isUsernameTaken: boolean = false;
    fetchError: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setUsernameTakenTrue = () => {
        this.isUsernameTaken = true;
    }
    setUsernameTakenFalse = () => {
        this.isUsernameTaken = false;
    }

    setFetchError = (error: string) => {
        this.fetchError = error;
    }

}

export default new registerStore();
