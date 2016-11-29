module.exports.debugs = {
  /**
   * 调试模式(主要用于日志打印，和部分静态资源版本控制)
   */
  debug: true,
  /**
   * 打包(发布时，这里需要开启打包, 主要用于Require打包和压缩以及MD5版本的优化编译(成功后, 请单独将.tmp目录重新部署至服务器)
   * 注意: 打包时, 请仍使用sails lift进行项目重启, 耐心等待.tmp/public中build文件生成, 即代表打包完成。然后则可以部署代码到线上.)
   */
  package: false

};
