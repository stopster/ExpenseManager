module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   build: {
    //     src: 'timer.js',
    //     dest: 'timer.min.js'
    //   }
    // },

    less : {
        development : {
            options: {
               paths: ["style/less"]
            },
            files: {
                "style/main.css": "style/less/main.less"
            }
        }
    },

    watch : {
        // scripts: {
        //     files: ['timer.js'],
        //     tasks: ['less'],
        //     options: {
        //         nospawn: true,
        //     }
        // },

        styles : {
            files: ['**/*.less'],
            tasks : ['less']
        }
    },



  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};