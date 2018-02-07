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

  var div4 = document.createElement("div");
  div4.className = "compartment";
  var dummy_statement2 = document.createElement("p");
  dummy_statement2.className = "statements";
  dummy_statement2.innerText = "Lorem Ipsum";
  var dummy_reasoning2 = document.createElement("p");
  dummy_reasoning2.className = "reasoning";
  dummy_reasoning2.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  div4.appendChild(dummy_statement2);
  div4.appendChild(dummy_reasoning2);
  wrapper.appendChild(div4);

  var div5 = document.createElement("div");
  div5.className = "compartment";
  var dummy_statement3 = document.createElement("p");
  dummy_statement3.className = "statements";
  dummy_statement3.innerText = "Lorem Ipsum";
  var dummy_reasoning3 = document.createElement("p");
  dummy_reasoning3.className = "reasoning";
  dummy_reasoning3.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  div5.appendChild(dummy_statement3);
  div5.appendChild(dummy_reasoning3);
  wrapper.appendChild(div5);

  var div6 = document.createElement("div");
  div6.className = "compartment";
  var dummy_statement4 = document.createElement("p");
  dummy_statement4.className = "statements";
  dummy_statement4.innerText = "Lorem Ipsum";
  var dummy_reasoning4 = document.createElement("p");
  dummy_reasoning4.className = "reasoning";
  dummy_reasoning4.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  div6.appendChild(dummy_statement4);
  div6.appendChild(dummy_reasoning4);
  wrapper.appendChild(div6);

  var div7 = document.createElement("div");
  div7.className = "compartment";
  var dummy_statement5 = document.createElement("p");
  dummy_statement5.className = "statements";
  dummy_statement5.innerText = "Lorem Ipsum";
  var dummy_reasoning5 = document.createElement("p");
  dummy_reasoning5.className = "reasoning";
  dummy_reasoning5.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  div7.appendChild(dummy_statement4);
  div7.appendChild(dummy_reasoning4);
  wrapper.appendChild(div7);

  information.appendChild(wrapper);
}

var setUp = function(){
  var recommendation_box = document.getElementById("recommendations");
  var recommendations_length = Object.keys(goal_object).length;

  var number_of_recommendations_box = document.createElement('div');
  var number_of_recommendations = document.createElement('h1');
  number_of_recommendations.className = "recommendation_box_number";
  number_of_recommendations.innerText = recommendations_length;
  number_of_recommendations_box.appendChild(number_of_recommendations);

  recommendation_box.appendChild(number_of_recommendations_box);

  var text_for_recommendation = document.createElement('div');
  var text = document.createElement('p');
  text.className = "recommendation_box_text";
  text.innerText = "recommendations";
  text_for_recommendation.appendChild(text);

  recommendation_box.appendChild(text_for_recommendation);
  // recommendation_box.innerText = recommendations.length + " Recommendations";
}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// INFO FOR FISH OIL

var fishOil = function(){
  information.innerText = "";
  var image = document.createElement("IMG");
  image.className = "banner";
  image.setAttribute("src", "../img/fishoilbanner.png");
  information.appendChild(image);
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  var div1 = document.createElement("div");
  div1.className = "compartment";
  var text1_1 = document.createElement("p");
  text1_1.className = "statements";
  text1_1.innerText = "You told us you were focusing on general health";
  var text1_2 = document.createElement("p");
  text1_2.className = "reasoning";
  text1_2.innerText = "Fish oil is one of the most widely researched supplements out there, and for good reason! There are many benefits associated with fish oil, and it’s incredibly useful for the general population and can help everyone from athletes to sedentary individuals.";


  var pic_container = document.createElement("div");
  pic_container.className = "frame";
  var image2 = document.createElement("IMG");
  image2.className = "banner2";
  image2.setAttribute("src", "../img/mountains.jpg");
  pic_container.appendChild(image2);

  var div2 = document.createElement("div");
  div2.className = "frame_content";
  var text2_1 = document.createElement("p");
  text2_1.className = "statements";
  text2_1.innerText = "Fish oil supports your overall health";
  var text2_2 = document.createElement("p");
  text2_2.className = "reasoning";
  text2_2.innerText = "Fish oil contains EPA and DHA, which are omega-3 fatty acids that have many benefits supported by repeated double-blind clinical trials. These are termed “essential fatty acids” (EFA’s) because we need them for proper function, but our bodies cannot produce them. Thus, we must obtain them through food or supplements.";

  div1.appendChild(text1_1);
  div1.appendChild(text1_2);
  div2.appendChild(text2_1);
  div2.appendChild(text2_2);
  information.appendChild(div1);
  pic_container.appendChild(div2);
  information.appendChild(pic_container);

  // dummy text
  var div3 = document.createElement("div");
  div3.className = "compartment";
  var dummy_statement = document.createElement("p");
  dummy_statement.className = "statements";
  dummy_statement.innerText = "Important when not eating enough fish";
  var dummy_reasoning = document.createElement("p");
  dummy_reasoning.className = "reasoning";
  dummy_reasoning.innerText = "The American Heart Association recommends people eat two servings of fish per week due to its beneficial omega-3 fatty acids. If you don’t often eat fish, supplementation may be beneficial to you. While there are a number of EFA supplements, such as flax and other oils, fish oil is one of the finest sources available.";

  div3.appendChild(dummy_statement);
  div3.appendChild(dummy_reasoning);
  information.appendChild(div3);

  var div4 = document.createElement("div");
  div4.className = "compartment";
  var dummy_statement2 = document.createElement("p");
  dummy_statement2.className = "statements";
  dummy_statement2.innerText = "Fish oil and muscle growth";
  var dummy_reasoning2 = document.createElement("p");
  dummy_reasoning2.className = "reasoning";
  dummy_reasoning2.innerText = "Perhaps more interesting for people looking to build muscle, EPA and DHA supplementation has been suggested to support muscle protein synthesis and limit muscle protein degradation. This can mean less muscle breakdown and more muscle growth.";
  var br = document.createElement("br");

  // for the second paragraph
  var div4_1 = document.createElement("div");
  var dummy_reasoning3 = document.createElement("p");
  dummy_reasoning3.className = "reasoning";
  dummy_reasoning3.innerText = "Perhaps more interesting for people looking to build muscle, EPA and DHA supplementation has been suggested to support muscle protein synthesis and limit muscle protein degradation. This can mean less muscle breakdown and more muscle growth.";
  div4_1.appendChild(dummy_reasoning3);

  div4.appendChild(dummy_statement2);
  div4.appendChild(dummy_reasoning2);
  information.appendChild(div4);
  information.appendChild(br);
  div4.appendChild(div4_1);
  //
  // var div5 = document.createElement("div");
  // div5.className = "compartment";
  // var dummy_statement3 = document.createElement("p");
  // dummy_statement3.className = "statements";
  // dummy_statement3.innerText = "Lorem Ipsum";
  // var dummy_reasoning3 = document.createElement("p");
  // dummy_reasoning3.className = "reasoning";
  // dummy_reasoning3.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  // div5.appendChild(dummy_statement3);
  // div5.appendChild(dummy_reasoning3);
  // wrapper.appendChild(div5);
  //
  // var div6 = document.createElement("div");
  // div6.className = "compartment";
  // var dummy_statement4 = document.createElement("p");
  // dummy_statement4.className = "statements";
  // dummy_statement4.innerText = "Lorem Ipsum";
  // var dummy_reasoning4 = document.createElement("p");
  // dummy_reasoning4.className = "reasoning";
  // dummy_reasoning4.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  // div6.appendChild(dummy_statement4);
  // div6.appendChild(dummy_reasoning4);
  // wrapper.appendChild(div6);
  //
  // var div7 = document.createElement("div");
  // div7.className = "compartment";
  // var dummy_statement5 = document.createElement("p");
  // dummy_statement5.className = "statements";
  // dummy_statement5.innerText = "Lorem Ipsum";
  // var dummy_reasoning5 = document.createElement("p");
  // dummy_reasoning5.className = "reasoning";
  // dummy_reasoning5.innerText = "Quisque venenatis nulla vitae tortor dictum ornare. Aenean a tincidunt augue. Curabitur sed facilisis augue, ultricies facilisis mauris. Donec quis fermentum sapien. Donec scelerisque ex ut augue varius tempus. Nam bibendum sed odio non laoreet. Duis fermentum tortor vel velit aliquet dictum sit amet dignissim libero. Nullam non nisl dapibus est tristique lobortis. Quisque egestas nibh id interdum eleifend. Quisque velit diam, consectetur quis est eu, facilisis viverra magna. Duis vel magna lectus. Nullam mattis ipsum orci, ut porttitor augue euismod sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor ut risus sed ornare. Praesent eget scelerisque lacus. Nunc pharetra, libero sit amet posuere vulputate, felis tortor eleifend urna, molestie malesuada nibh lectus id metus.";
  // div7.appendChild(dummy_statement4);
  // div7.appendChild(dummy_reasoning4);
  // wrapper.appendChild(div7);
  //
  // information.appendChild(wrapper);
}
