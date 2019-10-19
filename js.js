if(lightbox){

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
}


// isPlaying
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function() {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

// number string padding
function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
}


// get offset if any
if (typeof idx_start === 'undefined') {
    var idx_start = 1;
}

// prepare string for gallery
for (i = 0; i < pic_count; i++) {
  var idx = i + idx_start - 1;
  mstring += "<img src='"+ imgPrefix + pad(idx + 1, padsize) + suffix +"' alt='image'/>";
  if (!(i % 3)) {
    if (i != 0) {
      string += "</div>";
    }
    string += '<div class="row p-2">';
  }

  if(lightbox){
    string += '<div class="col-sm"><a href="' + imgPrefix + pad(idx + 1, padsize) + suffix + '" data-toggle="lightbox" data-viewport="{ selector: body, padding: 0 }"><img src="' + thumbPrefix + pad(idx + 1, padsize) + suffix +
    '" class="img-thumbnail rounded-sm border-0 p-0"></a></div>';
  } else {
    string += '<div class="col-sm"><a herf="#"><img src="' + thumbPrefix + pad(idx + 1, padsize) + suffix + '" class="mthumb img-thumbnail rounded-sm border-0 p-0"  data-index="' + i + '"></a></div>';
  }

}
// pad gallery not divisible by 3
var ip = pic_count % 3;
if (ip==2){
  string+='<div class="col-sm"></div>';
}
if (ip==1){
  string+='<div class="col-sm"></div>';
  string+='<div class="col-sm"></div>';
}



$(".MagicScroll").append(mstring);
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

// MAGIC SCROLL OPTIONS
var MagicScrollOptions = {};
var MagicID = "";
MagicScrollOptions = {
  // autostart: false,
  step: 1,
  lazyLoad: false,
  onReady: function() {
    console.log('onReady', (MagicID = arguments[0]));
  }
};
// var g;
$('.mthumb').click(function() {
  var idx = this.attributes['data-index'].value;
  MagicScroll.jump(MagicID, idx);
});

MagicScroll.start();
