
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <button className="btn float-end btn-success m-1" onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click">Add</button>
            <button className="btn float-end btn-warning m-1" onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click">
                Update </button>
            <input className="form-text form-control w-25" value={todo.title}
                onChange={(e) =>
                    dispatch(setTodo({ ...todo, title: e.target.value }))
                }
            />
        </li>
    );
}
