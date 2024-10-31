
const Reuseable = ({fromtitle, children, handleSubmit, updatebutton='Submit'}) => {
    

    const localhandlesubmit = e => {
       e.preventDefault();
       const data ={
        name: e.target.name.value,
        email:e.target.email.value,
       }
       handleSubmit(data)
    }
    

    return (
        <div>
             <div>
            {
                children
            }
           <form  onSubmit={localhandlesubmit}>
            
            <input className="bg-gray-200 p-1 text-black" type="text" name="name" />
            <br />
            <input   className=" mt-2 bg-gray-200 p-1 text-black" type="email" name="email" />
            <br />
            <input className="border mt-2 p-1"  type="submit" value={updatebutton} />
            
            </form> 
        </div>
        </div>
    );
};

export default Reuseable;