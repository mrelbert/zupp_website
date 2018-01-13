var quiz = document.getElementById('quiz');
quiz.style.cursor = 'pointer';
quiz.onclick = function(){
  window.location.href = "pre_quiz.html";
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
