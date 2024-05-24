import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Notify() {
  return (
    <div>
      <ToastContainer
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}