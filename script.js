var which = "";
function run(){
    which = $("#oop").val(); 
    console.log(which);
    $("#forms").html('');
    $('#answer').html('');
    switch(which){
        case "1":
            $("#forms").html("Number: <input id='enter1' type='text'>");
            break;
        case "2":
            $('#forms').html("Number: <input id='enter1' type='text'>");
            break;
        case "3":
            $('#forms').html("Number: <input id='enter1' type='text'>");
            break;
        case "4":
            $('#forms').html("String: <input id='enter1' type='text'>");
            break;
        case "5":
            $('#forms').html("String: <input id='enter1' type='text'>");
            break;
        case "6":
            $('#forms').html("String: <input id='enter1' type='text'>");
            break;
        case "7":
            $('#forms').html("Number: <input id='enter1' type='text'><br>Number: <input id='enter2' type='text'>");
            break;
        case "8":
            $('#forms').html("String: <input id='enter1' type='text'>");
            break;
        case "9":
            $('#forms').html("Number: <input id='enter1' type='text'>");
            break;
        case "10":
            $('#forms').html("String: <input id='enter1' type='text'>");
            break;
    }
    $('#forms').append("<button onclick='go()'>Go</button>");
}
function go(){
    $("#answer").html("");
    switch(which){
        case "1":
            $("#answer").append(triangle($("#enter1").val()));
            break;
        case "2":
            $("#answer").append(fibonacci($("#enter1").val()));
            break;
        case "3":
            $("#answer").append(sumDigits($("#enter1").val()));
            break;
        case "4":
            $("#answer").append(countX($("#enter1").val()));
            break;
        case "5":
            $("#answer").append(countHi($("#enter1").val()));
            break;
        case "6":
            $("#answer").append(noX($("#enter1").val()));
            break;
        case "7":
            $("#answer").append( powerN($("#enter1").val(), $("#enter2").val() ));
            break;
        case "8":
            $("#answer").append(allStar($("#enter1").val()));
            break;
        case "9":
            $("#answer").append(bunnyEars2($("#enter1").val()));
            break;
        case "10":
            $("#answer").append(endX($("#enter1").val()));
            break;
                    
    }
}
function triangle(rows) {
  if(rows == 0){
    return 0;
  }else{
    return rows + triangle(rows-1);
  }
}
function fibonacci(n) {
  if(n==0){
    return 0;
  }else if(n == 1){
    return 1;
  }else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
function sumDigits(n) {
  if(n%10 == 0 && n/10 == 0){
    return 0;
  }else{
    return n%10 + sumDigits(Math.floor(n/10));
  }
}
function countX(str) {
  if(str.length == 0){
    return 0;
  }else{
    var l = str.substring(0,1);
    if(l == "x"){
      return 1 + countX(str.substring(1));
    }else{
      return 0 + countX(str.substring(1, str.length));
    }
  }
}
function countHi(str) {
  if(str.length < 2){
    return 0;
  }else{
    if(str.substring(0,2) == "hi"){
      return 1 + countHi(str.substring(1));
    }else{
      return countHi(str.substring(1));
    }
  }
}
function noX(str){
  if(str.length == 0){
    return "";
  }else{
    if(str[0] == "x"){
      return noX(str.substring(1));
    }else{
      return str[0] + noX(str.substring(1));
    }
  }
}
function powerN(base, n) {
  if(n == 0){
    return 1;
  }else{
    return base * powerN(base, n-1);
  }
}
function allStar(str) {
    if(str.length <= 1){
        return str;
    }      
    return str.charAt(0) + "*" + allStar(str.substring(1));
}
function bunnyEars2(buns){
    if(buns == 0)
        return 0;
          
    if(buns % 2 == 1)
        return 2 + bunnyEars2(buns-1);
                    
    return 3 + bunnyEars2(buns-1);
}
function endX(str) {
    if(str.length() <= 1)
        return str;
          
    if(str.charAt(0) == 'x')
        return endX(str.substring(1)) + 'x';
                    
    return str.charAt(0) + endX(str.substring(1));
}