import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Preferences() {
  const previousData = useLocation();
  console.log('data is', previousData.state);
  const data = previousData.state;
  
  const navigate = useNavigate();
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    const updatedList = [...checked];
    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      const index = updatedList.indexOf(event.target.value);
      if (index !== -1) {
        updatedList.splice(index, 1);
      }
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  return (
    <div className="font-serif bg-gray-800 text-white p-10 w-screen text-center h-screen">
      <h3 className="font-bold text-3xl text-yellow-500 underline p-10">You will receive notifications for the below selected items </h3>
      <div className="checkList text-white">
        <div className="title font-bold text-2xl underline">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index} className="p-8 text-2xl">
              <span className="p-4">{item}</span>
              <input onChange={handleCheck} className="mr-2" value={item} type="checkbox" />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => navigate('/result', { state: { checked, data } })} type="submit" className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 text-lg cursor-pointer rounded-lg py-2 font-semibold mt-2">Next</button>
    </div>
  );
}

export default Preferences;
