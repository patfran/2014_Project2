(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
		setupFormValidation: function()
		{
			$("#register-form").validate({
				rules: {
					subject: "required",
					message: "required",
					email: {
						required: true,
						email: true
					},
					agree: "required"
				},
				messages: {
					subject: "Please enter the subject",
					message: "Please enter a message",
					email: "Please enter a valid email address",
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