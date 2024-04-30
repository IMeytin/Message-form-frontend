import { useState } from "react";
import styles from "./form.module.css"
import { submitAnswer } from "../FormAPI/submitAnswer";
import { useNavigate } from "react-router";

function MessageForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isPending, setIsPending] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)

        submitAnswer(formData)
        .then(data => {
            console.log("Data sumbmitted React", data);
            setIsPending(false);
            navigate("/submitted");

        })
        .catch(err => {
            console.log('react Failed to submit form:', err);
            setIsPending(false);
        })
    }

    return (
        <section className={styles.wrapper}>
            <div>
                <h1>Send us a message</h1>
                <hr />
            </div>
            <form onSubmit={handleSubmit} className={styles.form} >
                <div className={styles.textInputWrapper}>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        placeholder="name"
                        className={styles.textInput}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        placeholder="email"
                        className={styles.textInput}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        cols="50"
                        rows="3"
                        placeholder="message"
                        className={styles.textInput}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className={styles.buttonWrapper}>
                    <button type="submit" className={styles.btn}>{isPending ? "Sending..." : "Submit"}</button>
                </div>
            </form>
        </section>
    );
}

export default MessageForm;
