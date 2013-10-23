var requirejs = require("requirejs");
requirejs.config({

	baseUrl:".",
	packages:[
	{
		name:"myapp",
		location:"./dist"
	},
	{
		name:"mypackage",
		location:"./mypackage"
	}],
	
	deps: ["myapp/src"],
	
	nodeRequire: require

});



