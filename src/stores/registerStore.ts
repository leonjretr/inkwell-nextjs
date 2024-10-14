import {makeAutoObservable} from "mobx";

class registerStore {

    isUsernameTaken: boolean = false;
    fetchError: string = "";
    registrationSuccessful: boolean = false;

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

    setRegistrationSuccessfulTrue = () => {
        this.registrationSuccessful = true;
    }
    setRegistrationSuccessfulFalse = () => {
        this.registrationSuccessful = false;
    }
}

export default new registerStore();
