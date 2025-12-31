---
title: "Research"
permalink: /projects/
---

## Research Projects

Selected research projects presented in an artifact-first format, emphasizing objectives, methodological approaches, and concrete outputs.

{% assign items = site.projects | sort: "date" | reverse %}
{% for p in items %}

### [{{ p.title }}]({{ p.url }})

**Summary:** {{ p.summary }}

**Objective**  
{{ p.objective }}

**Approach**  
{{ p.approach }}

**Outputs**  
{{ p.outputs }}

{% if p.links %}
**Resources:**
{% for l in p.links %}
- [{{ l.label }}]({{ l.url }})
{% endfor %}
{% endif %}

{% endfor %}
