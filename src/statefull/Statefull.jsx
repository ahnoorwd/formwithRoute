import { useState } from "react";

const Statefull = () => {
    const [name,setName]=useState(null);
    const [password,setpassword]=useState(null)
    const  [error,seterror]=useState();

    const handleSubmit = e=>{
        e.preventDefault();
        
        console.log('submitted button is pessesd')
        if(password.length<6){
            seterror('password should be 8 charactores ')
        }
        else{
            seterror('')  ;
            console.log(name,password)
        }
    }
    const changeEmailhandle = e =>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const changepasswordEhandle = e =>{
        console.log(e.target.value);
        setpassword(e.target.value);
    }
    return (
        <div>
           <div>
           <form  onSubmit={handleSubmit}>
            
            <input 
            onChange={changeEmailhandle}
            className="bg-gray-200 p-1 text-black" type="text"  required name="name" />
            <br />
            <input  
            onChange={changepasswordEhandle}
            className=" mt-2 bg-gray-200 p-1 text-black" type="password" required  name="email" />
            <br />
            <input className="border mt-2 p-1"  type="submit" value="submit" />
            
            
            {
                error && <p className="text-red-500">There is wrong here presss the pasword again </p>
            }


            </form> 
        </div>  
        </div>
    );
};

export default Statefull;