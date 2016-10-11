/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a classic and effective way to get your app up
 * and running. Views are normally served from controllers.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For more information on views and layouts, check out:
 * http://sailsjs.org/#!/documentation/concepts/Views
 */

module.exports.views = {

  /****************************************************************************
  *                                                                           *
  * View engine (aka template language) to use for your app's *server-side*   *
  * views                                                                     *
  *                                                                           *
  * Sails+Express supports all view engines which implement TJ Holowaychuk's  *
  * `consolidate.js`, including, but not limited to:                          *
  *                                                                           *
  * ejs, jade, handlebars, mustache underscore, hogan, haml, haml-coffee,     *
  * dust atpl, eco, ect, jazz, jqtpl, JUST, liquor, QEJS, swig, templayed,    *
  * toffee, walrus, & whiskers                                                *
  *                                                                           *
  * For more options, check out the docs:                                     *
  * https://github.com/balderdashy/sails-wiki/blob/0.9/config.views.md#engine *
  *                                                                           *
  ****************************************************************************/

  engine: {
    /* Template File Extension */
    ext: 'swig',

    /* Function to handle render request */
    fn: function (path, data, cb) {
      var _ = require('underscore');
      /* Swig Renderer */
      var swig = require('swig');
      var swig_extras = require('swig-extras');
      // 保证我们在开发环境下每次更改swig不用重启sails
      if (data.settings.env === 'development') {
        swig.setDefaults({cache: false});
      }
      // 常用后端全局对象
      data.app = {};
      // 绑定一些常用路径
      var paths = {
        libs: '/js/libs',
        scripts: '/js',
        styles: '/styles',
        images: '/images',
        fonts: '/fonts',
        icons: '/icons'
      };
      if (!data.path) {
        data.path = paths;
      } else {
        for (var key in paths) {
          if (!key in data.path) {
            data.path[key] = paths[key];
          }
        }
      }
      data.app.paths = paths;
      // 绑定常用信息
      data.app.versions = sails.config.versions;
      data.app.debug = sails.config.debugs.debug;
      data.app.macros = _.extend({}, sails.config.macros.publicMacros, sails.config.macros.privateMacros);
      data.app.publicMacros = sails.config.macros.publicMacros;
      // 绑定资源url获取方法
      data.app.getJsUrl = function(url) {
        const path = paths.scripts + '/'  + (url.indexOf('.js') < 0 ? url + '.js' : url);
        const v = data.app.debug ? '?dev=' + new Date().getTime()  : '?v=' + sails.config.versions[path];
        return path + v;
      };
      data.app.getCssUrl = function(url) {
        const path = paths.styles + '/'  + (url.indexOf('.css') < 0 ? url + '.css' : url);
        const v = data.app.debug ? '?dev=' + new Date().getTime()  : '?v=' + sails.config.versions[path];
        return path + v;
      };
      data.app.getImageUrl = function(url) {
        const path = paths.images + '/'  + url;
        const v = data.app.debug ? '?dev=' + new Date().getTime()  : '?v=' + sails.config.versions[path];
        return path + v;
      };
      //设置underscore过滤器
      swig.setFilter('_', function() {
        return _;
      });
      // 补充extra
      swig_extras.useFilter(swig, 'split');
      /* Render Templates */
      return swig.renderFile(path, data, cb);
    }
  },


  /****************************************************************************
  *                                                                           *
  * Layouts are simply top-level HTML templates you can use as wrappers for   *
  * your server-side views. If you're using ejs or jade, you can take         *
  * advantage of Sails' built-in `layout` support.                            *
  *                                                                           *
  * When using a layout, when one of your views is served, it is injected     *
  * into the `body` partial defined in the layout. This lets you reuse header *
  * and footer logic between views.                                           *
  *                                                                           *
  * NOTE: Layout support is only implemented for the `ejs` view engine!       *
  *       For most other engines, it is not necessary, since they implement   *
  *       partials/layouts themselves. In those cases, this config will be    *
  *       silently ignored.                                                   *
  *                                                                           *
  * The `layout` setting may be set to one of the following:                  *
  *                                                                           *
  * If `false`, layouts will be disabled. Otherwise, if a string is           *
  * specified, it will be interpreted as the relative path to your layout     *
  * file from `views/` folder. (the file extension, ".ejs", should be         *
  * omitted)                                                                  *
  *                                                                           *
  ****************************************************************************/

  /****************************************************************************
  *                                                                           *
  * Using Multiple Layouts                                                    *
  *                                                                           *
  * If you're using the default `ejs` or `handlebars` Sails supports the use  *
  * of multiple `layout` files. To take advantage of this, before rendering a *
  * view, override the `layout` local in your controller by setting           *
  * `res.locals.layout`. (this is handy if you parts of your app's UI look    *
  * completely different from each other)                                     *
  *                                                                           *
  * e.g. your default might be                                                *
  * layout: 'layouts/public'                                                  *
  *                                                                           *
  * But you might override that in some of your controllers with:             *
  * layout: 'layouts/internal'                                                *
  *                                                                           *
  ****************************************************************************/

  layout: 'layout',

  /****************************************************************************
  *                                                                           *
  * Partials are simply top-level snippets you can leverage to reuse template *
  * for your server-side views. If you're using handlebars, you can take      *
  * advantage of Sails' built-in `partials` support.                          *
  *                                                                           *
  * If `false` or empty partials will be located in the same folder as views. *
  * Otherwise, if a string is specified, it will be interpreted as the        *
  * relative path to your partial files from `views/` folder.                 *
  *                                                                           *
  ****************************************************************************/

  partials: false


};
