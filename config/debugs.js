module.exports.debugs = {
  /**
   * 调试模式(非调试模式下, 主要用于Require打包和压缩以及MD5版本的优化编译(成功后, 请单独将.tmp目录重新部署至服务器)
   * 注意: 非调试模式下, 请仍使用sails lift进行项目重启, 耐心等待.tmp/public中build文件生成, 即代表完成.)
   */
  debug: false

};
