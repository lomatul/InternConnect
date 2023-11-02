import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success('Here is your toast.');

const ToastTest = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
    
    </div>
  );
};

export default ToastTest 