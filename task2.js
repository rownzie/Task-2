function convert(){
		var a = document.getElementById("word").value;
		var arr = [];
		var len = a.length;
		var up = a.toUpperCase();
		var low = a.toLowerCase();
		var i=0,j=1;
		if(a!=null&&len==0){
			alert("Input a string first!");
		}
		else{
			for(i=0;i<len;i++){
                if(a.charAt(i)=='i'||a.charAt(i)=='I'){
                    arr.push(low.charAt(i));
                    j=1;
                }
                else if(a.charAt(i)=='l'||a.charAt(i)=='L'){
                    arr.push(up.charAt(i));
                    j=0;
                }
                else if(a.charAt(i)=='.'){
                    arr.push(",,,");
                }
                else if(a.charAt(i)==' '){
                    arr.push(' ');
                    j=1;
                }
                else if(j==0){
                    arr.push(low.charAt(i));
                    j=1;
                }
                else if(j==1){
                    arr.push(up.charAt(i));
                    j=0;
					}
				}
			
            a = arr.join("");
            document.getElementById("res").innerHTML = ""+a+"</h3>";
			
			//disable button
			document.getElementById("b1").disabled = true;
			//enable button
			document.getElementById("b2").style.display = "block";
		}
}
function reset(){
			document.getElementById("myForm").reset();
			document.getElementById("word").disabled = false;
			document.getElementById("b1").disabled = false;
			document.getElementById("res").innerHTML="";
			document.getElementById("b1").style.display = "";
			// Hide reset button
			document.getElementById("b2").style.display ="none";
	
}