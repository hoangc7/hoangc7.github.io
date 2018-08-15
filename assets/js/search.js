---

---

// builds lunr
var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('content', {boost: 9})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}
{% for post in site.posts %}
idx.add({
  title: {{post.title | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  category: {{post.category | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});
{% assign count = count | plus: 1 %}
{% endfor %}

// Build reference
var store = [{% for post in site.posts %}{
  'title': {{post.title | jsonify}},
  'link': {{ post.url | jsonify }},
  'image': {{ post.image | jsonify }},
  'date': {{ post.date | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.category | jsonify }},
  'tags': {{ post.tags | jsonify }},
 }{% unless forloop.last %},{% endunless %}{% endfor %}
]

// builds search
jQuery(document).ready(function($) {
  var resultdiv = $('#search-results');

  function search( q ) {
    var result = idx.search( q );

    resultdiv.empty();
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');

    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><div class="post-date small">'+store[ref].category+' &times; '+store[ref].date+'</div></div>';
      resultdiv.append(searchitem);
    }
  }

  // Instance search
  $('input#search').on('keyup', function () {
    var query = $(this).val();
    search( query );
  });

  // Search page
  var query = getUrlParameter( 'q' );
  if ( query ) {
    search( query );
  }
});

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};