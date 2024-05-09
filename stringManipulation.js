function capitalizeWords() {
	var inputText = document.getElementById("inputText").value;
	var words = inputText.split(" "); 
		for (var i = 0; i < words.length; i++) { 
			words[i] = words[i].charAt(0).toUpperCase()+ words[i].slice(1); 
			console.log(words[i])
		}
	var outputText = words.join(" "); 
	document.getElementById("outputText").innerHTML = outputText; 
	} 
	
	
function capitalizeAll() {
	var inputText = document.getElementById("inputText_1").value;
	var words = inputText.split(" "); 
		for (var i = 0; i < words.length; i++) { 
			words[i] = words[i].toUpperCase(); 
		}
	var outputText = words.join(" "); 
	document.getElementById("outputText_1").innerHTML = outputText; 
	}

function isExist() {
	let str = "Hello world, welcome to the universe.";
	 let sentence = document.getElementById("demo").value;
	 let exist = str.includes(sentence);
        if (exist) {
			document.getElementById("result").innerHTML="it is a part of string";
        } else {
			document.getElementById("result").innerHTML="it is not a part of string";
         }
}


function getOccuranceCount() {
    let r = "my is name is my name is is  priyanka ";
	let sentence = document.getElementById("string").value;
	var m=r.split(" ");
	let count=0;
	for  (let i=0; i<m.length; i++){
     if (m[i] === sentence){
		 count++;
	 }
}
if (count >0){
	document.getElementById("result_1").innerHTML=count;
}
else{
	document.getElementById("result_1").innerHTML="word not found"
}
}	

function wordDensity() {
    let r = "my is name is my name is is  priyanka ";
	let sentence = document.getElementById("input").value;
	var m=r.split(" ");
	let count=0;
	for  (let i=0; i<m.length; i++){
     if (m[i] === sentence){
		 count++;
	 }
}
var density=(count/m.length)*100;
console.log(density)
document.getElementById("result_2").innerHTML=density;
}

 function reverseWords() {
var sentence = document.getElementById("inputNumber").value;
let  rev_1 ="";
for (let i = sentence.length-1;  i>=0 ;  i--){
	rev_1= rev_1+sentence[i];
}	 
document.getElementById("result_5").innerText = rev_1;
 }
 
function countVowels() {
 var inputText = document.getElementById("inputText_count").value.toLowerCase().toUpperCase();
 var vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
 var vowelCount = 0;
 for (var i = 0; i < inputText.length; i++) {
      if (vowels.includes(inputText[i])) {
        vowelCount++;
		}
    }
 document.getElementById("result_6").innerText =vowelCount;
  }



function isPalindrome(){
var inputText = document.getElementById("para").value;
let  rev ="";
for (let i = inputText.length-1;  i>=0 ;  i--){
	rev= rev+inputText[i];
}
if (rev === inputText){
		
		
}
else{
	 document.getElementById("result_7").innerHTML = `${inputText} is not palindrome` ;
}
}

function truncateString(){
var inputText = document.getElementById("str").value;
console.log(inputText)
	// for (let i=0; i<inputText.length; i++)
		truncate=inputText+("...")
		document.getElementById("result_8").innerHTML = truncate; 
}

// function to get the masking the given string
function maskString() {
var inputText = document.getElementById("str_1").value;
var number=inputText.slice(6);
// console.log(number) ;
for (let i=0;  i<6; i++){
	number="*"+number;
}
document.getElementById("result_9").innerHTML = number; 
}


function validateEmail(){
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailInput = document.getElementById("str_2").value;
let arrayOfMatches = emailInput.match(validRegex);
if(arrayOfMatches != null){
		document.getElementById("result_10").innerHTML = `${emailInput} it is validate` ;
}
else{
	document.getElementById("result_10").innerHTML = `${emailInput} it is not validate` ;
	
}
}

function getExt(){
	var extract = document.getElementById("str_3").value;
	if(extract.includes(".")){
	var file = extract.split("."); 
	document.getElementById("result_11").innerHTML = `${file[1]}`; 
	}else{
		document.getElementById("result_11").innerHTML = `null`; 
		return null;
	}
}

function removeWhitespace() {
  document.getElementById("string_1").style.whiteSpace = "nowrap";
}


