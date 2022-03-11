import React from 'react'
import "bootstrap/dist/css/bootstrap.css";



function Profil_component(props) {

    return (
    <div className='container'>
        <div style={{color: "red", display:"flex"}} >
            <div>
                <img width={120} height={150} src={"image.jpg"} alt="image"/>
            </div>

            <div class="row" style={{display: "flex", flexDirection:"column", marginLeft:"1rem"}}>
                <div class="col" style={{color: "red"}}>
                    <label htmlFor="">Nom:</label>
                    <input type="textArea" class="form-control" readOnly value={props.Nom} />
                </div>

                <div class="col">
                    <label htmlFor="">Prenom</label>
                    <input type="text" class="form-control" readOnly value={props.Prenom}/>
                </div>

                <div class="col">
                    <label htmlFor="">Profession</label>
                    <input type="textAria" class="form-control" readOnly value={props.Profession}/>
                </div>

                <div class="form-floating">
                    Bio
                    <textarea class="form-control" readOnly value={props.Bio} >Bio</textarea>
                    <label for="floatingTextarea2"></label>
                </div>

                
                
            </div>
        </div>
    </div>
    )
}



export default Profil_component