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
		preUglify: {
			default_options: {}
		},
		out: "dist/",
		uglify: {
			options: {
				sourceMap: 'dist/source-map.js',
				sourceMapRoot: '../',
				sourceMappingURL: './source-map.js'
				
			},
			default_options: {}
		}
		
	});

  // Load the plugin that provides the "dojo" task.
  grunt.loadNpmTasks('grunt-dojo-build');
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  		
  // Default task(s).
  grunt.registerTask('default', ['dojo_build']);
  grunt.registerTask('dojo_uglify', ['depsScan', 'preUglify', 'uglify']);
  
	  
};