

$(document).ready(function(){
    $('#myform').validate({
        rules:{
            pass:{
                required:true,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#])[A-Za-z\d@$#]{7,15}$/,
            },
            mbl:{
                required:true,
                pattern:/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
            },
            mail:{
                required:true,
                email:true,
                pattern:/^([a-zA-Z0-9_])+@cgvak.com$/,
            },
        },
        messages:{
            pass:{
                required:"Enter your Name",
                pattern:"Enter the valid Name",
            },
            mbl:{
                required:"Enter your Phone number",
                pattern:"Enter the valid number",
            },
            mail:{
                required:"enter your email",
                email:"enter valid email",
            },
        },
    });
});
