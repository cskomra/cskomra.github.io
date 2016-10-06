module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig( {
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }

    })

    grunt.registerTask('default', [
        'cssmin'
        ])

}