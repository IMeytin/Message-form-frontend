import axios from "axios";

const myURL = "https://message-form-backend.onrender.com";

export const submitAnswer = (formData) => {
    return axios
        .post(`${myURL}/formSubmitted`, formData)
        .then((data) => console.log("data was submitter", data))
        .catch((err) => {
            console.log("there was an Error", err);
            throw err;
        });
};
