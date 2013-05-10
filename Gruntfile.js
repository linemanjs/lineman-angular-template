/*global module:false*/
module.exports = function(grunt) {
  // adds tasks to grunt for compiling angular templates
  grunt.loadNpmTasks("grunt-angular-templates");
  require(process.env['LINEMAN_MAIN']).config.grunt.run(grunt);
};
