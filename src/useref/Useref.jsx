
const Useref = () => {

    const nameRef = Useref(null)
    const passwordRef = Useref(null)
    


    const handleSubmit = e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);
       
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
            
            <input ref={nameRef} className="bg-gray-200 p-1 text-black" type="text" name="name" />
            <br />
            <input  ref={passwordRef}   className=" mt-2 bg-gray-200 p-1 text-black" type="password" name="password" />
            <br />
            <input className="border mt-2 p-1"  type="submit" value="submit" />
            
            </form>  
        </div>
    );
};

export default Useref;