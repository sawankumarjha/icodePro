let [i,j,k,l,m,n]=[0,0,0,0,0,0]
var txt = 'Programming is a Way to Instruct Computer';
var txt2="Technology,Development and Trends";
var txt3="Welcome to iCoder";
var txt4="Welcome to iCoder";
var txt5="Welcome to Coding Blog";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(j<txt2.length){
    document.getElementById("heading2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
  else{
    document.getElementById('carousel2').classList.remove('active');
    document.getElementById('carousel1').classList.add('active');
    typeWriter2();
   
  }
  
}

typeWriter();


function typeWriter2() {
  if (k < txt3.length) {
    document.getElementById("heading3").innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
  }
  else if(l<txt2.length){
    document.getElementById("heading4").innerHTML += txt2.charAt(l);
    l++;
    setTimeout(typeWriter, speed);
  }
  else{
    document.getElementById('carousel3').classList.add('active');
    document.getElementById('carousel1').classList.remove('active');
    typeWriter3();
  }
  
}
function typeWriter3() {
  if (m < txt5.length) {
    document.getElementById("heading5").innerHTML += txt5.charAt(m);
    m++;
    setTimeout(typeWriter, speed);
  }
  else if(n<txt2.length){
    document.getElementById("heading6").innerHTML += txt2.charAt(n);
    n++;
    setTimeout(typeWriter, speed);
  }
  else{
    
  }
  
}



