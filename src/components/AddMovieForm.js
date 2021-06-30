import React from 'react'

import { useState } from 'react'


const AddMovieForm = (props) => {

    const  [title, setTitle] = useState("")

    const  [description, setDescription] = useState("")

    const  [errorTitle, setErrorTitle] = useState("")

    const  [errordescription, setErrorDescription] = useState("")

    const validateForm = (props) => {

        let isValidated = true;
        
        if(title === "")
        {
            setErrorTitle("You must enter a title")
            isValidated = false;
        }
        else
        {
            setErrorTitle("")
        }

        if(description === "")
        {
            setErrorDescription("You must enter a description")
            isValidated = false;
        }
        else
        {
            setErrorDescription("")           
        }

        return isValidated;
    }
    

    return (
        <section className={props.addFormState ? "" : "hide"}>
            <form>
                <div className="form-control-container">

                    <label htmlFor="title"> Title</label>

                    <input className="form-control" type="text" id="title" value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }}/>
                    <span className="error">{errorTitle}</span>

                </div>

                <div className="form-control-container">
                    
                    <label htmlFor="description"> Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e)=>{
                        setDescription(e.target.value)
                    }}></textarea>

                    <span className="error">{errordescription}</span>
                
                </div>
            
                <div className="form-control-container">
                    <button  className="btn btn-primary" type="button" onClick={()=>{
                        if(validateForm())
                        {
                            const newMovie={
                                id:Math.floor(Math.random()*500000) + 1,
                                title,
                                description
                            }
                            props.onAddMovie(newMovie)
                            
                            //clear the title and description after adding
                            setTitle("");
                            setDescription("");
                        }

                    }}>Save movie</button>
                </div>  
            </form>
        </section>
    )
}

export default AddMovieForm
