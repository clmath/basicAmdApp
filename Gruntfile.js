"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        amdFiles: ["myapp/src", "mypackage/foo", "mypackage/bar"],
        allFiles: ["Gruntfile.js", "{myapp,mypackage}/*.js", "start*.js"],

        // Build configuration.
        modulesList: "<%= amdFiles %>",
        out: "dist/",
        uglify: {
            defaultOptions: {
                options: {
                    sourceMap: "dist/source-map.js",
                    sourceMapRoot: "../",
                    sourceMappingURL: "./source-map.js"
                }
            }
        },

        // Code QA
        jshint: {
            all: "<%= allFiles %>",
            options: {
                jshintrc: ".jshintrc",
            },
        },
        jsbeautifier: {
            files: "<%= allFiles %>",
            options: {
                config: ".jshintrc",
                js: {
                    jslintHappy: true,
                }
            }
        }

    });

    // Load the plugin that provides the "dojo" task.
    grunt.loadNpmTasks("grunt-dojo-build");

    grunt.loadNpmTasks("grunt-contrib-uglify");


    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jsbeautifier");
    // Default task(s).
    grunt.registerTask("default", ["dojo_build"]);
    grunt.registerTask("dojo_uglify", ["depsScan", "preUglify", "uglify"]);
    grunt.registerTask("codeQA", ["jsbeautifier", "jshint"]);


};
