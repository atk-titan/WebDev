import { useState , useMemo} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useRecoilValue } from 'recoil';
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalMsgSelector } from './Store/Atoms/atoms';

function App() {

  const notification = useRecoilValue(notificationAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messaging = useRecoilValue(messagingAtom);
  const network = useRecoilValue(networkAtom);
  const totalMsg = useRecoilValue(totalMsgSelector);

  // const totalMsg = useMemo(()=>{
  //   return notification+jobs+messaging+network;
  // },[notification,jobs,messaging,network]);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({network>99?"99+":network})</button>
      <button>Jobs ({jobs>99?"99+":jobs})</button>
      <button>messaging ({messaging>99?"99+":messaging})</button>
      <button>Notifications ({notification>99?"99+":notification})</button>
      
      <button>Me ({totalMsg})</button>
    </>
  );
}

export default App;