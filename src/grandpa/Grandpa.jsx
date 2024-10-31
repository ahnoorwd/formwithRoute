import Aunt from "../aunt/Aunt";
import Dady from "../dady/Dady";
import Uncle from "../uncle/Uncle";
import './Drandpa.css'

const Grandpa = () => {
    return (
        
        <div className="grandpa">
            <h2 className="text-purple-600 font-bold text-4xl mt-2">GRANDPA.COM</h2>
         <section className="flex text-center justify-center mt-4">
         <Dady></Dady> 
         <Uncle></Uncle>
         <Aunt></Aunt>     
        </section> 
        </div>
    );
};

export default Grandpa;