import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
//import About from './components/About'
import React, {useState} from 'react'
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('type');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
     setAlert(type);
    },1500 );
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark') ;
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode ('light') ;
       document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    
    <Navbar tittle="Textutills"  aboutText="About Textutills" mode={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>

     <div className="container my-3">

     <TextForm showAlert={showAlert}heading="Enter the text analyze below" mode={mode}/>

    {/*<About/>*/}

     </div>
    
    </>
  );
}

export default App;
