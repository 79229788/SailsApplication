<script>
  var app = {};
  app.version = {{ sails.config.globals.KReleaseVersion }};
  //{% if module -%} app.action = '{{ module }}';{%- endif  %} //如果指明了预调用模块，则为app设置动作
</script>
<script id="main" src="{{ path.lib }}/requirejs/require.js" data-main="{{ path.script }}/config"></script>
