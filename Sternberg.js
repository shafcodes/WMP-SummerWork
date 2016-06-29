function circleofletters(number_of_letters) {
  var degree_increments = 360/number_of_letters;
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var text = [];
  for( var i=0; i < number_of_stim; i++ ){
        text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    return text;}
  for(var k=0, k<text.length, k++){
    var charstring = "char" + string(k+1)
    var element = document.getElementById("circle").createElement("span");
    element.setAttribute("class", charstring);
    document.getElementById("circle").innerHTML = text[k]; //<h1 id="charstring"> text[k] </h1>
  }

}
