import './footer.scss'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLeft">
                <div className="policies">
                    <span>Refund Policy</span>
                    <span>Privacy Policy</span>
                    <span>Shipping Policy</span>
                    <span>Terms of Service</span>
                </div>
                <div  className="subs">
                <TextField className="Email" 
                id="outlined-basic" 
                 label="Email" 
                 variant="outlined"  />

                <Button variant="contained" 
                className="btn"type="submit" 
                endIcon={<ArrowRightAltIcon/>}>
                subscribe
                </Button>

                </div>
            </div>
            <div className="footerRight">

            <div className="socials">
                <span> <InstagramIcon className="icons" /></span>
               <span> <FacebookIcon className="icons" /></span>
               <span> <TwitterIcon className="icons" /> </span>

            </div>
            </div>
            
        </div>
    )
}
