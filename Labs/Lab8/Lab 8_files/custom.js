"use strict";

$(document).ready(function () {
    // Are we on the Course Settings page?
    if ( window.location.pathname.match(/^\/courses\/\d+\/settings/) ) {
        // Are we an administrator?
        if ( ENV.current_user_roles.indexOf('admin') < 0 ) {
            $('label[for=course_start_at]').parent().parent().hide();
            $('label[for=course_conclude_at]').parent().parent().hide();
            //$('label[for=course_is_public]').parent().parent().hide();
            //$('label[for=course_is_public_to_auth_users]').parent().parent().hide();
            //$('label[for=course_indexed]').parent().parent().hide();
			$('select[id=course_course_visibility]').parent().hide();
        }
    }
});
