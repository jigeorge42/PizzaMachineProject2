$(document).on('click','#btnOrdersLogin',function(){
    Swal.fire({
        title: 'Login',
        html: '<input placeholder="YourEmail@Host.com" id="txtOrderLoginUsername" class="form-control" type="email"><input id="txtOrderLoginPassword" class="form-control" type="password">'
    })
})