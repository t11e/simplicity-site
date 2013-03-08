---
layout: default
nav: userguide
nav2: simplicitySlider
title: simplicitySlider
subhead: simplicitySlider
lead: Handles are a drag.
---

{% include userguide/nav.html %}

<div class="page-header">
  <h1>simplicitySlider</h1>
</div>
<div class="row">
    <div class="span8">
        <p>
            A <a href="http://jqueryui.com/slider/">$.ui.slider</a> that is bound to one (or two) <code>input</code>s.
            Best used when you have a large number of choices or the <code>$.simplicitySelectSlider</code>
            doesn't meet your needs.
        </p>
    </div>
</div>

<div class="page-header">
  <h1>Single Handled</h1>
</div>
<div class="row">
    <div class="span8">
        <p>
            Create an <code>input</code> to hold the selection and a target <code>div</code> for the slider.
        </p>
{% highlight html %}
<div id="example">
    <input name="example" />
    <div></div>
</div>
{% endhighlight %}
        <p>
            Then apply the <code>simplicitySelectSlider</code> widget to it.
        </p>
{% highlight javascript %}
$('#example div').simplicitySlider({
    input: '#example input',
    min: 0,
    max: 100,
    any: 0
});
{% endhighlight %}
    </div>
    <div class="span4">
        <h3>Example</h3>
        <div id="exampleSlider" class="well">
            <label><span class="badge">1</span> select</label>
            <input name="example" />
            <label><span class="badge">2</span> slider</label>
            <div> </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#exampleSlider div').simplicitySlider({
                  input: '#exampleSlider input',
                  min: 0,
                  max: 100,
                  any: 0
                });
            });
        </script>
        <p>
            Change the value in <span class="badge">1</span> and see how the
            slider in <span class="badge">2</span> is updated.
        </p>
        <p>
            Move the slider in <span class="badge">2</span> and see how the
            value in <span class="badge">1</span> is updated.
        </p>
    </div>
</div>

<div class="page-header">
  <h1>Dual handled</h1>
</div>
<div class="row">
    <div class="span8">
        <p>
            Create two <code>input</code>s to hold the selection and a target <code>div</code> for the slider.
        </p>
{% highlight html %}
<div id="example">
    <input name="min" />
    <input name="max" />
    <div></div>
</div>
{% endhighlight %}
        <p>
            Then apply the <code>simplicitySlider</code> widget to them.
        </p>
{% highlight javascript %}
$('#example div').simplicitySelectSlider({
    input:  ['#example input[name="min"]', '#example input[name="max"]'],
    min: 0,
    max: 100,
    values: [0, 100],
    any: [0, 100],
    range: true
});
{% endhighlight %}
    </div>
    <div class="span4">
        <h3>Example</h3>
        <div id="exampleDualSlider" class="well">
            <label><span class="badge">1</span> min</label>
            <input name="min" />
            <label><span class="badge">2</span> max</label>
            <input name="max" />
            <label><span class="badge">3</span> slider</label>
            <div> </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#exampleDualSlider div').simplicitySlider({
                  input: ['#exampleDualSlider input[name="min"]', '#exampleDualSlider input[name="max"]'],
                  min: 0,
                  max: 100,
                  values: [0, 100],
                  any: [0, 100],
                  range: true
                });
            });
        </script>
        <p>
            Change the values in <span class="badge">1</span> or <span class="badge">2</span> and see how the
            slider in <span class="badge">3</span> is updated.
        </p>
        <p>
            Move the slider in <span class="badge">3</span> and see how the
            values in <span class="badge">1</span> and <span class="badge">2</span> are updated.
        </p>
    </div>
</div>
