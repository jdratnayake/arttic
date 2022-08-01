import "./ForgotPasswordOTP.css";



function ForgotPasswordOTP() {
    return(

<div class="d-flex justify-content-center align-items-center frgtPsswrdotp_Container">
    <div class="frgtPsswrdotp_Card py-5 px-3">
        <h5 class="m-0 text-align=center"> Mobile Phone Verification</h5>
        <span class="frgtPsswrdotp_MobileText">Enter the code we just send on your mobile phone <b class="text color:black">+972 44444444</b></span>
        <div class="d-flex flex-row mt-5"><input type="text" class="form-control" autofocus=""/> 
        <input type="text" class="form-control"/>
        <input type="text" class="form-control"/>
        <input type="text" class="form-control"/></div>
        <div class="text-center mt-5"><span class="d-block frgtPsswrdotp_MobileText">Don't receive the code?</span>
        <span class="font-weight-bold text-danger frgtPsswrdotp_cursor">Resend</span></div>
    </div>
</div>


    );

}

export default ForgotPasswordOTP;
       


