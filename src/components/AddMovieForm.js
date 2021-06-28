import React from 'react'

const AddMovieForm = () => {
    return (
        <section class="">
            <form>
                <div class="form-control-container">

                    <label for="title"> Title</label>

                    <input class="form-control" type="text" id="title"  />
                    <span class="error"></span>

                </div>

                <div class="form-control-container">
                    
                    <label for="description"> Description</label>
                    <textarea class="form-control" id="description" ></textarea>

                    <span class="error"></span>
                
                </div>
            
                <div class="form-control-container">
                    <button  class="btn btn-primary" type="button">Save movie</button>
                </div>  
            </form>
        </section>
    )
}

export default AddMovieForm
