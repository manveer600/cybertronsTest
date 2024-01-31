import { useNavigate } from "react-router-dom";
// import { isEmailValid, isPhoneNumberValid } from "../helpers/regrexMatcher";
import { useState } from "react";
// import {useHistory} from 'react-router-dom'
// import toast from "react-hot-toast";
function Signup(){
    // const history = useHistory();
    const navigate = useNavigate();
    const[signupData, setsignupData] = useState({
        fullName:"",
        email:"",
        phoneNumber:"",
    })

function handleUserInput(e){
    const {name, value} = e.target;
    console.log(name,value);
    setsignupData({
        ...signupData,
        [name]:value
    })
}






function checkData(){
    if(!signupData.email || !signupData.password || !signupData.phoneNumber){
        toast.error('Please fill all the details');
        return ;
    }

    if(signupData.fullName.length < 4){
        toast.error("Name should be atleast 4 characters long");
        return ;
    }
    

     // checking valid email id
    if(!isEmailValid(signupData.email)){
        toast.error('Invalid Email Id');
        return;
    }


if(!isPhoneNumberValid(signupData.phoneNumber)){
    return toast.error("Phone number must be of 10 digits");
}

}

function handleNextClick(){
    if(checkData()){
        navigate('/preferences', {state:signupData})
    }
}


    return(
            <div className="border w-screen h-screen bg-gray-800 flex items-center justify-center sm:h-[90vh]">
                <form noValidate className=" mt-14 flex flex-col  justify-center gap-3 space-y-2 rounded-lg p-4 text-white w-[250px] sm:w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold ">Registration Page</h1>                 


                     {/* Name */}       
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Full Name</label>
                        <input type="fullName" required name="fullName" id="fullName" placeholder="Enter your Full Name" className="px-2 py-1 bg-transparent border" onChange={handleUserInput} value={signupData.fullName} />
                    </div>


                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold w-full">Email</label>
                        <input type="email" required name="email" id="email" placeholder="abc@gmail.com" className="px-2 py-1 bg-transparent border" onChange={handleUserInput} value={signupData.email} />
                    </div>


                    {/* phone number */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phoneNumber" className="font-semibold">Ph:no</label>
                        <input type="phoneNumber" required name="phoneNumber" id="phoneNumber" placeholder="Enter your PhoneNumber" className="px-2 py-1 bg-transparent border" onChange={handleUserInput} value={signupData.phoneNumber} />
                    </div>


                    {/* Button To Create an Account */}
                     <button onClick={handleNextClick} type="submit" className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300  text-lg cursor-pointer rounded-lg py-2 font-semibold mt-2">Next</button>
                     


                </form>
            </div>
    )
}

export default Signup;