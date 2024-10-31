

const Singleform = () => {
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('form is submited')
    }
    return (
        <div>
           <form  onSubmit={handleSubmit}>
            
            <input className="bg-gray-200 p-1 text-black" type="text" name="name" />
            <br />
            <input   className=" mt-2 bg-gray-200 p-1 text-black" type="email" name="email" />
            <br />
            <input className="border mt-2 p-1"  type="submit" value="submit" />
            
            </form> 
        </div>
    );
};

export default Singleform;