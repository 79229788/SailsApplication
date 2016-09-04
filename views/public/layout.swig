<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}{% endblock %}-{{ app.macros.KWebsiteName }}</title>
  {# 引入公共css文件 #}
  {% include "stylesheets.swig" %}
  {# 引入模块css文件 #}
  {% block stylesheets %}{% endblock %}
</head>
<body>
<div id="page">
  {% if !hideHeader %}
    <div id="header">
      {# 引入吊顶栏 #}
      {% include "header.swig" %}
    </div>
  {% endif %}

  <div id="content">
    {# 引入内容部分 #}
    {% block content %}{% endblock %}
  </div>

  {% if !hideFooter %}
    <div id="footer">
      {# 引入页脚部分 #}
      {% include "footer.swig" %}
    </div>
  {% endif %}

  {# 引入公共脚本 #}
  {% include "scripts.swig" %}
  {# 引入模块脚本 #}
  {% block scripts %}{% endblock %}
</div>

</body>
</html>
