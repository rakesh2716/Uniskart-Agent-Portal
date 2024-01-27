<body>
<div id="internetStatusPopup" class="modalcustom">
  <div class="modalcustom-content">
    <div class="modalcustom-header">
      <div class="close" onclick="closePopup()">
        <img src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/closeIc.svg"/>
      </div>
      <img src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/noInternet.svg"/>
      <h4 class="modalcustom-title">No internet connection</h4>
    </div>
    <div class="modalcustom-body">
      <p>Please make sure your Wi-Fi or cellular data is turned on and try again.</p>
    </div>
    <div class="modalcustom-footer">
      <button type="button" class="btn btn-default" onclick="try_againPopup()">Try again</button>
    </div>
  </div>
</div>
<div class="content-wrap logonbox-container">
  <div class="body-content">
    <div class="logoNew">
      <a class="navbar-brand">
        <img id="logoCurrenthdm" src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/KcNewLogo.svg" class="img-responsive mobile-logo"/>
      </a>
    </div>
    <div class="container">
      <div class="login-container">
        <div class="row">
          <div class="col-sm-12 login-box">
            <div class="text-left login-text">
            <form>
              <div class="login-box-bg">
                <div id="login-box">
                  <div>
                    <h2 id="logintext">Login</h2>
                    <h2 id="forgotPasswordtext" style="display: none;">Forgot Password</h2>
                    <p id="logindescription">Login with provided email address </p>
                    <p id="forgotPassworddescription" style="display: none;">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                  </div>
                  <div id="diverrorokmessages">
                  <div id="error-message" class="alert alert-danger" style="display: block;"></div>
                  <div id="ok-message" class="alert alert-success"></div>
                  </div>
                  <div id="forminputcontrol">
                    <div class="form-group">
                      <label for="name">Email Address*</label>
                      <div class="input-container">
                        <input type="email" class="form-control input-field" id="email" placeholder="Example@gmail.com"/>
                        <img class="icon" src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/mail.png" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password" id="lblPass">Password*</label>
                      <div class="forgt-pass">
                        <span id="change_password">Forgot Password?</span>
                      </div>
                      <div class="input-container" id="divpassword">
                        <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                        <img class="icon eyeicon" src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/eye-off.png" onclick="handle()" id="eyeicon"/>
                      </div>
                    </div>
                  </div>
                  <button type="submit" id="btn-login" class="btn btn-primary btn-block" disabled> Login <img class="iconArrow" src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/arrow-right.png"/>
                  </button>
                  <button type="button" id="btn-Forgot-password" class="btn btn-default btn-danger btn-block"> Send Reset Instructions </button>
                  <div class="becomeaPartner">Don't have an account? <a href="https://www.studies-overseas.com/partners/study-abroad-association" target="_blank">Become a partner</a>
                  </div>                     
                </div>

                <div id="forgotConfirm" class="forgotConfirm" style="display: none;">
                  <h2>Forgot Password</h2>
                  <div class="emailaddress">We just sent an email to <br />
                    <span id="useremailId"></span>
                  </div>
                  <p>Check your email for a password change email and click on the link in email to change your password.</p>
                  <div style="display: block;">
                    <button type="button" id="btn-back" class="btn btn-default btn-block" style="position: relative;display:none;">
                      <img class="iconArrowBack" src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/arrow-left.png"/> Back to login </button>
                    </div>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   


     
  </div>
</div>
{/* <img src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/helpIcon.png" class="helpIcon"> */}
{/* </div> */}
</body>