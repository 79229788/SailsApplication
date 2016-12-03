<script id="config-script">
  var app = {};
  {% if module %} app.action = '{{ module }}';{% endif  %}
  app.versions = {{ JSON.stringify(app.versions) }};
  app.debugs = {{ JSON.stringify(app.debugs) }};
  app.paths = {{ JSON.stringify(app.paths) }};
  app.macros = {{ JSON.stringify(app.publicMacros) }};

  if(!app.debugs.debug) {
    const config = document.getElementById('config-script');
    config.parentNode.removeChild(config);
  }
</script>
<script id="main" src="{{ app.paths.libs }}/requirejs/require.js" data-main="{{ app.getJsUrl('config') }}"></script>
