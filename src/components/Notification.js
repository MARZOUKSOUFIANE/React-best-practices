import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast = ({ closeToast }) => (
  <div>
    Lorem ipsum dolor
    <button onClick={closeToast}>Close</button>
  </div>
)

class Notification extends Component {
  notify = () => {
    toast.success("Wow so easy !",{
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      toast.info("Wow so easy !",{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        toast.error(<CustomToast/> ,{
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          toast.warn("Wow so easy !",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
  }

  render(){
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}

export default Notification