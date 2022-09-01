const generateOtp = () => {
  const numList = [
    Math.floor(Math.random() * 10 + 1),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  return (
    numList[0] * 10000 +
    numList[1] * 1000 +
    numList[2] * 100 +
    numList[3] * 10 +
    numList[4]
  ).toString();
};

const otpEmail = (name, otp) => {
  return `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="http://localhost:3000/login" style="cursor: pointer;font-size:1.4em;color: #8427e2;text-decoration:none;font-weight:600">ARTTIC</a>
    </div>
    <p style="font-size:1.1em">Hi ${name},</p>
    <p>Thank you for choosing ARTTIC. Use the following OTP to complete your Password Reset procedures. </p>
    <h2 style="background: #8427e2;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>ARTTIC Inc</p>
      <p>UCSC Building Complex</p>
      <p>35 Reid Ave</p>
      <p>Colombo 00700</p>
    </div>
  </div>
</div>`;
};

const emailValidityOtpEmail = (name, otp) => {
  return `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="http://localhost:3000/login" style="cursor: pointer;font-size:1.4em;color: #8427e2;text-decoration:none;font-weight:600">ARTTIC</a>
    </div>
    <p style="font-size:1.1em">Hi ${name},</p>
    <p>Thank you for choosing ARTTIC. Use the following OTP to complete your Email Verification procedures. </p>
    <h2 style="background: #8427e2;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>ARTTIC Inc</p>
      <p>UCSC Building Complex</p>
      <p>35 Reid Ave</p>
      <p>Colombo 00700</p>
    </div>
  </div>
</div>`;
};

module.exports = { generateOtp, otpEmail, emailValidityOtpEmail };
