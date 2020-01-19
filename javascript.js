/*random quote generator*/
var quotes = ['“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
'“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill',
'“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
'“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
'“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
'“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
'“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
'“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
'“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
'“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” – Brian Tracy']

var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

/*colour changing*/
function changeColor1(quoteDisplay)
{
  document.getElementById(quoteDisplay).style.color = "white";
  document.getElementById(quoteDisplay).style.backgroundColor = "#007bb5";
  document.getElementById(quoteDisplay).style.borderColor = "#000066";
  document.getElementById(quoteDisplay).style.fontFamily = "'Amita',Charcoal,sans-serif"; 
  document.getElementById(quoteDisplay).style.fontSize= "17px";
}
function changeColor2(quoteDisplay)
{
  document.getElementById(quoteDisplay).style.color = "black"; 
  document.getElementById(quoteDisplay).style.backgroundColor = "#4CAF50";
  document.getElementById(quoteDisplay).style.borderColor = "green";
  document.getElementById(quoteDisplay).style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById(quoteDisplay).style.fontSize= "20px";
}
function changeColor3(quoteDisplay)
{
  document.getElementById(quoteDisplay).style.color = "gold"; 
  document.getElementById(quoteDisplay).style.backgroundColor = "maroon";
  document.getElementById(quoteDisplay).style.borderColor = "red";
  document.getElementById(quoteDisplay).style.fontFamily = "'Barrio',sans-serif";
  document.getElementById(quoteDisplay).style.fontSize= "19px";
}
function changeColor4(quoteDisplay)
{
  document.getElementById(quoteDisplay).style.color = "black"; 
  document.getElementById(quoteDisplay).style.backgroundColor = "yellow";
  document.getElementById(quoteDisplay).style.borderColor = "#cc9900";
  document.getElementById(quoteDisplay).style.fontFamily = "'Indie Flower',sans-serif";
  document.getElementById(quoteDisplay).style.fontSize= "23px";
}

/*converter*/
function calc()
{
	var n1 = parseFloat(document.getElementById('n1').value);
	var oper = document.getElementById('operators').value;

	if(oper === 'kgtolb')
	{
		document.getElementById("result").innerHTML = n1*2.2046+" Pounds";
	}

	if(oper === 'lbtokg')
	{
		document.getElementById("result").innerHTML = n1/2.2046+" Kilograms";
	}
}


/*magic box*/
function clearIt(){
  document.getElementById('txt').value= "";
}

function capitalizedText(){
  var x=document.getElementById('txt').value;
  var x1= x.toUpperCase();
  var x2= x.toLowerCase();
  if(x==x1){
    document.getElementById('txt').value= x2;
  }
  else if(x==x2){
    document.getElementById('txt').value= x1;
  } else{
    document.getElementById('txt').value= x2;
  }
}

function sorting(){
  var x=document.getElementById('txt').value;
  var ar=x.split("\n");
  var arr=ar.sort();
  var s="";
  for(i=0;i<arr.length-1;i++){
    if(arr[i]!==""){
      s=s+arr[i]+"\n";
    }
  }
  s=s+arr[arr.length-1];
  document.getElementById('txt').value= s;
}

function reverseOrder(){
  var x=document.getElementById('txt').value;
  var ar=x.split("\n");
  var w="";
  for(i=0;i<ar.length-1;i++){
    var s=ar[i];
    for(j=s.length-1;j>=0;j--){
      w=w+s.charAt(j);
    }
    w=w+"\n";
  }
  s=ar[ar.length-1];
  for(j=s.length-1;j>=0;j--){
    w=w+s.charAt(j);
  }

  document.getElementById('txt').value= w;  
}

function addNumber(){
  var x=document.getElementById('txt').value;
  var ar=x.split("\n");
  var w="";
  var j=0;
  for(i=0;i<ar.length-1;i++){
    j=i+1;
    var nr= Math.floor(Math.random()*(10));
    w=w+j+" "+ar[i]+"\n";

  }
  j=j+1;
  w=w+j+" "+ar[ar.length-1];
  document.getElementById('txt').value= w;  
}

function stripBlank(){
  var x=document.getElementById('txt').value;
  var ar=x.split("\n");
  var w="";
  for(i=0;i<ar.length-1;i++){
    if(ar[i]!=""){
      var j=ar[i].trim();
      w=w+j+"\n";
    }
  }
  w=w+ar[ar.length-1].trim();
  document.getElementById('txt').value= w;  
}

function shuffleText(){
  var x=document.getElementById('txt').value;
  var ar=x.split("\n");
  var w="";
  for(i=0;i<ar.length;i++){
    j= Math.floor((Math.random()*(ar.length))+0);
    h= Math.floor((Math.random()*(ar.length))+0);
    var temp=ar[j];
    ar[j]=ar[h];
    ar[h]=temp;
  }
  for(g=0;g<ar.length-1;g++){
    w=w+ar[g]+"\n";

  }
  w=w+ar[ar.length-1];
  document.getElementById('txt').value= w;  
}
