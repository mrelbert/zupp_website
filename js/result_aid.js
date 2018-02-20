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
  image2.setAttribute("src", "../img/careof.jpg");
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

var multiVitamin = function(){
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
  text1_2.innerText = "The body requires essential vitamins and minerals to function, but most people don't perfectly meet the daily amounts of each recommended by the USDA. Taking a multivitamin is one way to help ensure that you are meeting those goals.";

  var pic_container = document.createElement("div");
  pic_container.className = "multiVitamin_frame row";
  // var image2 = document.createElement("IMG");
  // image2.className = "banner2";
  // image2.setAttribute("src", "../img/careof.jpg");
  // pic_container.appendChild(image2);
  var row1 = document.createElement("div");
  var row2 = document.createElement("div");
  row1.className = "row";
  row2.className = "row";

  var title = document.createElement("p");
  title.className = "multiVitamin col align-self-center";
  title.innerText = "What's in a multivitamin?";
  row1.appendChild(title);

  var div2 = document.createElement("div");
  div2.className = "col fontWhite";
  var text2_1 = document.createElement("p");
  text2_1.className = "multiVitamin_statements";
  text2_1.innerText = "Vitamins";
  var text2_2 = document.createElement("p");
  text2_2.className = "multiVitamin_reasoning";
  text2_2.innerHTML = "All vitamins are required by our bodies for survival. Vitamins control the chemical reactions within the body to convert food into energy and living tissue. They are either <strong>water soluble</strong> which must be taken daily since they are not stored in the body (vitamin C and all of the B vitamins) or <strong>fat soluble</strong>, which are stored in the body (vitamins A, D, E, and K).";

  var divA = document.createElement("div");
  divA.className = "col fontWhite";
  var textA_1 = document.createElement("p");
  textA_1.className = "multiVitamin_statements";
  textA_1.innerText = "Minerals";
  var textA_2 = document.createElement("p");
  textA_2.className = "multiVitamin_reasoning";
  textA_2.innerHTML = "Minerals are categorized as <strong>major/macro</strong> and <strong>trace/micro</strong> minerals. Major minerals we need in dosages greater than 100 mg a day. The trace minerals we only need 'trace' amounts of daily to suffice. Minerals are used to produce necessary hormones. A simpler way to remember this is that all minerals are found on the periodic table!";


  div1.appendChild(text1_1);
  div1.appendChild(text1_2);

  div2.appendChild(text2_1);
  div2.appendChild(text2_2);
  divA.appendChild(textA_1);
  divA.appendChild(textA_2);

  information.appendChild(div1);
  row2.appendChild(div2);
  row2.appendChild(divA);

  pic_container.appendChild(row1);
  pic_container.appendChild(row2);

  information.appendChild(pic_container);

  var div4 = document.createElement("div");
  div4.className = "compartment";
  var dummy_statement2 = document.createElement("p");
  dummy_statement2.className = "statements";
  dummy_statement2.innerText = "Benefits of a multivitamin";
  var dummy_reasoning2 = document.createElement("p");
  dummy_reasoning2.className = "reasoning";
  dummy_reasoning2.innerText = "As mentioned previously, the human body must be given a wide and complex variety of vital nutrients to complete all the tasks it has in a normal day. Becoming deficient in any one of these essential vitamins or minerals causes breakdown of the metabolic pathway that produces optimum efficiency and performance can go down rapidly.";
  var br = document.createElement("br");

  // for the second paragraph
  var div4_1 = document.createElement("div");
  var dummy_reasoning3 = document.createElement("p");
  dummy_reasoning3.className = "reasoning";
  dummy_reasoning3.innerText = "Bodybuilders, athletes, and people that lead active lifestyles need even more nutrients than the average non-active person. This is why it is widely accepted that a proper multivitamin is the foundation of a great supplement strategy and should be the first thing you take care of. Without the proper amounts of vitamins and minerals in your body (whether through your diet or through a multivitamin), other supplements will not be as effective.";
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

var carnitine = function(){
  information.innerText = "";
  var image = document.createElement("IMG");
  image.className = "banner";
  image.setAttribute("src", "../img/fishoilbanner.png");
  information.appendChild(image);
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  var div4 = document.createElement("div");
  div4.className = "compartment";
  var dummy_statement2 = document.createElement("p");
  dummy_statement2.className = "statements";
  dummy_statement2.innerText = "You told us you wanted to focus on fat loss";
  var dummy_reasoning2 = document.createElement("p");
  dummy_reasoning2.className = "reasoning";
  dummy_reasoning2.innerText = "L-carnitine is a widely researched and naturally occurring amino acid derivative that's often taken as a weight loss supplement. It plays a crucial role in the production of energy by transporting fatty acids into your cells' mitochondria. The mitochondria act as engines within your cells, burning these fats to create usable energy.";
  var br = document.createElement("br");

  // for the second paragraph
  var div4_1 = document.createElement("div");
  var dummy_reasoning3 = document.createElement("p");
  dummy_reasoning3.className = "reasoning";
  dummy_reasoning3.innerText = "Your body can actually produce L-carnitine out of the amino acids lysine and methionine. For your body to produce it in sufficient amounts, you also need plenty of vitamin C. In addition to the L-carnitine produced in your body, you can also obtain small amounts from your diet by eating animal products like meat or fish, however vegans or people with certain genetic issues are more likely to be deficient as they are unable to produce or obtain enough.";
  div4_1.appendChild(dummy_reasoning3);

  div4.appendChild(dummy_statement2);
  div4.appendChild(dummy_reasoning2);
  information.appendChild(div4);
  information.appendChild(br);
  div4.appendChild(div4_1);


  var pic_container = document.createElement("div");
  pic_container.className = "carnitine_frame row";

  var div2 = document.createElement("div");
  // div2.className = "frame_content";
  // var text2_1 = document.createElement("p");
  // text2_1.className = "statements";
  // text2_1.innerText = "Fish oil supports your overall health";
  // var text2_2 = document.createElement("p");
  // text2_2.className = "reasoning";
  // text2_2.innerText = "Fish oil contains EPA and DHA, which are omega-3 fatty acids that have many benefits supported by repeated double-blind clinical trials. These are termed “essential fatty acids” (EFA’s) because we need them for proper function, but our bodies cannot produce them. Thus, we must obtain them through food or supplements.";
  div2.className = "carnitine_frame";
  var title = document.createElement("p");
  title.className = "carnitine_title";
  title.innerText = "Different forms of L-carnitine"
  var br = document.createElement("br");

  div2.appendChild(title);
  div2.appendChild(br);

  var array = ["<strong>Propionyl-L-Carnitine</strong>: This form is well-suited for blood-flow-related issues such as peripheral vascular disease and high blood pressure. It may work via the production of nitric oxide, which improves blood flow.",
               "<strong>L-Carnitine L-Tartrate</strong>: This is one of the most common forms found in sports supplements, due to its rapid absorption rate. It may help with exercise-related factors such as muscle soreness and recovery.",
               "<strong>Acetyl-L-Carnitine</strong>: Often called ALCAR, this is possibly the most effective form for the brain. It can be found throughout the central nervous system, where it plays a role in producing energy and produces the important neurotransmitter acetylcholine.",
               "<strong>D-Carnitine</strong>: This D-form of carnitine is biologically inactive and isn’t typically sold as a supplement"
              ];

  var list = document.createElement("ul");
  list.className = "carnitine_list";
  for(var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');
    item.innerHTML = array[i];
    item.className = "carnitine_item";
    // Set its contents:
    // Add it to the list:
    var br = document.createElement("br");
    list.appendChild(item);
    list.appendChild(br);
  }

  var last_paragraph = document.createElement("p");
  last_paragraph.className = "carnitine_item"
  last_paragraph.innerText = "The first 3 'L-forms' of carnitine are all similar and similarly effective. However, L-Carnitine L-Tartrate is the most popular form found in most sports supplements."
  list.appendChild(last_paragraph);

  div2.appendChild(list);
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

var greenTeaExtract = function(){
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
  text1_1.innerText = "You told us you were interested in fat loss";
  var text1_2 = document.createElement("p");
  text1_2.className = "reasoning";
  text1_2.innerText = "Green tea extract is a heavily studied compound and is a staple in the formulas of top fat-burning supplements with good reason! Green tea is tea made with only the leaves of a special plant native to Asia, the Camellia sinensis. Black tea is actually made from the same plant but the two teas are different because of the way they are processed. Green teas are the least processed and the method preserves more of the nutrients compared to the methods of other teas. Due to this, green tea extract has been found to have many fat-burning properties that have been tested through research to this day.";

  var pic_container = document.createElement("div");
  pic_container.className = "greenTeaExtract_frame row";

  var div2 = document.createElement("div");
  var text2_1 = document.createElement("p");
  text2_1.className = "greenTeaExtract_title";
  text2_1.innerText = "The Science of Burning Fat with Green Tea Extract";
  var text2_2 = document.createElement("p");
  text2_2.className = "greenTeaExtract_reasoning";
  text2_2.innerText = "Green tea leaves contain antioxidants called catechins, some of which can burn fat. The most potent catechin, epigallocatechin-3-gallate, or EGCG, has been said to increase resting metabolism and stimulate fat-burning. It’s role as a fat burner comes from its ability to trigger enzymes that get adipose cells to release their stored fat and increase the amount of fat used for energy.";
  var text2_3 = document.createElement("p");
  text2_3.className = "greenTeaExtract_reasoning";
  text2_3.innerText = "It has also been shown that there is a synergistic interaction between the caffeine in green tea and the EGCG in green tea, which revs up the body's use of calories as energy. The combination of caffeine and EGCG found in green tea was further shown in the British Journal of Nutrition to significantly increase the resting metabolic rate. This results in an increase in your 24-hour energy expenditure to create the perfect environment for maximum fat burning.";


  div1.appendChild(text1_1);
  div1.appendChild(text1_2);
  div2.appendChild(text2_1);
  div2.appendChild(text2_2);
  div2.appendChild(text2_3);
  information.appendChild(div1);
  pic_container.appendChild(div2);
  information.appendChild(pic_container);

  // dummy text
  var div3 = document.createElement("div");
  div3.className = "compartment";
  var dummy_statement = document.createElement("p");
  dummy_statement.className = "statements";
  dummy_statement.innerText = "Should I take a supplement or drink green tea?";
  var dummy_reasoning = document.createElement("p");
  dummy_reasoning.className = "reasoning";
  dummy_reasoning.innerText = "A study published in an issue of the American Journal of Clinical Nutrition showed that the absorption of polyphenols was enhanced when they were given to healthy individuals as a green tea extract supplement in capsule form, which may indicate that taking it as a supplement may be more beneficial than drinking it in tea form.";

  div3.appendChild(dummy_statement);
  div3.appendChild(dummy_reasoning);
  information.appendChild(div3);

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

var glutamine = function(){
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
  text1_2.innerText = "Glutamine is one of the most widely researched supplements out there, and for good reason! There are many benefits associated with fish oil, and it’s incredibly useful for the general population and can help everyone from athletes to sedentary individuals.";


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

var creatine = function(){
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
  text1_2.innerText = "Creatine is one of the most widely researched supplements out there, and for good reason! There are many benefits associated with fish oil, and it’s incredibly useful for the general population and can help everyone from athletes to sedentary individuals.";


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

var wheyProtein = function(){
  information.innerText = "";
  var image = document.createElement("IMG");
  image.className = "banner";
  image.setAttribute("src", "../img/fishoilbanner.png");
  information.appendChild(image);
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  var div1 = document.createElement("div");
  div1.className = "wheyCompartment";
  var text1_1 = document.createElement("p");
  text1_1.className = "statements";
  text1_1.innerText = "You told us you were looking to gain muscle and strength";
  var text1_2 = document.createElement("p");
  text1_2.className = "wheyProteinReasoning";
  text1_2.innerText = "Of all the forms and types and strands of the much-loved protein, whey protein is the King. Its proposed benefits on muscle development make it hugely popular and recognisable as one of the most common and widespread sports nutrition supplements";

  var div1_A = document.createElement("div");
  div1_A.className = "compartment";
  var text1_1_A = document.createElement("p");
  text1_1_A.className = "statements";
  text1_1_A.innerText = "A short history lesson";
  var text1_2_A = document.createElement("p");
  text1_2_A.className = "reasoning";
  text1_2_A.innerText = "Whey used to be considered a waste by-product of cheese and curd manufacturing. Approximately 20% of the protein in cows’ milk is whey. During the industrial production of cheese and curd, milk goes through a structured process which includes pasteurisation, inoculation and incubation before Rennet extract is added. The addition of Rennet extract (a complex of enzymes taken from the stomachs of newborn calves) assists the coagulation of milk and separates it into curds and whey.";

  ////////////////////////////////////////
  var pic_container = document.createElement("div");
  pic_container.className = "multiVitamin_frame row";
  var row1 = document.createElement("div");
  var row2 = document.createElement("div");
  row1.className = "row";
  row2.className = "row";

  var title = document.createElement("p");
  title.className = "multiVitamin col align-self-center";
  title.innerText = "The Difference Between Whey Concentrate & Isolate";
  row1.appendChild(title);

  var div2 = document.createElement("div");
  div2.className = "col fontWhite";
  var text2_1 = document.createElement("p");
  text2_1.className = "multiVitamin_statements";
  text2_1.innerText = "Concentrate";
  var text2_2 = document.createElement("p");
  text2_2.className = "multiVitamin_reasoning";
  text2_2.innerHTML = "The newly separated mixture is then filtered and neutralised with citric acid. Continuous filtration of this liquid whey concentrates its protein percentage down to 80% protein. Further microfiltration can boost protein concentration up to 90%! The liquid whey solution is then warmed and spray dried to become a whey protein powder. This is often described as whey Concentrate and still includes a level of fat and carbohydrates (in the form of lactose). This form of protein can have between 29-90% total protein but 70% and 80% concentrations are the most commonly seen in sports nutrition supplements.";

  var divA = document.createElement("div");
  divA.className = "col fontWhite";
  var textA_1 = document.createElement("p");
  textA_1.className = "multiVitamin_statements";
  textA_1.innerText = "Isolate";
  var textA_2 = document.createElement("p");
  textA_2.className = "multiVitamin_reasoning";
  textA_2.innerHTML = "There are also variations on whey protein based upon different manufacturing processes which are applied to the whey. These are labelled as Isolate (where water is removed along with all lactose and cholesterol leading to a 95% protein concentration) and Hydrolysate (where the whey is partially pre-digested with enzymes to reduce the size of the peptide molecules and to accelerate absorption and amino acid availability).. Whey protein hydrolysate is commonly suggested to be the optimal form of whey protein.";

  div2.appendChild(text2_1);
  div2.appendChild(text2_2);
  divA.appendChild(textA_1);
  divA.appendChild(textA_2);

  information.appendChild(div1);
  row2.appendChild(div2);
  row2.appendChild(divA);

  pic_container.appendChild(row1);
  pic_container.appendChild(row2);

  information.appendChild(pic_container);

  ////////////////////////////////////////
  div1.appendChild(text1_1);
  div1.appendChild(text1_2);
  div1_A.appendChild(text1_1_A);
  div1_A.appendChild(text1_2_A);
  information.appendChild(div1);
  information.appendChild(div1_A);
  information.appendChild(pic_container);

  // dummy text
  var div3 = document.createElement("div");
  div3.className = "compartment";
  var dummy_statement = document.createElement("p");
  dummy_statement.className = "statements";
  dummy_statement.innerText = "Whey protein & muscle building";
  var dummy_reasoning = document.createElement("p");
  dummy_reasoning.className = "reasoning";
  dummy_reasoning.innerText = "One of whey protein powder's most sought-after benefits is its ability to increase muscle mass when combined with resistance training. A study published in 2013 in the 'Journal of the American College of Nutrition' demonstrated this point by comparing whey protein to another source of protein -- soy. The study concluded that daily supplementation of whey protein was more effective in promoting lean mass gains when compared to soy protein. According to the researchers, the high quality of whey and its rich concentrations of amino acids, particularly leucine, make it ideal for increasing protein synthesis – muscle building -- when combined with resistance training.";

  div3.appendChild(dummy_statement);
  div3.appendChild(dummy_reasoning);
  information.appendChild(div3);

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

var preWorkout = function(){
  // banner
  information.innerText = "";
  var image = document.createElement("IMG");
  image.className = "banner";
  image.setAttribute("src", "../img/fishoilbanner.png");
  information.appendChild(image);
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  // first div
  var div1 = document.createElement("div");
  div1.className = "compartment";
  var text1_1 = document.createElement("p");
  text1_1.className = "statements";
  text1_1.innerText = "You told us you were focusing on general health";
  var text1_2 = document.createElement("p");
  text1_2.className = "reasoning";
  text1_2.innerText = "Pre workout is one of the most widely researched supplements out there, and for good reason! There are many benefits associated with fish oil, and it’s incredibly useful for the general population and can help everyone from athletes to sedentary individuals.";

  div1.appendChild(text1_1);
  div1.appendChild(text1_2);
  information.appendChild(div1);

  // picture container
  var pic_container = document.createElement("div");
  pic_container.className = "preWorkout_frame row";

  var div2 = document.createElement("div");
  div2.className = "frame_content";
  var row1 = document.createElement("div");
  row1.className = "row";
  var row2 = document.createElement("div");
  row2.className = "row";

  // COLUMN 1
  var column_1 = document.createElement("div");
  column_1.className = "col-md-6 noPadding";

  var col1_in_column_1 = document.createElement("div");
  col1_in_column_1.className = "col-md-4 smallImage noPadding";
  // col1_in_column_1.innerText = "COL MD 4COL MD 4COL MD 4COL MD 4COL MD 4COL MD 4";

  var col2_in_column_1 = document.createElement("div");
  col2_in_column_1.className = "col-md-8 noPadding";
  var caffeine = document.createElement("p");
  caffeine.innerText = "Caffeine";
  var caffeine_br = document.createElement("br");
  var caffeine_info = document.createElement("p");
  caffeine_info.innerText = "Caffeine has repeatedly been shown to be an effective ergogenic aid (performance booster) in both endurance exercise and short bouts of maximal exercise (e.g., sprints). Caffeine has also been shown to increase workloads by decreasing the rate of fatigue and lowering the perception of effort.";
  caffeine_info.className = "smallText";
  col2_in_column_1.appendChild(caffeine);
  col2_in_column_1.appendChild(caffeine_info);

  var row_in_column_1 = document.createElement("div");
  row_in_column_1.className = "row";
  row_in_column_1.appendChild(col1_in_column_1);
  row_in_column_1.appendChild(col2_in_column_1);
  column_1.appendChild(row_in_column_1);

  // COLUMN 2
  var column_2 = document.createElement("div");
  column_2.className = "col-md-6";
  column_2.innerText = "2222222222222222222222222222222222222222222222222222222222222222222";
  row1.appendChild(column_1);
  row1.appendChild(column_2);

  // COLUMN 3
  var column_3 = document.createElement("div");
  column_3.className = "col-md-6";
  column_3.innerText = "3333333333333333333333333333333333333333333334";

  // COLUMN 4
  var column_4 = document.createElement("div");
  column_4.className = "col-md-6";
  column_4.innerText = "4444444444444444444444444444444444444444444444444444444444444444444444444";
  row2.appendChild(column_3);
  row2.appendChild(column_4);
  // var text2_1 = document.createElement("p");
  // text2_1.className = "statements";
  // text2_1.innerText = "Test";
  // var text2_2 = document.createElement("p");
  // text2_2.className = "reasoning";
  // text2_2.innerText = "Test";
  //
  // div2.appendChild(text2_1);
  // div2.appendChild(text2_2);
  div2.appendChild(row1);
  div2.appendChild(row2);
  pic_container.appendChild(div2);

  information.appendChild(pic_container);

  // dummy text
  // var div3 = document.createElement("div");
  // div3.className = "compartment";
  // var dummy_statement = document.createElement("p");
  // dummy_statement.className = "statements";
  // dummy_statement.innerText = "Important when not eating enough fish";
  // var dummy_reasoning = document.createElement("p");
  // dummy_reasoning.className = "reasoning";
  // dummy_reasoning.innerText = "The American Heart Association recommends people eat two servings of fish per week due to its beneficial omega-3 fatty acids. If you don’t often eat fish, supplementation may be beneficial to you. While there are a number of EFA supplements, such as flax and other oils, fish oil is one of the finest sources available.";
  //
  // div3.appendChild(dummy_statement);
  // div3.appendChild(dummy_reasoning);
  // information.appendChild(div3);
}

var bcaa = function(){
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
  text1_2.innerText = "BCAA is one of the most widely researched supplements out there, and for good reason! There are many benefits associated with fish oil, and it’s incredibly useful for the general population and can help everyone from athletes to sedentary individuals.";


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

var b_vitamins = function(){
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
