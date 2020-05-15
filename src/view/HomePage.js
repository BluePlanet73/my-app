import React, {useEffect, useState} from "react";
import TabNavigator from "../components/TabNavigator";

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    // function handleStatusChange(status) {
    //     setIsOnline(status.isOnline);
    // }
    // useEffect(() => {
    //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //
    //     return () => {
    //         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    //     };
    // });

    if (isOnline === null) {
        return <div>'Loading...'</div>;
    }
    return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}

function RenderTodo(props) {
    let arr = [];
    const {todoS, setTodo} = props;
    todoS.forEach(todo => {
        arr.push(
            <button onClick={() => {
                console.log(todoS);
                setTodo([{text: 'new text', page: Math.random()}, ...todoS])
            }} key={todo.page}>
                <div>text: {todo.text}</div>
                <div>page: {todo.page}</div>
            </button>
        )
    })
    return arr;
}

function HomePage() {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState("banana");
    const [todo, setTodo] = useState([
        {text: 'Learn Hooks', page: 1},
        {text: 'Learn page', page: 2},
        {text: 'Learn react', page: 3},
        {text: 'Learn a', page: 4},
        {text: 'Learn b', page: 5}
    ]);
    useEffect(() => {
        document.title = `You clicked ${Math.random()} times`;
    });
    return (
        <div>
            <div>HomePage</div>
            <div>{count}</div>
            <FriendStatus/>
            <RenderTodo todoS={todo} setTodo={setTodo}/>
            <button onClick={() => setCount(count + 1)}>click</button>
            <TabNavigator/>
        </div>
    )
}

export default HomePage;
