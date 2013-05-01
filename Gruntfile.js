module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        src: 'js/src/*.js',
        dest: 'js/dist/build.min.js'
      }
    },
    watch: {
        scripts: {
            files: ['js/src/*.js'],
            tasks: ['uglify']
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);
};