import CommentArea from './CommentArea';
import React, { useState, useContext } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBRipple,
    MDBCardText,
    MDBBtn,
    MDBCol
     
  } from 'mdb-react-ui-kit';
  import { ThemeContext } from '../modules/Contexts';

export default  function SingleBook({film } ) {
const [selected, setSelected] = useState(false)
let [theme] = useContext(ThemeContext); // richiamo il paramento theme senza setTheme dal context senza passare più le props in  quanto la funzione
// è stata già creata nella navbar.jsx

    return (
        <MDBCol md='4' >
            <MDBCard background={theme} className='mt-4 misura-card' style={ selected ? {border: '3px solid red'} : {border:'none'}} onClick={() => setSelected(!selected)} >
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={film.img} fluid alt={film.title} />
                <b>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </b>    
                </MDBRipple>
                <MDBCardBody >
                    <MDBCardTitle>{film.title}</MDBCardTitle>
                    <MDBCardText>
                    Categoria {film.category}
                    </MDBCardText>
                    <MDBBtn href='#'>€ {film.price}</MDBBtn>
                </MDBCardBody>
                
            </MDBCard>
            {selected === true && <CommentArea film={film} />}
        </MDBCol>   
    
    )
}