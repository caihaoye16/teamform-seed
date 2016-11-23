app.filter('IconDisplayMapping',function() {
	return function(role){
		icon = "ban-circle";
		switch(role) {
			case "admin":	icon = "desktop"; break;
			case "leader": 	icon = "star"; break;
			case "member": icon = "star-empty"; break;
			case "tba": icon = "umbrella"; break;
			case "guest": icon = "user"; break;
		}
		return icon;
	}
})
