module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
        options : {
            livereload: true
        },
        styles : {
            files: ['**/*.less'],
            tasks : ['less']
        }
    },

    connect : {
        server: {
            options: {
                port: 9090
            }
        }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};

