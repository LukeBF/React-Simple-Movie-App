import React from 'react'

const AddMovieForm = () => {
    return (
        <section className="">
            <form>
                <div className="form-control-container">

                    <label htmlFor="title"> Title</label>

                    <input className="form-control" type="text" id="title"  />
                    <span className="error"></span>

                </div>

                <div className="form-control-container">
                    
                    <label htmlFor="description"> Description</label>
                    <textarea className="form-control" id="description" ></textarea>

                    <span className="error"></span>
                
                </div>
            
                <div className="form-control-container">
                    <button  className="btn btn-primary" type="button">Save movie</button>
                </div>  
            </form>
        </section>
    )
}

export default AddMovieForm
