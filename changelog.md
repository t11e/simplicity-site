---
layout: default
nav: changelog
title: changelog
subhead: Changelog
lead: What's new, doc?
---

<div class="page-header">
  <h1>3.3 <small>TBD</small></h1>
</div>

Compatibility
-------------

* We've removed some patching code that was added as part of the 3.0 release.
  Simplicity no longer patches the <code>autoFocus</code> option of
  <code>jquery.ui.autocomplete</code>, if you wish to retain this behavior you
  need to manually include the
  <code>js/lib/jquery.ui.autocomplete.autofocus.fix.js</code> file from the
  previous release in your page.
* The <code>simplicityLoadJs</code> and <code>simplicityGoogleMapLoader</code>
  widgets have been removed. The <code>loadMap</code> method has been removed
  from the Bing, MapQuest, Nokia and Yahoo map widgets. If you were previously
  calling these methods, you must now manually place the vendor specific script
  tag on the page.
* Global functions have been consolidated into the <code>$.simplicity</code>
  namespace.
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>old</th>
      <th>new</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$.simplicityEquiv</td>
      <td>$.simplicity.equiv</td>
    </tr>
    <tr>
      <td>$.simplicityProxy</td>
      <td>$.simplicity.proxy</td>
    </tr>
    <tr>
      <td>$.simplicityAjaxHelper</td>
      <td>$.simplicity.ajaxHelper</td>
    </tr>
    <tr>
      <td>$.simplicityGeoFn.degreesToRadians</td>
      <td>$.simplicity.degreesToRadians</td>
    </tr>
    <tr>
      <td>$.simplicityGeoFn.radiansToDegrees</td>
      <td>$.simplicity.radiansToDegrees</td>
    </tr>
    <tr>
      <td>$.simplicityGeoFn.distanceRadians</td>
      <td>$.simplicity.haversineDistanceRadians</td>
    </tr>
    <tr>
      <td>$.simplicityGeoFn.distanceMiles</td>
      <td>$.simplicity.haversineDistanceMiles</td>
    </tr>
    <tr>
      <td>$.simplicityGeoFn.distanceKm</td>
      <td>$.simplicity.haversineDistanceKm</td>
    </tr>
  </tbody>
</table>
* Removes backwards compatible shims for the following methods:
  * $.simplicityHaversineRadiusMiles
  * $.simplicityHaversineRadiusKm
  * $.simplicityHaversineDistanceRadians
  * $.simplicityHaversineDistanceMiles
  * $.simplicityHaversineDistanceKm
* Replaces the `markerType` option of `$.simplicityGoogleMapResults` with
  `markerCallback`.
* Changes the default Google Maps marker back to the standard `google.maps.Marker`
  instead of using the custom `$.simplicityGoogleMarker` class.
  You can now control this by overriding the `markerCallback` option of
  `$.simplicityGoogleMarker`. To switch over to the `$.simplicityGoogleMarker`
  you'd write:
{% highlight javascript %}
$('#example').simplicityGoogleMapResults({
    markerCallback; $.simplicityGoogleMarker.resultsCallback
});
{% endhighlight %}

Improvements
------------

* Simplified directory layout and build system. The main project layout is now
  less deep, with the actual JS and CSS files in top level `js` and `css`
  directories.
* Removal of server-side components. The project now uses CORS to communicate with
  the engine directly removing the need for the example PHP components.
* Support for developing from a `file://` URL. You no longer need to serve the
  `docroot` directory via Apache or IIS, instead you can just open up the `index.html`
  file directly and develop more easily.
* Changes build system to use [maven](http://maven.apache.org) and
  [wro4j](http://code.google.com/p/wro4j/) instead of a custom
  [ant](http://ant.apache.org) and [media-compressor](https://github.com/t11e/media_compressor/)
  pipeline. The build command is now `mvn clean package` instead of `ant clean dist`.
* `simplicityGoogleMapResults` goes back to using the standard `google.maps.Marker`
  marker. This makes it a more simple extension of Google Maps and easier to
  extend.

<div class="page-header">
  <h1>3.2 <small>2012-10-15</small></h1>
</div>

Compatibility
-------------

* You no longer need to include the external library `jquery.pagination-2.1.js`
  as the `simplicityPagination` widget now implements equivalent functionality
  directly.
* The default behavior of `simplicityInputs` when bound to a non-input element
  has changed. To obtain the previous behavior set the `handleChildChange`
  option to `false`. This will only affect you if you've grouped multiple inputs
  and take explicit action to trigger a `change` event on their contained
  `simplicityInputs`. An example would be a custom geocoder binding that doesn't
   use our sample setup JavaScript. Concretely, you would need to change this
   option to `false` if you have code that looks like this:
{% highlight html %}
<fieldset id="example">
  <input name="a">
  <input name="b">
  <input name="c">
  <button>Change</button>
</fieldset>
{% endhighlight %}
{% highlight javascript linenos %}
$('#example').simplicityInputs();
$('#example button').change(function () {
  $('#example').change();
});
{% endhighlight %}
To maintain previous functionality, you'd change line 1 to read:
{% highlight javascript %}
$('#example').simplicityInputs({
  handleChildChange: false
});
{% endhighlight %}


Improvements
------------

* Adds `$.simplicity.version` to be used for diagnostic purposes not feature detection.
* Fixes `$.simplicityAjaxHelper` to prevent `simplicitySearchResults` from
  displaying `[0] abort, abort` when an Ajax request was aborted due to the
  user interacting too quickly.
* Makes `simplicityDiscoverySearch` handle the `initialSearchResponse` option as
  a straight JavaScript object instead of incorrectly serializing it into a JSON
  formatted string.
* Stops `simplicityFancySelect` from swallowing `click` events that target
  a checkbox or radio button. This allows them to be used from the `template`
  option.
* Refactors `simplicityPagination` widget to no longer require the external
  [jQuery Pagination plugin](https://github.com/gbirke/jquery_pagination).
* Improves `change` event handling in `simplicityInputs` when bound to a
  non-input element. This allows you to bind a single `simplicityInputs`
  widget to a collection of radio buttons or checkboxes for a more efficient
  setup.

<div class="page-header">
  <h1>3.1 <small>2012-08-14</small></h1>
</div>

Compatibility
-------------

* `simplicityGoogleMapBoundsTracker` no longer considers a bounds change during drag unless you set the `idleWhileDragging` option to `true`.

Improvements
------------

* Enhances `simplicityDiscoverySearch` to support CORS direct engine requests.
* Enhances `simplicityDiscoverySearch` to make extracting a result set optional.
* Changes default behavior of `simplicityGoogleMapBoundsTracker` so that bounds event is not triggered when dragging. It now only triggers the bounds event if the map bounds actually changed.
* Optimizes buffered shape creation and updating in the shape creator widgets.
* Fixes to `simplicityMapShapeCreator` and `simplicityMapeShapeCreatorUi` to make them easier to use.


<div class="page-header">
  <h1>3.0 <small>2012-07-19</small></h1>
</div>

Improvements
------------

* Adds geocoding and polygon drawing support to the map widgets. The new widgets are `simplicityGoogleMapShapeCreator`, `simplicityMapQuestMapShapeCreator`, `simplicityBingMapShapeCreator`, `simplicityNokiaMapShapeCreator` and `simplicityMapShapeCreatorUi`.
* Conditionally applies autoFocus patch to ui.autocomplete, for versions before 1.9 of jQuery UI.
* Adds `simplicitySearchSearching` event to `simplicityDiscoverySearch`.
* Passes `window` into the anonymous functions that define `simplicityHistory`, `simplicityPagination` and `simplicityGoogleMapLoader`, making sure we use the value of `window` at declare time instead of runtime which makes the widget `noConflict` safe.
* Enhances `simplicityPagination` to allow for jQuery selector `.scrollTop()` support when page changes.
* Fixes invalid guard in `simplicityPagination` where the option `search` was used instead of `searchElement`.


<div class="page-header">
  <h1>2.9.1 <small>2012-06-22</small></h1>
</div>

Compatibility
-------------

* Fixes bug in previous 2.9 release that would caues a JavaScript error if google maps wasn't available before simplicity.

Improvements
------------

* Adds `markerType` option to `simplicityGoogleMapResults`. Possible values are `overlay` (default) or `google`. This allows clients to choose between the standard google marker (google) or our new `simplicityGoogleMarker` (overlay). Adds supporting factory methods to `$.simplicityGoogleMarker`.
* Improves $.simplicityGoogleMarker and removes the need for the Google Maps API to exist before it is declared.


<div class="page-header">
  <h1>2.9 <small>2012-06-22</small></h1>
</div>

Compatibility
-------------

* The `simplicityHaversine*` functions have moved to `$.simplicityGeoFn`, a shim is in place to call the new variants but any references in your code should be updated to use the new location of these functions.

Improvements
------------

* Consolidates the simplicityHaversine* functions into a new namespace `$.simplicityGeoFn` and adds some extra geographic utility functions to be used by the polygon widget.
* Adds simplicityGoogleMarker, a DOM backed Google Map marker that can be easily styled via CSS.
* Enhances `simplicityDiscoverySearch` to optionally request and deliver query profile responses from the engine. Adds three new widget events that enable customers to manipulate the `$.ajax` parameter options, its success and error methods.
* Adds support for radio buttons to `simplicityFancySelect`.


<div class="page-header">
  <h1>2.8 <small>2012-04-12</small></h1>
</div>

Improvements
------------

* Enhances simplicityFancyFacets to pass through formatting templates for simplicityFancySelects.
* Enhances `simplicityHistory` to use `#!`, making navigation and resets more user-friendly.
* Applies StandardMarker (Nokia) and adds with default marker numbering and/or zIndex when supported.


<div class="page-header">
  <h1>2.7 <small>2012-02-07</small></h1>
</div>

Improvements
------------

* Adds support for Nokia map (will replace Yahoo maps).
* Adds `removemarker` event to `simplicity{vendor}MapResults`.


<div class="page-header">
  <h1>2.6 <small>2011-12-16</small></h1>
</div>

Improvements
------------

* Introduces `simplicityAjaxHelpher` that adds support for cancelling inflight Ajax requests for `simplicityDiscoverySearch`.


<div class="page-header">
  <h1>2.5 <small>2011-10-24</small></h1>
</div>

Compatibility
-------------

* Replaces the `positionSelector` option of `simplicityFlyout` with `position` that uses standard jQuery UI position options.
* Renames the `missingText` option to `missingCount` for `simplicityFacetCount`.
* The `simplicityFacetCounts` and `simplicityResultSet` events from `simplicityDiscoverySearch` are no longer enabled by default. They have been deprecated and will be removed in a future release. If you wish to use them in the meantime, set the `triggerFacetCountEvent` or `triggerResultSetEvent` option of `simplicityDiscoverySearch` to `true`.
* The `resultSet` field has been removed from the from the `simplicitySearchResponse` event (triggered by `simplicityDiscoverySearch`). If you wish to use this data then use the `simplicityDiscoverySearchItemEnumerator` over the response object.

Improvements
------------

* Introduces `simplicityFancyFacets` a more complex combination of `simplicifyFancyFacet` widgets with support for displaying only some of the available options and making the rest available in a flyout.
* Introduces `simplicityFancySelect` which progressively enhances a select input.
* Introduces `simplicityFacetedSelect` a widget to dynamically populate the option elements of a select input based on the search response.
* Introduces `simplicitySelectSlider`, a single handled slider that maps to a select input. Includes options to display tick marks, labels and a tooltip.
* Improves `simplicityFlyout` to better use `ui-helper-accessible-hidden` and make use of jQuery UI position.
* Adds search counters to `simplicityDiscoverySearch` which are exposed by the `searchStats` and `queryStats` methods.
* Special cases single selection from a select input to not be an array when converted to a state value in `simplicityToState`.
* Adds dynamic option injection logic to `simplicityFromState` to add placeholder options to select inputs if they are missing.
* Fixes bug in `simplicityToState` for multi-select enabled select inputs that contain a default value. Now that empty value is not injected into the state value.
* Improves error handling of ajax queries.
* Adds index counts to the row created by `simplicityDiscoverySearchItemEnumerator` making it easier for customers to include result set positional information using their callbacks: `index0`, `index1`, `resultsIndex0` (position in result set).
* Adds `applyClass` option to `simplicityPagination` which allows you to specify which classes are applied to the pagination elements, e.g. `ui-corner-all`. Also applies `ui-priority-primary` to the "current" elements, uses `ui-state-disabled` for disabled Next/Prev links and `ui-state-active` to the currently displayed page span.
* Removes theme-based formatting for `simplicityPagination`, allowing the jQuery UI theme to dictate presentation.
* Adds css for simplicity slider such that slider handle doesn't glow when selected (Safari).
* Introduces `simplicityProxy` and `simplicityWidget`. The `simplicityWidget` widget is the new base class of all other widgets, allowing us to apply more simple event handling support across the board.
* Fixes logic error in mapOptions handling of simplicityMapQuestMap._initWhenAvailable. Now the defaultMapOptions are respected.
* Removes `resultSet` data usage from the widget set. Adds global helper function `simplicityDiscoverySearchItemEnumerator` to enumerate the searchResponse and use a callback method to process the data.
* Adds support for `facets` API with backwards support for `drillDown`. Moves `drillDown` and `resultSet` response objects to top-level objects and deprecates `simplicityFacetCounts` and `simplicityResultSet` events.
* Converts number to String in `simplicityPagination` to avoid false state change events when reading the page number from the simplicity state which generally uses strings for the values.


<div class="page-header">
  <h1>2.4 <small>2011-07-25</small></h1>
</div>

Improvements
------------

* Adds JSONP support to simplicityDiscoverySearch and an example of how to use it.
* Adds BSD 2-clause license to the project.


<div class="page-header">
  <h1>2.3 <small>2011-04-22</small></h1>
</div>

Compatibility
-------------

* Breaks up the map widgets into smaller components. `simplicity{vendor}Map` becomes `simplicity{vendor}Map`, `simplicity{vendor}MapBoundsCoordinator`, `simplicity{vendor}MapBoundsTracker` and `simplicity{vendor}MapResults`.

You will need to instantiate a different set of simplicity mapping widgets,
configure them slightly differently, and update any jQuery event handlers
related to the map events. The event names are slightly different due to the
namespacing offered by jQuery's `_trigger()` method. The semantics of some
events were modified to better support the new feature set. The bottom line is
that if you are using jQuery to bind to `simplicity{vendor}map{event}` events,
you will need to adjust the names of the events to match the new widget names
and double check that your event handler still works with the updated API.

We strongly suggest that you review the generated JavaScript documentation for
full details, and that you explore the tutorial pages to see the new mapping
widgets in action.

Here is a simple example of the `simplicityGoogleMap` widget being migrated from
release 2.2 to release 2.3. Note that all the options are optional. Here's an
example just using the widget defaults.

Old:
{% highlight javascript %}
$('#map').simplicityGoogleMap();
{% endhighlight %}

New:
{% highlight javascript %}
$('#map')
  .simplicityGoogleMap()
  .simplicityGoogleMapBoundsCoordinator()
  .simplicityGoogleMapResults();
{% endhighlight %}

Here is an example with all the defaults shown.

Old:
{% highlight javascript %}
$('#map')
  .simplicityGoogleMap({
     searchElement: 'body',
     latitudeField: 'latitude',
     longitudeField: 'longitude',
     fitOnResultSet: true,
     mapOptions: {},
     mapMoveEvents: 'idle'
  });
{% endhighlight %}

New:
{% highlight javascript %}
$('#map')
  .simplicityGoogleMap({
       mapOptions: {}
  })
  .simplicityGoogleMapBoundsCoordinator({
       searchElement: 'body'
  })
  .simplicityGoogleMapResults({
       searchElement: 'body',
       latitudeField: 'latitude',
       longitudeField: 'longitude',
       updateBounds: true
  });
{% endhighlight %}

With the new smaller widgets, you can see that you can easily choose which
behaviors and features to add to your simplicity map.

Note that the new widget `simplicity{vendor}BoundsTracker` will update the
search based upon the maps current bounds. As a user pans and zooms, the search
criteria are updated.

The `simplicity{vendor}MapBoundsCoordinator` widget allows the results and
criteria mapping widgets to update the map bounds in a coordinated manner.

Here is an overview showing the mapping of the 2.2 event names to the 2.3
event names. We recommend that you refer to the JavaScript documentation or
source code to fully understand the event contracts.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>old</th>
      <th>new</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>simplicitygooglemapcreate</td>
      <td>simplicitygooglemapcreate</td>
    </tr>
    <tr>
      <td>simplicitygooglemapmarker</td>
      <td>simplicitygooglemapresultsmarker</td>
    </tr>
    <tr>
      <td>simplicitygooglemapbounds</td>
      <td>simplicitygooglemapboundcoordinatorcalculatebounds</td>
    </tr>
    <tr>
      <td></td>
      <td>simplicitygooglemapboundstrackerbounds</td>
    </tr>
    <tr>
      <td>simplicitygooglemapboundsshapes</td>
      <td>simplicitygooglemapboundstrackerboundsshapes</td>
    </tr>
    <tr>
      <td></td>
      <td>simplicitygooglemapcriteriaplacemark</td>
    </tr>
  </tbody>
</table>


Improvements
------------

* Fixes bug in geocode widgets, they need to skip bbox normalization if it is missing in from the upstream vendor response.
* Removes vestigial this.element.unbind('change', this._changeHandler) from destroy methods of simplicityDiscoverySearch and simplicityState.


<div class="page-header">
  <h1>2.2 <small>2011-02-23</small></h1>
</div>

Compatibility
-------------

* Renames the vendor response specific data in the geocode widgets from `response` to `vendor`.

Improvements
------------

* Stops change event propagation from child elements in simplicityInputs.
* Adds a `mapMoveEvents` option to override which map events are used to detect map moves for all four map widgets.
* Productizes `simplicityGoogleMap`, `simplicityBingMap`, `simplicityYahooMap` and `simplicityMapQuestMap` widgets adding support for create, marker and bounds events.
* Introduces `simplicityHaversineDistance`.
* Adds bounding box to the normalized geocode response for the vendors that support it (all but mapquest).
* Adds simplicityDebug which replaces a bunch of copy/pasted code. This widget adds four text areas to the page that show and allow edits to the state, search response, result set and facet counts.


<div class="page-header">
  <h1>2.1 <small>2011-02-10</small></h1>
</div>

Compatibility
-------------

* Renames `simplicityInput` to `simplicityInputs`
* Renames `simplicityBucketCount` to `simplicityFacetCount` and replaces any references to `bucket` with `facet`.

Improvements
------------

* Updates simplicityMapQuestMap to use the mapinit module to calculate the bestFit rect instead of some custom code.
* Adds jsdoc for all widgets.
* Added trim option to simplicityInputs and simplicityToState which can be used to disable trimming of whitespace from values.
* Introduces the geocoding widgets; `simplicityGoogleGeocoder`, `simplicityBingGeocoder`, `simplicityYahooGeocoder`, `simplicityMapQuestGeocoder`.
* Adds `quietStateChange` option to `simplicityInputs` which allows us to define groups of quiet and hot inputs.
* Adds support for multiple grouped inputs to `simplicityInputs.` This can be used to atomically update multiple input fields at once.
* Improves state event triggering logic in simplicityState to only trigger a changed state if it differs from the last triggered change state and was asked to trigger on change.


<div class="page-header">
  <h1>2.0 <small>2011-01-06</small></h1>
</div>

Initial release.
