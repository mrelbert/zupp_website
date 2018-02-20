var typed = new Typed('#typed', {
  strings: ["HI, WELCOME TO ZUPP. </br>WE'RE HERE TO REIMAGINE THE SUPPLEMENT BUYING EXPERIENCE. </br> WHAT ARE YOU LOOKING FOR?"],
  smartBackspace: true,
  backDelay: 100,
  showCursor: false,
  typeSpeed: 30,
  startDelay: 100,
  backSpeed: 10
});

function inputBubbles(){
  // where to append
  var root = document.getElementById("here");

  // bubbles
  var div1 = document.createElement("div");
  div1.className = "col bubble animated fadeInUp";
  div1.id = "market"
  div1.innerText = "SPECIFIC ITEM/ITEMS";
  div1.style.cursor = 'pointer';
  div1.onclick = function(){
    window.location.href = "https://suppzupp.myshopify.com/search"
  }

  var div2 = document.createElement("div");
  div2.className = "col bubble animated fadeInUp";
  div2.id = "about"
  div2.innerText = "WHAT EXACTLY IS ZUPP";
  div2.style.cursor = 'pointer';
  div2.onclick = function(){
    window.location.href = "about.html"
  }

  var div3 = document.createElement("div");
  div3.className = "col bubble animated fadeInUp";
  div3.id = "quiz"
  div3.innerText = "I'M NOT SURE. I'D LIKE HELP.";
  div3.style.cursor = 'pointer';
  div3.onclick = function(){
    window.location.href = "pre_quiz.html";
  }

  var div4 = document.createElement("div");
  div4.className = "col bubble animated fadeInUp";
  div4.id = "hoz"
  div4.innerHTML = "INSPIRATION </br> (HUMANS OF ZUPP)";
  div4.style.cursor = 'pointer';
  div4.onclick = function(){
    window.location.href = "https://suppzupp.myshopify.com/blogs/humans-of-zupp";
  }

  root.appendChild(div1);
  root.appendChild(div2);
  root.appendChild(div3);
  root.appendChild(div4);
}

setTimeout(function(){
  inputBubbles();
}, 5000)
