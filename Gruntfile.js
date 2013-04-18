/*global module:false*/
module.exports = function(grunt) {
  // adds tasks to grunt for compiling angular templates
  grunt.loadNpmTasks("grunt-angular-templates");
  require('lineman').config.grunt.run(grunt);
};
