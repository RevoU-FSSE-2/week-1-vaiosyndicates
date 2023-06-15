function testClick(pages) {

  if(pages == 'home') {
    document.getElementById('contents').innerHTML='<object type="text/html" class="inner-html" data="/page/home/index.html" ></object>';
  } else if (pages == 'about') {
    document.getElementById('contents').innerHTML='<object type="text/html" class="inner-html" data="/page/about/index.html" ></object>';
  } else {
    document.getElementById('contents').innerHTML='<object type="text/html" class="inner-html" data="/page/contact/index.html" ></object>';
  }
}

function activeClass(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
}