import { State } from "./States.ts";

export default class TgState {

    user: any;
    state: State;

    constructor(state: State, user) {
        this.state = state;
        this.user = user;
    }

    static initState() {
        console.log(window?.Telegram?.WebApp);
        
        if (window?.Telegram?.WebApp.initData !== '') {
            console.log('asdfasf');
            
            return new TgState(State.done, window.Telegram.WebApp.initDataUnsafe.user);
        }
        return new TgState(State.done, null);
    }

}