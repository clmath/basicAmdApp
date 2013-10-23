module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		// Configuration to be run (and then tested).
		depsScan: {
			options: {modulesList: ["myapp/src", "mypackage/foo", "mypackage/bar"]},
			default_options: {}
		},
		concatAmd: {
			default_options: {}
		},
		out: "dist/"
		
	});

  // Load the plugin that provides the "dojo" task.
  grunt.loadNpmTasks('grunt-dojo-build');

  // Default task(s).
  grunt.registerTask('default', ['dojo_build']);
	  
};