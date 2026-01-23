import { useState } from "react";


// yahan par humna five state value li hain jis ki intial value 0 hai matlab btn ki initial value 0 hai
const Assignment = () => {
  const [values, setValues] = useState([0, 0, 0, 0, 0]);

/* yahan function chal raha onClick pa function name handleClick hai is na aik parameter liya hai
 index ka phir hum aik varible bana rahe hain us mai value spread kar rahe hain phir hum is mai 
 variable name ka saat index ko target kar ka upadatedValues kar rahe hain matlab 1 hogi values
 yahan par  React ko pata chal gaya ke state change hui Component dobara render hota hai UI 
 automatically update ho jata hai */
  const handleClick = (index : number) => {
    const updatedValues = [...values];
    updatedValues[index] = updatedValues[index] + 1;
    setValues(updatedValues);
  };


/* yahan .map loop hai hum 5 button create kar rahe hain is sa item hamari current counter value hai 
   index btn ki position hai key={index} react ko pata chal jaye kaunsa element unique hai hai re-render ka liye
   */
  return (
    <div>
      {values.map((item : number, index : number) => (
        <button key={index} onClick={() => handleClick(index)}style={{ margin: "10px", padding: "10px" }}> Button {index + 1}: {item}</button> ))}
    </div>
  );
};

export default Assignment;
