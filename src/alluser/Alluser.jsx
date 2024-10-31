import { useRef } from "react";
import {useEffect} from "react";


const Alluser = () => {

    const nameref = useRef(null);
    const emailref = useRef(null);

    useEffect(()=>{
        nameref.current.focus();
        

    },[])
    
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(nameref.current.value);
        console.log(emailref.current.value);

    
      
    }
    return (
        <div>
             <form  onSubmit={handleSubmit}>
            
            <input 
            ref={nameref}
            className="bg-gray-200 p-1 text-black" type="text" placeholder="type your name" name="name" />
            <br />
            <input   
            ref={emailref}
            className=" mt-2 bg-gray-200 p-1 text-black" type="email" placeholder="password" name="email" />
            <br />
            <input className="border mt-2 p-1"  type="submit" value="submit" />
            
            </form> 
        </div>
    );
};

export default Alluser;