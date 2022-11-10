$(document).ready(function() {
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4  
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
      
        },
        // if fname required not give in rules, use this method
        messages:{
            fname:{
                required:"Enter first name"
            }
        }
    })
})