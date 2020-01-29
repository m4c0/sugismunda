hljs.initHighlightingOnLoad();

$(function() {
  $('#main img').not('.inline').wrap(function() {
    var image =$(this);
    if (!image.parent("a").length) {
      return "<a href='" + image[0].src + "' class='image' data-featherlight='image'></a>";
    }
  });
});
