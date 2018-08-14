{% if site.posts.size > 0 %}
  <div class="list-group">
    {% for post in site.posts limit: 10 %}
      <a href="{{ post.url }}" class="list-group-item">
        <h4 class="list-group-item-heading h6">{{ post.title }}
          <small class="text-muted"> &ndash;
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b. %d, %Y' }}</time>
          </small>
        </h4>
      </a>
    {% endfor %}
  </div>
  <p class="text-xs-right m-t-1 m-b-0"><a href="/blog/">more ➟</a></p>
{% else %}
  <p>No posts found.</p>
{% endif %}
