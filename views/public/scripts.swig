<script>
  var app = {};
  {% if module %} app.action = '{{ module }}';{% endif  %} //如果指明了预调用模块，则为app设置动作
  app.versions = {{ JSON.stringify(sails.config.versions) }};
</script>
<script id="main" src="{{ path.lib }}/requirejs/require.js" data-main="{{ getJsUrl('config.js') }}"></script>
