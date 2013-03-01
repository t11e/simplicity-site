---
layout: default
nav: userguide
nav2: home
title: userguide
subhead: Userguide
lead: Learning how to use the widgets.
---

{% include userguide/nav.html %}

<div class="page-header">
  <h1>Getting started</h1>
</div>

The Simplicity Widgets are designed to be extensible, and to get out of the way when you need them to.

They follow simple architectural patterns for communicating with a search server, coordinating widget state on the page, and displaying results.

[jQuery](http://jquery.com/) and [jQuery UI](http://jqueryui.com/) are required to use the widgets.

There are three high-level steps to use the widgets on a page:

1. install the widgets on the page with `link` and `script` tags
2. add HTML elements for the search and result areas
3. add a few lines of JavaScript to configure the widgets

<div class="page-header">
  <h1>Install</h1>
</div>

You need to add `link` and `script` tags for the JavaScript and CSS resources for the widgets.

Add the CSS references to the `head` of the page.
{% highlight html %}
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/{{site.jQueryUiRelease}}/themes/{{site.jQueryUiTheme}}/jquery-ui.css" rel="stylesheet">
<link href="http://cdn.transparensee.com/simplicity/{{site.simplicityRelease}}/simplicity.min.css" rel="stylesheet">
{% endhighlight %}

Note: You can use any of the available [jQuery UI themes](http://jqueryui.com/themeroller/).

Add these external JavaScript references to the end of the `body` of the page.
{% highlight html %}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/{{site.jQueryRelease}}/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/{{site.jQueryUiRelease}}/jquery-ui.min.js"></script>
<script src="http://cdn.transparensee.com/simplicity/{{site.simplicityRelease}}/simplicity.min.js"></script>
{% endhighlight %}

Some widgets have extra dependencies, you'll need to add `script` tags for them.

<dl>
    <dt><a href="http://benalman.com/projects/jquery-bbq-plugin/">jQuery BBQ plugin</a></dt>
    <dd>
        Used by <code>$.simplicityDiscoverySearch('mergeQueryParams')</code> and <code>$.simplicityHistory</code>.
{% highlight html %}
<script src="http://cdn.transparensee.com/lib/jquery-plugin/bbq/1.2.1/jquery.ba-bbq.min.js"></script>
{% endhighlight %}
    </dd>
</dl>

Some browsers need extra JavaScript support to function well, you'll need to add `script` tags for
the following libraries for most compatibility.

<dl>
    <dt><a href="https://github.com/douglascrockford/JSON-js">JSON2</a></dt>
    <dd>
        Gracefully adds support for <code>JSON.parse</code> and <code>JSON.stringify</code>
        to browsers that do not have native <code>JSON</code> support.
{% highlight html %}
<!--[if lt IE 9]>
  <script src="http://cdn.transparensee.com/lib/json2/2010-11-17/json2.min.js"></script>
<![endif]-->
{% endhighlight %}
    </dd>
    <dt><a href="http://brandonaaron.net/code/bgiframe/docs">jQuery bgiframe plugin</a></dt>
    <dd>
        Recommended for IE6 compatibility when using <code>$.simplicityFlyout</code>.
{% highlight html %}
<!--[if IE]>
  <script src="http://cdn.transparensee.com/lib/jquery-plugin/bgiframe/2.1.2/jquery.bgiframe.min.js"></script>
<![endif]-->
{% endhighlight %}
    </dd>
    <dt><a href="http://html5shim.googlecode.com">html5shim</a></dt>
    <dd>
        Adds HTML5 element support to IE. This script tag <em>must</em> go
        in the <code>head</code> section of your page.
{% highlight html %}
<!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
{% endhighlight %}

    </dd>
    <dt><a href="https://gist.github.com/thej/4082821">xdr.js</a></dt>
    <dd>
        Adds support for CORS requests to older versions of IE.
{% highlight html %}
<!--[if IE]>
  <script src="http://cdn.transparensee.com/lib/xdr/984c41/xdr.min.js"></script>
<![endif]-->
{% endhighlight %}
    </dd>
    <dt><a href="http://touchpunch.furf.com">jQuery Touch Punch plugin</a></dt>
    <dd>
        Adds tablet/phone touch event support to jQuery UI.
{% highlight html %}
<script src="http://cdn.transparensee.com/lib/jquery-plugin/touchpunch/0.2.2/jquery.ui.touch-punch.min.js"></script>
{% endhighlight %}
    </dd>
</dl>

You will add javascript code after the above tags to instantiate and configure the widgets that you want to use. We'll get to that
in a bit.

<div class="page-header">
  <h1>HTML</h1>
</div>

Add the search navigation `form` to the left side of the page.

{% highlight html %}
{% include userguide/example/gettingstarted/searchForm.html %}
{% endhighlight %}

Add the results and pagination `div`s to the content area of the page.

{% highlight html %}
{% include userguide/example/gettingstarted/resultsArea.html %}
{% endhighlight %}

<div class="page-header">
  <h1>JavaScript</h1>
</div>

We configure the widgets in a `script` tag below the script tags that loaded simplicity.js and its dependencies.

Only one [widget group](/userguide/widgetgroups.html) is needed, so we create a `simplicityState` widget on the `body` element.
{% highlight javascript %}
{% include userguide/example/gettingstarted/state.js %}
{% endhighlight %}

Then we configure request widgets on the `input`s in the search navigation `form`.
{% highlight javascript %}
{% include userguide/example/gettingstarted/searchForm.js %}
{% endhighlight %}

The response widgets are created for the `div`s in the content area to display the search results and pagination links.
{% highlight javascript %}
{% include userguide/example/gettingstarted/resultsArea.js %}
{% endhighlight %}

Finally, we perform the [page level setup](/userguide/simplicityDiscoverySearch.html) of the `simplicityDiscoverySearch` widget.
{% highlight javascript %}
{% include userguide/example/gettingstarted/search.js %}
{% endhighlight %}

For the best user experience, we recommend placing any slow-loading scripts such map vendor scripts below all the Simplicity Widget
JavaScript so that the widgets can be fully functional and displayed before the slow loading scripts are executed.

Note the example snippets above refer to two external JavaScript functions `window.searchController` and `window.searchResults`
which aren't included above.

<div class="page-header">
  <h1>Summary</h1>
</div>

We've demonstrated how to build a basic search page that uses JavaScript based search controller and results rendering and connects
directly to the Discovery Search Engine using Ajax requests with CORS.

You can try out the [completed page](http://t11e.github.com/simplicity-template-example) or view/download the source files from
the [github repository](http://github.com/t11e/simplicity-template-example).
