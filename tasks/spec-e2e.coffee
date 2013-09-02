###
Task: spec-e2e
Description: run protractor (in a ci-like mode)
Dependencies: grunt
Contributor: @searls
###
module.exports = (grunt) ->
  path = require("path")
  spawn = require("child_process").spawn

  grunt.registerTask "spec-e2e", "run specs in ci mode", (target) ->
    protractorRunnerPath = "#{process.cwd()}/node_modules/.bin/protractor"
    try
      done = @async()
      args = [path.resolve("#{process.cwd()}/config/spec-e2e.js")]
      child = spawn(protractorRunnerPath, args)
      output = ""
      child.stdout.on "data", (chunk) ->
        process.stdout.write(chunk)
        output += chunk

      child.on "exit", (code, signal) ->
        if code != 0
          grunt.warn("Spec execution appears to have failed.")
          done(false)
        else
          done()
    catch e
      grunt.fatal(e)
      throw e
