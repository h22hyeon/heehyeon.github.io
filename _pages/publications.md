---
title: "Publications"
permalink: /publications/
---

## Publications

Selected papers and preprints, listed in reverse chronological order.

{% assign items = site.publications | sort: "date" | reverse %}
{% for pub in items %}

### [{{ pub.title }}]({{ pub.url }})

**Authors:** {{ pub.authors }}  
**Venue:** {{ pub.venue }} · **Year:** {{ pub.year }}

{% if pub.links %}
**Resources:**
{% for l in pub.links %}
- [{{ l.label }}]({{ l.url }})
{% endfor %}
{% endif %}

{% endfor %}
