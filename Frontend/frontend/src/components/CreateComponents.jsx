import React,{useState} from "react";
function CreateComponent(){

    const [title,setTitle]=useState('');
    const [data,setData]=useState('');
    const [image,setImage]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=async(event)=>{

    }



    return(
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="title" placeholder="Enter Post Title" onChange={event=>setTitle(event.target.value)} required/>

                <br/><br/>

                <input type="Data" name="Date" onChange={event=>setData(event.target.value)}/>

                <br/><br/>

                <input type="file" name="image" onChange={event=>setImage(event.target.files[0])}/>

                <br/><br/>
               
               <button>Submit</button>




            </form>
            <p>{message}</p>

        </div>
    )

}

export default CreateComponent;
