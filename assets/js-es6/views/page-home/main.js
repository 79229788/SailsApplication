define(function(require, exports, module) {
  var self;
  var Backbone = require('backbone');
  var _ = require('underscore');
  var $ = require('jquery');
  var combase = require('combase');

  //**********************************************************************视图操作
  var HomeView = Backbone.View.extend({
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
    toClickButton: combase.debounceClick(function(e) {
      $(self.el).find('.button span').text('success');
    })

  });

  new HomeView();

});
