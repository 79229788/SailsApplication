<script>
  var app = {};
  app.versions = {{ JSON.stringify(sails.config.versions) }};
  //{% if module -%} app.action = '{{ module }}';{%- endif  %} //如果指明了预调用模块，则为app设置动作
</script>
<script id="main" src="{{ path.lib }}/requirejs/require.js" data-main="{{ getJsUrl('config.js') }}"></script>
