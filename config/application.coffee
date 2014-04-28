module.exports = (lineman) ->
  server:
    pushState: true

  concat_sourcemap:
    js:
      src: [
        "<%= files.js.vendor %>"
        "<%= files.coffee.generated %>"
        "<%= files.js.app %>"
        "<%= files.template.generated %>"
      ]
