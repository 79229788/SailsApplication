define(function(require, exports, module) {
  let self;
  const Backbone = require('backbone');
  const _ = require('underscore');
  const $ = require('jquery');
  const base = require('common/base');

  //**********************************************************************视图操作
  const HomeView = Backbone.View.extend({
    el: "#page",
    //**********初始化
    initialize: function() {
      self = this;
    },
    //**********渲染
    render: function() {

    },
    //*****************************************事件处理
    events: {
      'click .button button'          : 'toClickButton'
    },
    //响应事件
    toClickButton: base.debounceClick(function(e) {
      $(self.el).find('.button span').text('success');
    })

  });

  new HomeView();

});
