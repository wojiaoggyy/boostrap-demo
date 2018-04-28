//elementui
//控件初始化
Vue.config.silent = true;
var vm = new Vue({
	el: '#date_show',
	data: function(){
	  	return {
			pickerOptions01:{
				disabledDate : function(time) {
		            return time.getTime() > Date.now()
	          	},
	          	firstDayOfWeek:1
			},
			pickerOptions02:{
				disabledDate : function(time) {
		            return time.getTime() > Date.now()
	          	},
	          	firstDayOfWeek:1
			},
			pickerOptions03:{
				disabledDate : function(time) {
		            return time.getTime() > Date.now()
	          	},
	          	firstDayOfWeek:1
			},
			pickerOptions04:{
			  	disabledDate : function(time) {
		            return time.getTime() > Date.now()
	          	},
	          	firstDayOfWeek:1
	          
			},
			pickerOptions05: {
			  	disabledDate : function(time) {
			  		//一个月内
	            	//return time.getTime() > Date.now() || time.getTime() < Date.now() - 3600 * 1000 * 24 * 30;
	            	
	            	//今年内
	            	var oneyear = new Date();
	            	oneyear.setFullYear(new Date().getFullYear()-1);
	            	oneyear.setMonth(11);
	            	oneyear.setDate(31);
	            	return time.getTime() > Date.now() || time.getTime() < oneyear;
	          	},
	          	firstDayOfWeek:1
			},
			value1: Date.now(),
			value2: Date.now(),
			value3: Date.now(),
			value4: '',
			value5: Date.now() - 3600 * 1000 * 24 * 30
	  	}
	}
})