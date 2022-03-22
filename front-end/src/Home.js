import "./css/Home.css";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";

// const host = "192.168.2.140:3456";
const host = window.location.host;

function App() {
    const [sentence, setSentence] = useState(false);
    const [pressedWords, setPressedWords] = useState([]);
    const [checked, setChecked] = useState(false);
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        console.log("update");
        if (!sentence) {
            (async () => {
                let result = await axios.get(`http://${host}/sentence`);
                setSentence(await result.data);
            })();
        }
    });

    function handleClick(id) {
        if (pressedWords.includes(id)) {
            console.log(id);
            pressedWords.splice(pressedWords.indexOf(id), 1);
            forceUpdate();
        } else {
            pressedWords.push(id);
            forceUpdate();
        }
    }
    function check() {
        setChecked(true);
    }

    if (sentence) {
        return (
            <div>
                {sentence.text.map((element, id) => {
                    return (
                        <span
                            key={id}
                            className={
                                (sentence.comma.includes(id) || pressedWords.includes(id)) && checked
                                    ? sentence.comma.includes(id) && pressedWords.includes(id)
                                        ? "green"
                                        : "red"
                                    : ""
                            }
                            onClick={() => handleClick(id)}>
                            {pressedWords.includes(id) ? element + "," : element}
                        </span>
                    );
                })}
                <div className="buttonWrapper">
                    <button onClick={check}>Check</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default App;
