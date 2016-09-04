{% extends 'public/layout.swig' %}
{% set module = 'views/page-home/main' %}
{% block title %}首页{% endblock %}
{# 相应css文件 #}
{% block stylesheets %}
<link href="{{ app.getCssUrl('page-home') }}" rel="stylesheet" type="text/css"/>
{% endblock %}
{% block content %}
<div class="layout">
  <div class="module">
    <p>Hello, world! This is a Home Page.</p>
    <p class="button"><button>点击我!</button><span></span></p>
  </div>
</div>
{% endblock %}
