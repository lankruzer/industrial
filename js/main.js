/* Плавающее меню */
document.querySelector(".menu-btn").addEventListener("click", function() {
  document.querySelector(".menu").classList.toggle("close");
})

var menu = document.querySelector(".menu");
window.addEventListener("scroll", function(event) {
  if(window.pageYOffset > 500) {
    menu.classList.add("hidden");
  } else {
    if(menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    }
  }
})

/* кнопка вверх */
window.addEventListener("scroll", function(event) {
  if(document.querySelector(".btn-up")) {
    if(window.pageYOffset > 800) {
      document.querySelector(".btn-up").classList.add("show");
    } else {
      if(document.querySelector(".btn-up").classList.contains("show")){
        document.querySelector(".btn-up").classList.remove("show");
      }
    }
  }
})

/* Промышленные объекты */
var blocks_node = document.querySelectorAll(".block-industrial");
var length = blocks_node.length;
var blocks_arr = [length];
var btn_more_blocks = document.querySelector(".screen-6 .btn-more-blocks-js");
var blocks_count = 1;
  
for(var i = 0; i < length; i++) {
  blocks_arr[i] = blocks_node.item(i);
}

var count_blocks = 0;
var count_blocks_increment = 0;
if(window.innerWidth > 769) {
  count_blocks = 2;
  count_blocks_increment = 2;
} else {
  count_blocks = 1;
  count_blocks_increment = 1;
}
  
for(var i = 0; i < count_blocks; i++) {
  blocks_arr[i].classList.add("show");
}

btn_more_blocks.addEventListener("click", function(event) {
  event.preventDefault();
  count_blocks += count_blocks_increment;
  for(var i = 0; i < count_blocks; i++) {
    if(!blocks_arr[i].classList.contains("show")) {
      blocks_arr[i].classList.add("show");          
    }
  } 
})

/* Малоэтажное строительство */
var blocks_low_rise_node = document.querySelectorAll(".block-low-rise");
var low_rise_length = blocks_low_rise_node.length;
var blocks_low_rise_arr = [low_rise_length];
var btn_more_blocks_low_rise = document.querySelector(".screen-7 .btn-more-blocks-js");
var blocks_count_low_rise = 1;

for(var i = 0; i < low_rise_length; i++) {
  blocks_low_rise_arr[i] = blocks_low_rise_node.item(i);
}

for(var i = 0; i < count_blocks; i++) {
  blocks_low_rise_arr[i].classList.add("show");
}

btn_more_blocks_low_rise.addEventListener("click", function(event) {
  event.preventDefault();
  blocks_count_low_rise += count_blocks_increment;
  for(var i = 0; i < blocks_count_low_rise; i++) {
    if(!blocks_low_rise_arr[i].classList.contains("show")) {
      blocks_low_rise_arr[i].classList.add("show");          
    }
  } 
})


/* К.2 Увеличение фото (принимает элемент с сылкой на большую картинку) */
if(document.querySelector(".increase-img-js")) {
  var increase_img_node = document.querySelectorAll(".increase-img-js");
  var increase_img_count = increase_img_node.length 
  var increase_img_arr = [increase_img_count];

  for(var i = 0; i < increase_img_count; i++) {
    increase_img_arr[i] = increase_img_node.item(i);
  }
  
  increase_img_arr.forEach(function(item, i, increase_img_arr) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      zoom(item);
    })
  })

  function zoom(in_image) {
    var overlay = document.querySelector(".overlay");
    var image = overlay.childNodes.item(0);
    if(image) {
      overlay.removeChild(image);            
    }
    var img = document.createElement('img');
    var imgHref = in_image.getAttribute('href');
    img.setAttribute('src', imgHref);
    img.classList.add("zoom-img");
    overlay.classList.add("show");
    overlay.appendChild(img);
    if(overlay.classList.contains("show")) {
      overlay.addEventListener("click", function() {
        image = overlay.childNodes.item(0);
        if(image) {
          overlay.removeChild(image);            
        }   
        overlay.classList.remove("show");
      })
    }
  }
}

/* Несколько маленьких галерей */
var gallery_node = document.querySelectorAll(".gallery");
var gallery_count = gallery_node.length;
var gallery_arr = [length];
  
for (var i = 0; i < gallery_count; i++) {
  gallery_arr[i] = gallery_node.item(i)
}

gallery_arr.forEach(function(item, i, gallery_arr) {
  var gallery = item;

  if(gallery) {
    var small_imаges_node = gallery.querySelectorAll(".small-img");
    var length = small_imаges_node.length;
    var small_images = [length];
    var prev = gallery.querySelector(".slider-prev");
    var next = gallery.querySelector(".slider-next");
    var overlay = document.querySelector(".overlay");

    var count_slides = 0;
    if(window.innerWidth > 769) {
      count_slides = 3;
    } else {
      count_slides = 1;
    }

    
    for (var i = 0; i < length; i++) {
      small_images[i] = small_imаges_node.item(i)
      small_images[i].classList.remove("show");
      if(i < count_slides) {
        small_images[i].classList.add("show");
      }
    }

    prev.addEventListener("click", function(event) {
      var last;
      for(var i = 0; i < length; i++) {
        if(small_images[i].classList.contains("show")) {
          last = i;
        }
      }
      if((last-count_slides) < 0) {
      } else {
        small_images[last].classList.remove("show")
        small_images[last-count_slides].classList.add("show")
      }
    })

    next.addEventListener("click", function(event) {  
      for(var i = 0; i < length; i++) {
        if(small_images[i].classList.contains("show")) {
          break;
        }
      }        
      if((i+count_slides) >= length) {
      } else {
        small_images[i].classList.remove("show");
        small_images[i+count_slides].classList.add("show");
      }
    });
    
    if(gallery.querySelector("figure")) {
      for (var i = 0; i < length; i++) {
        if(small_images[i].classList.contains("show")) {
          if(count_slides > 1) {
          small_images[i+1].classList.add("center-item");
          } else {
            small_images[i].classList.add("center-item");
          }
          break;
        }
      }
      
      prev.addEventListener("click", function(event) {
        for (var i = 0; i < length; i++) {
          if(small_images[i].classList.contains("center-item")) {
            break;
          }
        }

        if((i-1) < 0) {
        } else {
          small_images[i].classList.remove("center-item");
          small_images[i-1].classList.add("center-item");
        }
      })
      
      next.addEventListener("click", function(event) {
        var next_center = 0;
        for (var i = 0; i < length; i++) {
          if(small_images[i].classList.contains("center-item")) {
            next_center = i;
          }
        }
      
        if((next_center+1) >= length) {
        } else {
          small_images[next_center].classList.remove("center-item");
          small_images[next_center+1].classList.add("center-item");
        }
      })
    }
  }
})