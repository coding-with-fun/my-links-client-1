import { toast } from "react-toastify";

const Alert = ({ message }) => {
    toast.error(message, {
        position: "top-center",
        theme: "colored",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

export default Alert;
