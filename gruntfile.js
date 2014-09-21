'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            scripts: {
                options: {
                    sourceMap: true
                },
                files: {
                    'public/js/app.min.js': ['src/scripts/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};