import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import useActions from "../hooks/useActions";

const TodoList = () => {
    const {page, pageSize, error, loading, todos} = useTypedSelector(state => state.todo);
    const {fetchTodos,setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];
    useEffect(() => {
        fetchTodos();
    }, [page])

    if (loading) return (<h1>Loading...</h1>);
    if (error) return (<h1>{error}</h1>)
    return (
        <div>
            <button onClick={() => console.log(todos)}>qwe</button>
            {todos.map(x => (
                <div key={x.id}>{x.title}</div>
            ))}
            <div style={{display: "flex"}}>
                {pages.map(p => (
                    <div
                        onClick={()=> setTodoPage(p)}
                        key = {p} style={{border: p === page ? '2px solid green' : '1px solid gray'}}>
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;