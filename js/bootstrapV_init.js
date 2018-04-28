$(function(){
				
	$("#form_demo").bootstrapValidator({
		live: 'enabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
		fields: {
			username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '用户名长度必须在6到18位之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: '用户名只能包含大写、小写、数字和下划线'
                    }
                }
			},
			password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次密码输入不一致'
                    },
                    different: {
                        field: 'username',
                        message: '密码不能和用户名一样'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码输入不一致'
                    },
                    different: {
                        field: 'username',
                        message: '密码不能和用户名一样'
                    }
                }
            },
            email: {
            	validators: {
            		notEmpty: {
            			message: '邮箱不能为空'
            		},
                    regexp: {
                        regexp: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                        message: '您输入的邮箱格式不正确'
                    }            		
            	}
            },
            url: {
            	validators: {
            		notEmpty: {
            			message: '网址不能为空'
            		}
            	}
            },
            phone: {
            	validators: {
            		notEmpty: {
            			message: '电话不能为空'
            		},
                    regexp: {
                        regexp: /^1(3|4|5|7|8)\d{9}$/,
                        message: '您输入的手机号码格式不正确'
                    }
            	}
            }
		},
		submitHandler: function(validator, form, submitButton) {
			$('#form_demo').bootstrapValidator('disableSubmitButtons', true);
		}
	})
	
})