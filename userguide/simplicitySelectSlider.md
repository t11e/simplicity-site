---
layout: default
nav: userguide
nav2: simplicitySelectSlider
title: simplicitySelectSlider
subhead: simplicitySelectSlider
lead: Handles are a drag.
---

{% include userguide/nav.html %}

<div class="page-header">
  <h1>simplicitySelectSlider</h1>
</div>
<div class="row">
    <div class="span8">
        <p>
            Create a <code>select</code> with the <code>option</code>s you wish to allow.
        </p>
{% highlight html %}
<div id="example">
    <select name="example">
        <option value="">Any</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E<option>
    </select>
    <div></div>
</div>
{% endhighlight %}
        <p>
            Then apply the <code>simplicitySelectSlider</code> widget to it.
        </p>
{% highlight javascript %}
$('#example div').simplicitySelectSlider({
    select: '#example select'
});
{% endhighlight %}
    </div>
    <div class="span4">
        <h3>Example</h3>
        <div id="exampleSlider" class="well">
            <label><span class="badge">1</span> select</label>
            <select name="example">
                <option value="">Any</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
            </select>
            <label><span class="badge">2</span> slider</label>
            <div style="margin: 4em 0 2em 0;"> </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#exampleSlider div').simplicitySelectSlider({
                  select: '#exampleSlider select'
                });
            });
        </script>
        <p>
            Change the value in <span class="badge">1</span> and see how the
            slider in <span class="badge">2</span> is updated.
        </p>
        <p>
            Move the slider in <span class="badge">2</span> and see how the
            selection in <span class="badge">1</span> is updated.
        </p>
    </div>
</div>

<div class="page-header">
  <h1>Dual handled</h1>
</div>
<div class="row">
    <div class="span8">
        <p>
            Create two <code>select</code>s with the <code>option</code>s you wish to allow.
        </p>
{% highlight html %}
<div id="example">
    <select name="min">
        <option value="">Any</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E<option>
        <option value="f">F</option>
        <option value="g">G</option>
    </select>
    <select name="max">
        <option value="">Any</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E<option>
        <option value="f">F</option>
        <option value="g">G</option>
    </select>
    <div></div>
</div>
{% endhighlight %}
        <p>
            Then apply the <code>simplicitySelectSlider</code> widget to them.
        </p>
{% highlight javascript %}
$('#example div').simplicitySelectSlider({
    select:  '#example select[name="min"]',
    secondSelect: '#example select[name="max"]']
});
{% endhighlight %}
    </div>
    <div class="span4">
        <h3>Example</h3>
        <div id="exampleDualSlider" class="well">
            <label><span class="badge">1</span> min</label>
            <select name="min">
                <option value="">Any</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="g">G</option>
            </select>
            <label><span class="badge">2</span> max</label>
            <select name="max">
                <option value="">Any</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="g">G</option>
            </select>
            <label><span class="badge">3</span> slider</label>
            <div style="margin: 4em 0 2em 0;"> </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#exampleDualSlider div').simplicitySelectSlider({
                  select:  '#exampleDualSlider select[name="min"]',
                  secondSelect: '#exampleDualSlider select[name="max"]',
                  justifyEndLabels: false
                });
            });
        </script>
        <p>
            Change the value in <span class="badge">1</span> and see how the
            slider in <span class="badge">2</span> is updated.
        </p>
        <p>
            Move the slider in <span class="badge">2</span> and see how the
            selection in <span class="badge">1</span> is updated.
        </p>
    </div>
</div>

<div class="page-header">
  <h1>Options</h1>
</div>
<div class="row">
    <div class="span8">
        <p>
            There are a few different options to control the look and feel of
            the slider.
        </p>
        <div id="exampleSliderOptions" class="well">
            <div style="margin: 3em 1em 2em 1em;"> </div>
            <label><input name="showTicks" type="checkbox" class="checkbox" /> showTicks</label>
            <label><input name="showLabels" type="checkbox" class="checkbox" /> showLabels</label>
            <label><input name="centerLabels" type="checkbox" class="checkbox" /> centerLabels</label>
            <label><input name="justifyEndLabels" type="checkbox" class="checkbox" /> justifyEndLabels</label>
            <label><input name="showTooltip" type="checkbox" class="checkbox" /> showTooltip</label>
            <label><input name="centerTooltip" type="checkbox" class="checkbox" /> centerTooltip</label>
            <select id="exampleSliderCust" name="example">
                <option value="a">Alpha</option>
                <option value="b">Bravo</option>
                <option value="c">Charlie</option>
                <option value="d">Delta</option>
                <option value="e">Echo</option>
            </select>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#exampleSliderOptions div:first').simplicitySelectSlider({
                  select: '#exampleSliderOptions select'
                });
                $('#exampleSliderOptions select').hide();
                $('#exampleSliderOptions :checkbox').each(function (idx, elem) {
                    elem.checked = $('#exampleSliderOptions div:first').simplicitySelectSlider('option', elem.name);
                });
                $('#exampleSliderOptions :checkbox').click(function (evt) {
                    var name = evt.target.name;
                    var selected = evt.target.checked;
                    $('#exampleSliderOptions div:first').simplicitySelectSlider('option', name, selected);
                });
            });
        </script>
        <p>
            Additionally, for just the dual-handled slider.
        </p>
        <div id="exampleDualSliderOptions" class="well">
            <div style="margin: 3em 1em 2em 1em;"> </div>
            <label><input name="allowHandleOverlap" type="checkbox" class="checkbox" /> allowHandleOverlap</label>
            <label><input name="range" data-recreate='true' type="checkbox" class="checkbox" /> range (non dynamic ui.slider option)</label>
            <select id="exampleDualSliderCust" name="min">
                <option value="a">Alpha</option>
                <option value="b">Bravo</option>
                <option value="c">Charlie</option>
                <option value="d">Delta</option>
                <option value="e">Echo</option>
                <option value="f">Foxtrot</option>
                <option value="g">Golf</option>
                <option value="h">Hotel</option>
            </select>
            <select id="exampleDualSliderCust" name="max">
                <option value="a">Alpha</option>
                <option value="b">Bravo</option>
                <option value="c">Charlie</option>
                <option value="d">Delta</option>
                <option value="e">Echo</option>
                <option value="f">Foxtrot</option>
                <option value="g">Golf</option>
                <option value="h" selected="selected">Hotel</option>
            </select>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#exampleDualSliderOptions div:first').simplicitySelectSlider({
                  select: '#exampleDualSliderOptions select[name="min"]',
                  secondSelect: '#exampleDualSliderOptions select[name="max"]',
                  justifyEndLabels: false,
                  range: true
                });
                $('#exampleDualSliderOptions select').hide();
                $('#exampleDualSliderOptions :checkbox').each(function (idx, elem) {
                    elem.checked = $('#exampleDualSliderOptions div:first').simplicitySelectSlider('option', elem.name);
                });
                $('#exampleDualSliderOptions :checkbox').click(function (evt) {
                    var name = evt.target.name;
                    var selected = evt.target.checked;
                    var recreate = $(evt.target).data('recreate');
                    var element = $('#exampleDualSliderOptions div:first');
                    element.simplicitySelectSlider('option', name, selected);
                    if (recreate) {
                      var options = element.simplicitySelectSlider('option');
                      element.simplicitySelectSlider('destroy');
                      element.simplicitySelectSlider(options);
                    }
                });
            });
        </script>
    </div>
</div>