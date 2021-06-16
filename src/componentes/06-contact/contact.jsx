import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './contact.scss';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Muy largo!')
    .required('Campo obligatorio'),
  email: Yup.string()
    .email('Mail invalido')
    .required('Campo obligatorio'),
  message: Yup.string()
    .min(2, 'Muy corto')
    .max(200, 'Muy largo!')
    .required('Campo obligatorio'),
});

export default function Contact(){


    function sendEmail(e) {
        e.preventDefault();
        if(e.target.name.value !== "" && e.target.email.value !== "" && e.target.message.value){
            emailjs.sendForm("config.service", "config.template", e.target, "config.key")
            .then((result) => {
                e.target.reset()
                console.log(result.text);
                Swal.fire(
                    'Send Mail!',
                    'I will be answering you soon ;)',
                    'success'
                    )
                }, (error) => {
                    console.log(error.text);
                });
        }
      }


    return(
        <div id="contact" className="container mt-5 pt-5">
            <div className="d-flex justify-content-center">
                <h1 className="texto-contact">Contacto</h1>
            </div>

            <div className="row mt-4">
                <div className="col-12 col-lg-6 px-4 d-flex flex-column justify-content-center align-items-center mb-5 cont-buzon">
                    <h3 className="text-center">Si tienes una consulta espefica poder enviarla completando el siguiente formulario:</h3>
                    <div>
                        <img src={"/assests/svg/inbox.svg"} alt="" width="340px"/>
                        <img className="blobfondo" src={"/assests/svg/blobr.svg"} alt=""/>
                    </div>
                </div>

                <div className="col-12 col-lg-6 px-4 pt-lg-5">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        
                        console.log(values);
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form onSubmit={sendEmail} className="d-flex flex-column justify-content-center">
                            <Field className="inputFormik" name="name" placeholder="Nombre..." />
                            {errors.name? (
                                <div className="alerta"></div>
                            ) : <div className="noalert"></div>}
                            <Field className="inputFormik" name="email" type="email" placeholder="Mail..." />
                            {errors.email ? <><div className="alertamail"></div><p className="alertp">Debe ingresar un mail valido</p></> : <div className="noalert"></div>}
                            <Field className="inputFormik" style={{resize: "none"}} name="message" component="textarea" placeholder="Ingrese comentario..." />
                            {errors.message ? <div className="alerta"></div> : <div className="noalert"></div>}
                            <button className="btn-submit mt-2" type="submit">Enviar</button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}