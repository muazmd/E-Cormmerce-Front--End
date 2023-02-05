import { TextField ,Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";
import{ init} from 'emailjs-com';
import emailjs from 'emailjs-com';

import './email.scss'

export const Email = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =(data) => {console.log(data)
    SendEmail(data)}
    
    
    init("user_uzb3j5HRszWn2gJwzUPR4");

    const SendEmail =(data) => {
      emailjs.send("service_sylx4hr","template_rc4wipe",data)
      .then((response) => { console.log(response.status, response.message)})
      .catch((err) => { console.log(err)})
    }
    
    return (
      
        <>
        <div className="linebreak"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <span className="title">Have any problem? Contact us</span>

        <div className="form-info">

      <TextField className="form-input name" id="outlined-basic" {...register("name", {required: true})} label="Name" variant="outlined" />
      {errors.name && <span className="error"> name is required</span>}
      <TextField className="form-input email" id="outlined-basic" {...register("email", {required: true})} label="Email" variant="outlined" />
      {errors.email && <span className="error"> email is required</span>}
            </div>
      <TextField className="form-input" id="outlined-basic" label="Phone Number" {...register("phone", {required: true})} variant="outlined" />
      {errors.phone && <span className="error"> phone is required</span>}
      <TextField className="form-input"  id="outlined-multiline-static" multiline rows={4}
        {...register("message")} variant="outlined" label="Comments"  />
      <Button variant="contained" className="btn"type="submit" endIcon={<SendIcon/>}>
  Send
</Button>

        </form>
        </>
    )
}
