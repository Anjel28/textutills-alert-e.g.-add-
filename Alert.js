import React from 'react'

function Alert(Props) {
  //const capitalize =(word)=>{
    //    const lower = word.toLowerCase();
      //  return lower.charAt(0).toupperCase() + lower.slice(1);
    //}
  return (
   
    <div>
     Props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
 <strong>{Props.alert.type}</strong> : {Props.alert.msg}
  
</div>
    </div>
  )
}

export default Alert
