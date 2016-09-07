<script>
  var app = {};
  {% if module %} app.action = '{{ module }}';{% endif  %} //如果指明了预调用模块，则为app设置动作
  app.versions = {{ JSON.stringify(app.versions) }};
  app.paths = {{ JSON.stringify(app.paths) }};
  app.macros = {{ JSON.stringify(app.publicMacros) }};
</script>
<script id="main" src="{{ app.paths.libs }}/requirejs/require.js" data-main="{{ app.getJsUrl('config') }}"></script>
