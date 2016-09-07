/**
 * 项目的常用全局数据
 */
module.exports.macros = {

  //前端、后端共享(不支持方法) -- 在前端和后端swig视图中均直接使用app.macros调用其中属性
  publicMacros: {
    /**
     * 站点名称
     */
    KWebsiteName: "Sails App"

  },
  //仅仅用于后端(支持方法) -- 后端swig视图中均直接使用app.macros调用, 后端其他地方请使用sails.config.macros.privateMacros调用其中属性
  privateMacros: {

  }

};
