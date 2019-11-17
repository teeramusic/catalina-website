

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
  //  $(this).ekkoLightbox();
  });

var string ="";
var  mstring = "";

// isPlaying
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function() {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

// number string padding
function pad(num, size) {
  if(!size) return num;
  var s = "000000000" + num;
  return s.substr(s.length - size);
}

// prepare string for gallery
for (i = 0; i < pic_count; i++) {
  var idx = i + idx_start - 1;
    string += '<div class="gallery-item p-1 p-sm-2"><a href="' + imgPrefix + pad(idx + 1, padsize) + suffix + '" data-toggle="lightbox"><img src="' + imgPrefix + pad(idx + 1, padsize) + suffix +
    '" class="rounded-sm border-0"></a></div>'
}

$(".gallery").append(string + '</div>');
var firsttime = true;
$("body").click(function() {
  if (firsttime) {
    firsttime = false;
    $("video").prop('muted', false);
  }
});

// add contorls to video on hover
$("video").mouseenter(function() {
  $("video").attr('controls', '');
}).mouseleave(function() {
  $("video").removeAttr('controls');
});

var $grid = $('.gallery').isotope({
  itemSelector: '.gallery-item',

  // layout mode options
  masonry: {
    columnWidth: '.isotope-size'
  }
});

$('img').on('load', function() {
  $grid.isotope('layout');
  console.log('layout');
});
