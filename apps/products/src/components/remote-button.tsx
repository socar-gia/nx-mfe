import { useState } from "react"
import styles from './remote-button.module.css';

export default function Button() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles["remote-button_container"]}>
            <p>{count}</p>
            <button type="button" onClick={() => setCount(prev => prev += 1)}>Remote Button</button>
        </div>)
}