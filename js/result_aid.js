var first_show = function(){
  information.innerText = "";
  var image = document.createElement("IMG");
  image.className = "banner";
  image.setAttribute("src", "../img/banner.png");
  information.appendChild(image);
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  var div1 = document.createElement("div");
  div1.className = "compartment";
  var text1_1 = document.createElement("p");
  text1_1.className = "statements";
  text1_1.innerText = "You live above 37 latitude";
  var text1_2 = document.createElement("p");
  text1_2.className = "reasoning";
  text1_2.innerText = "It's hard to get the vitamin D you need from sun exposure alone if you live in the northern half of the U.S., based on weather and cloud cover patterns.";
  var div2 = document.createElement("div");
  div2.className = "compartment";
  var text2_1 = document.createElement("p");
  text2_1.className = "statements";
  text2_1.innerText = "Vitamin D supports healthier bones";
  var text2_2 = document.createElement("p");
  text2_2.className = "reasoning";
  text2_2.innerText = "Getting enough Vitamin D is essential to overall health and maintaining healthy bones. A recent study done in 2011 showed that over 70% of Americans are not getting enough Vitamin D.";
  div1.appendChild(text1_1);
  div1.appendChild(text1_2);
  div2.appendChild(text2_1);
  div2.appendChild(text2_2);
  wrapper.appendChild(div1);
  wrapper.appendChild(div2);

  // dummy text
  var div3 = document.createElement("div");
  div3.className = "compartment";
  var dummy_statement = document.createElement("p");
  dummy_statement.className = "statements";
  dummy_statement.innerText = "Lorem Ipsum";
  var dummy_reasoning = document.createElement("p");
  dummy_reasoning.className = "reasoning";
  dummy_reasoning.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  div3.appendChild(dummy_statement);
  div3.appendChild(dummy_reasoning);
  wrapper.appendChild(div3);

  information.appendChild(wrapper);
}
