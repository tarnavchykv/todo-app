import { useState, useEffect } from 'react';
import TodoElement from '../TodoElement/TodoElement';

const TodoList = () => {
    const [itemList, setItemList] = useState([]);
    const [name, setName] = useState("");

    
    const handleClick = (e) => {
        e.preventDefault();
        const idList = itemList.map((item) => item.id);
        const newId =  idList.length ? idList.at(-1) + 1 : 0;
        console.log(newId);
        const newElement = {
            id: newId,
            text: name,
            completed: false
        };
        setName("");
        setItemList([...itemList, newElement]);
        localStorage.setItem('itemList', JSON.stringify([...itemList, newElement]));
    };

    useEffect(() => {
        const items = localStorage.getItem('itemList');
        if (items) {
            setItemList(JSON.parse(items));
        }
    }, []);

    const handleDelete = (id) => {
        const clearedList = itemList.filter((el) => el.id !== id)
        setItemList(clearedList);
        localStorage.setItem('itemList', JSON.stringify(clearedList));
    };

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const todoListElement = itemList.map((item) => {
        return (
            <div className='element' key={item.id}>
                <TodoElement item={item} delete={handleDelete}/>
                <button onClick={(e) => {e.preventDefault();handleDelete(item.id)}}>Delete</button>
            </div>
        );
    });

    return (
        <div className='container'>
            <h1>Todo List</h1>
            
            <form>
                <input  className='input' type="text" placeholder="Task..." onChange={handleChange} value={name}></input>
                <button onClick={handleClick}>Add Task</button>
            </form>
            {todoListElement}
        </div>)
};

export default TodoList;