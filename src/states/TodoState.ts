import Todo from "../models/Todo";
import { State } from "./States";

export default class TodoState {

    state: State;
    todos: Array<Todo>;

    constructor(
        state: State,
        todos: Array<Todo>,
    ) {
        this.state = state;
        this.todos = todos;
    }
}