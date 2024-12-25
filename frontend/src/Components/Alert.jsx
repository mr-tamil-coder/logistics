import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Alert(status, msg) {
  console.log("login "+status, msg);
  const toastTypes ={
    success:toast.success,
    error:toast.error,
    info:toast.info,
    warning:toast.warning
  }
  const toastMethod = toastTypes[status];
  if(toastMethod){
    toastMethod(msg,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
  }
 
}

export default Alert;
