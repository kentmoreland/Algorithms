module.exports = (grunt) => {
  grunt.initConfig({
    jshint: {
      files: ['*.js', 'test/*.js', 'src/*.js'],
      options: {
        esversion: 6,
        expr: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};