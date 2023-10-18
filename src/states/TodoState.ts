import Todo from "../models/Todo";

export default class TodoState{

    state : LoadingStates;
    todos : Array<Todo>;

    constructor(
        state : LoadingStates,
        todos : Array<Todo>,
    ){
        this.state = state;
        this.todos = todos;
    }


}

export enum LoadingStates{
    loading,
    error,
    done,
    init
}