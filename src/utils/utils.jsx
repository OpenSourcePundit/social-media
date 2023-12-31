import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';

import "./utils.css";
 export const ToastHandler = (type, message) => {
    if (type === 'error') {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'warn') {
      toast.warn(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'success') {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'info') {
      toast.info(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };



export const Loader = () => {
  return (
    <div className='loader'>
      <ThreeDots color={'var(--primary-color)'} />
    </div>
  );
};