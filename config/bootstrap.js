/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  // 项目启动时加载leancloud
  var AV = require('leancloud-storage');
  AV.init({
    appId: sails.config.leancloud.APP_ID,
    appKey: sails.config.leancloud.APP_KEY,
    masterKey: sails.config.leancloud.MASTER_KEY
  });
  cb();
};
