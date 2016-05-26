module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    compass: {                 
      dist: {                   
        options: {              
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'development'
        }
      }
    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      no_dest: {
        src: 'css/styles.css'
      },
    },  
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css',
        src: ['styles.css'],
        dest: 'prod/css',
        //ext: '.min.css'
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['']
        }
      },
      my_target: {
        files: {
          'web_build/js/min/script.min.js': ['js/plugins.js', 'js/main.js']
        }
      }
    },
    watch: {
      css: {
        files: ['sass/*.scss', 'svg/*.svg'],
        tasks: ['default'],
        options: {
          livereload: true,
        },
      },
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['bower_components/**', 'css/**', 'img/**', 'js/**', 'views/**', 'index.html'], dest: 'prod/', filter: 'isFile'},
        ]
      }
    },
    svgstore: {
      options: {
        cleanup: true
      },
      default: {
        files: {
          'img/sprite.svg': ['svg/*.svg'],
        },
      },
    },      
    clean: ['prod/**']
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svgstore');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'autoprefixer', 'svgstore']);

  //Build
  grunt.registerTask('build', ['clean', 'copy']);
};