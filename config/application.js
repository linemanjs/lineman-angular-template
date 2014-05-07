/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    // grunt-angular-templates assumes your module is named "app", but
    // you can override it like so:
    //
    // ngtemplates: {
    //   options: {
    //     module: "myModuleName"
    //   }
    // }

    server: {
      pushState: false,
      apiProxy: {
        enabled: true,
        host: 'protected-basin-9739.herokuapp.com',
        port: 80,
        changeOrigin: true
      }
    }

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    // enableSass: true

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true

  };
};
