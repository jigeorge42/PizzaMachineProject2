//Start New Account Validation
$(document).on('click','#btnNewAccount',function(){
    let stryMyUsername = $('#txtUsername').val();
    let strMyPassword = $('#txtPassword').val();
    let blnError = false;
    let strErrorMessage = '';

    if($('#txtUsername').val() == false)
    {
        blnError = true;
        strErrorMessage += '<p>Email/username is blank</p>';
    }
    else if(validUsernameFormat($('#txtUsername').val()) == false){
        blnError = true;
        strErrorMessage +='<p>Email/Username is not valid</p>';
    }
    
    if($('#txtPassword').val()== false)
    {
        blnError = true;
        strErrorMessage += '<p>Password is blank</p>';
    }
    else if(validPasswordFormat($('#txtPassword').val())== false)
    {
        blnError = true;
        strErrorMessage +='<p>Password is not formatted right</p>';
    }

    if(blnError == true)
    {
        Swal.fire({
            icon: 'error',
            title: 'Missing Data...',
            html: strErrorMessage
          })
    }
    
    else{  $.post(/*'https://www.swollenhippo.com/DS3870/Tasks/newAccount.php'*/,{strUsername: stryMyUsername, strPassword: strMyPassword}, function(result){
        let objResult = JSON.parse(result);
        if(objResult.Outcome == 'New User Created'){
            Swal.fire({
                icon: 'success',
                title: 'User Created',
                html: '<p>Your account was successful</p>'

           }).then((result)=>{
                window.location.href = 'login.html';
           })
        } else if(objResult.Outcome == 'User already exists'){
            Swal.fire({
                icon: 'error',
                title: 'User not Created',
                html: '<p>Your account was not successful. User already exists</p>'
           })
        } else {
            Swal.fire({
            icon: 'error',
            title: 'User not Created',
            html: '<p>Please check username and password and try agian</p>'
           })
        }
   })}

   function validUsernameFormat(strUsername){
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let blnMatchesFormat = reg.test(strUsername);
    return blnMatchesFormat;  
    }

    function validPasswordFormat(strPassword){
        let reg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
        return reg.test(strPassword);
    }
  
$(document).on('click','#btnLogin',function(){
    let strMyUsername = $('#txtUsername').val();
    let strMyPassword = $('#txtPassword').val();
    let blnError = false;
    let strErrorMessage = '';

    if($('#txtUsername').val() == false)
    {
        blnError = true;
        strErrorMessage += '<p>Email/username is blank</p>';
    }
    else if(validUsernameFormat($('#txtUsername').val()) == false){
        blnError = true;
        strErrorMessage +='<p>Email/Username is not valid</p>';
    }
    
    if($('#txtPassword').val() == false)
    {
        blnError = true;
        strErrorMessage += '<p>Password is blank</p>';
    }
    else if(validPasswordFormat($('#txtPassword').val())== false)
    {
        blnError = true;
        strErrorMessage +='<p>Password is blank</p>';
    }

    if(blnError == true)
    {
        Swal.fire({
            icon: 'error',
            title: 'Missing Data...',
            html: strErrorMessage
            })
    }
    else{ 
        $.post(/*'https://www.swollenhippo.com/DS3870/Tasks/newSession.php'*/,{strUsername: strMyUsername, strPassword: strMyPassword},function(result){
        let objResult = JSON.parse(result);
        if(objResult.Outcome == 'Login Failed'){
            Swal.fire({
                icon: 'error',
                title: 'Username or Password is Incorrect',
                html: '<p>Verify your username and password and try again</p>'
            })
        } else {
            sessionStorage.setItem(/*'HippoTaskID'*/, objResult.Outcome);
            window.location.href = 'index.html';
        }
    })}

    function validUsernameFormat(strUsername){
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let blnMatchesFormat = reg.test(strUsername);
    return blnMatchesFormat;  
    }

    function validPasswordFormat(strPassword){
        let reg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
        return reg.test(strPassword);
    }
    
})
//End New Account Validation

//Start Login Validation
$(document).on('click','#btnLogin',function(){
    let strMyUsername = $('#txtUsername').val();
    let strMyPassword = $('#txtPassword').val();
    let blnError = false;
    let strErrorMessage = '';

    if($('#txtUsername').val() == false)
    {
        blnError = true;
        strErrorMessage += '<p>Email/username is blank</p>';
    }
    else if(validUsernameFormat($('#txtUsername').val()) == false){
        blnError = true;
        strErrorMessage +='<p>Email/Username is not valid</p>';
    }
    
    if($('#txtPassword').val() == false)
    {
        blnError = true;
        strErrorMessage += '<p>Password is blank</p>';
    }
    else if(validPasswordFormat($('#txtPassword').val())== false)
    {
        blnError = true;
        strErrorMessage +='<p>Password is blank</p>';
    }

    if(blnError == true)
    {
        Swal.fire({
            icon: 'error',
            title: 'Missing Data...',
            html: strErrorMessage
            })
    }
    else{ 
        $.post(/*'https://www.swollenhippo.com/DS3870/Tasks/newSession.php'*/,{strUsername: strMyUsername, strPassword: strMyPassword},function(result){
        let objResult = JSON.parse(result);
        if(objResult.Outcome == 'Login Failed'){
            Swal.fire({
                icon: 'error',
                title: 'Username or Password is Incorrect',
                html: '<p>Verify your username and password and try again</p>'
            })
        } else {
            sessionStorage.setItem(/*'HippoTaskID'*/, objResult.Outcome);
            window.location.href = 'index.html';
        }
    })}

    function validUsernameFormat(strUsername){
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let blnMatchesFormat = reg.test(strUsername);
    return blnMatchesFormat;  
    }

    function validPasswordFormat(strPassword){
        let reg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
        return reg.test(strPassword);
    }
    
})
//End login validation


})