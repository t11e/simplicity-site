$('#q,#genre').simplicityInputs();

$('#genre').simplicityFacetedSelect().hide();
$('#genreFancy').simplicityFancySelect({
    select: '#genre'
});

$('#resetSearch').click(function () {
  $('body').simplicityState('reset');
});
