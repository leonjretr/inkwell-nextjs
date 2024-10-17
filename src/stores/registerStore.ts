import {makeAutoObservable} from "mobx";

class registerStore {

    isUsernameTaken: boolean = false;
    fetchError: string = "";
    registrationSuccessful: boolean = false;
    loginSuccessful: boolean = false;
    isAuthorized: boolean = false;

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

    setLoginSuccessfulTrue = () => {
        this.loginSuccessful = true;
    }
    setLoginSuccessfulFalse = () => {
        this.loginSuccessful = false;
    }

    setAuthorizedTrue = () => {
        this.isAuthorized = true;
    }
    setAuthorizedFalse = () => {
        this.isAuthorized = false;
    }
}

export default new registerStore();
