import React from 'react';
import './App.css';
import {IconContext} from 'react-icons'
import { FaReact } from 'react-icons/fa';
import {MdAlarm} from 'react-icons/md'
import Notification from './components/Notification';
import CustomModal from './components/Modal';
import ToolTip from './components/ToolTip';
import CountUpComponent from './components/CountUp';
import IdleTimerContainer from './components/IdleTimer';
import Color from './components/Color';
import CreditCards from './components/CreditCards';
import Player from './components/Player';
import Loading from './components/Loading';
import LineChart from './components/charts/LineChart';
import BarChart from './components/charts/BarChart';
import DoughnutChart from './components/charts/DoughnutChart';


function App() {

  return (
    <div className="App">
      {/* <IconContext.Provider value={{color:"red", size:"5rem"}}>
        <FaReact/>
        <MdAlarm color="black"/>
      </IconContext.Provider> */}

       {/* <Notification/> */}

       {/* <CustomModal/> */}

       {/* <ToolTip/> */}

       {/* <CountUpComponent/> */}

       {/* <IdleTimerContainer/> */}

       {/* <Color/> */}

       {/* <CreditCards/> */}

       {/* <Player/> */}

       {/* <Loading/> */}

       <LineChart/>
       <BarChart/>
       <DoughnutChart/>

    </div>
  );
}

export default App;
