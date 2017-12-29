var quiz = document.getElementById('quiz');

quiz.style.cursor = 'pointer';
quiz.onclick = function(){
  window.location.href = "quiz_0.html";
  //window.location.replace("quiz_0.html");
}

var hoz = document.getElementById('hoz');

hoz.style.cursor = 'pointer';
hoz.onclick = function(){
  window.location.href = "https://suppzupp.myshopify.com/blogs/humans-of-zupp";
  //window.location.replace("quiz_0.html");
}

var market = document.getElementById('market');

market.style.cursor = 'pointer';
market.onclick = function(){
  window.location.href = "https://suppzupp.myshopify.com/search"
}

var about = document.getElementById('about');

about.style.cursor = 'pointer';
about.onclick = function(){
  window.location.href = "about.html"
}

var go_back = document.getElementById('go_back');

go_back.style.cursor = 'pointer';
go_back.onclick = function(){
  window.location.href = "index.html";
}
