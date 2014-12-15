  (function($,W,D)
  {
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {

      setupFormValidation: function()
      {

        $("#register-form").validate({
	    rules: {
	        firstname: "required",
		lastname: "required",
		email: {
		    required: true,
		    email: true
		},
		password: {
		    required: true,
		    minlength: 8
		},
		agree: "required"
	},
	messages: {
	    firstname: "Enter your first name",
	    lastname: "Enter your last name",
	    password: {
	    	required: "Provide a password",
		minlength: "Password must be at least 8 characters"
	    },
	    email: "Enter a valid email address",
	    agree: "Accept our policy"
	},
	submitHandler: function(form){
	    form.submit();
	}
     });
    }
  }

  $(D).ready(function($){
      JQUERY4U.UTIL.setupFormValidation();
  });
})(jQuery, window, document);