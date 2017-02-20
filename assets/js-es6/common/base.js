define(['underscore', 'jquery'], function(_, $) {
  $.fn.isJQuery = true;
  return {
    /**
     * 防止高速点击
     * 说明: 若点击有网络请求状态, 第一个参数(e)请指定按钮元素(可JQ对象), 若无网络请求状态第一个元素(e)可作为普通参数使用.
     */
    debounceClick: function(fun) {
      return  _.debounce(function(e, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        let $this;
        if(e.isJQuery) {
          $this = e;
        }else if (_.isObject(e) && e.type && e.type == 'click'){
          $this = $(e.currentTarget);
        }else {
          fun(e, p1, p2, p3, p4, p5, p6, p7, p8, p9);
        }
        if($this && !$this.hasClass('loading')) {
          fun(e, p1, p2, p3, p4, p5, p6, p7, p8, p9);
        }else if ($this && $this.hasClass('loading')) {
          alert('表急，正在加载中，请稍等...');
        }
      }, 1000, true);
    }
  }
});
