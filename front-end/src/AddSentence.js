import "./css/addSentence.css";
import axios from "axios";

// const host = "192.168.2.140:3456"
const host = window.location.host;

function AddSentence() {
    return (
        <>
            <textarea id="newSentence" placeholder="Add your Sentence here"></textarea>
            <div
                onClick={() => {
                    console.log(window.location.host);
                    axios.post(`http://${host}/addSentence`, {
                        sentence: document.getElementById("newSentence").value
                    });
                }}>
                Button
            </div>
        </>
    );
}

export default AddSentence;
