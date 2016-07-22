window.onload = function() {
	if(window.applicationCache){
		console.log('support html5'); // 支持
	}else{
		console.log('nonsupport html5'); // 不支持
	}
}