import {useState} from "react";

const TodoElement = (props) => {
    const [isCompleted, setIsCompleted] = useState(props.item.completed);
    const completedStyle = {textDecoration: "line-through"};
    const handleCheckBox = () => {
        setIsCompleted(!isCompleted);
    };
    return (
        <>
            <span style={isCompleted ? completedStyle : null}>{props.item.text}</span>
            <input type="checkbox" checked={isCompleted} onChange={handleCheckBox} ></input>
            
        </>
);
}

export default TodoElement;