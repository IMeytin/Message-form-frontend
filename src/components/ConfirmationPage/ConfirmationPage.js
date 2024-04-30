import { useNavigate } from "react-router";
import styles from "./ConfirmationPage.module.css"

function ConfirmationPage() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }


    return ( 
        <div className={styles.wrapper}>
            <h1>Thank You</h1>
            <p>We have received your message!</p>
            <button onClick={handleClick} className={styles.btn}>Go Back</button>
        </div>
     );
}

export default ConfirmationPage;