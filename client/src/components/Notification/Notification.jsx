import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Notification = () => {
  return (
    <div className="Notification">
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;
