import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("counter has updated");
    }, [count])

    return (
        <div>
            <img src="https://bit.ly/3v3gSeh" width="400px" />
            <p>Likes: {count}</p>
            <button onClick={() => setCount(count + 1)}>❤️</button>
        </div>
    )
}

export default Counter;