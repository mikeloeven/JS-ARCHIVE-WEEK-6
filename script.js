function submitForm() {
		var ERR=0;
		
		var Fname = document.getElementById('Fname');
		/* validating a full name string requires at least name*/
		var RXFname = /[a-zA-Z]+ +[a-zA-Z]+/;
		if (!RXFname.test(Fname.value)){FNE.className="error";FNE.innerHTML = "Required Field Must Contain Only Letters"; Fname.className="fail"; ERR=1;}
			else{FNE.className="confirm";FNE.innerHTML = "Success"; Fname.className="success";}
		
		var Bday = document.getElementById('birthday');
		if (!Bday.value.length){BDE.className="error";BDE.innerHTML = "Cannot Be Blank"; Bday.className="fail"; ERR=1;}
			else{BDE.className="confirm";BDE.innerHTML = "Success"; Bday.className="success";}
			
		
		
		var Email = document.getElementById('email');
		if (!Email.value.length){EME.className="error";EME.innerHTML = "Cannot Be Blank"; Email.className="fail"; ERR=1;}
		else {
		var RXEmail = /\w+@\w+\.\w{2,4}/;
		
				/*Email.value.indexOf("@") === -1 || Email.value.indexOf(".") === -1 ){EME.className="error";*/
				if (!RXEmail.test(Email.value)) {EME.innerHTML = "Invalid Format"; EME.className="error"; Email.className="fail"; ERR=1;}
				else{EME.className="confirm";EME.innerHTML = "Success"; Email.className="success";}
			}
		
		
		
		var Comm = document.getElementById('comment');
		var RXComm = /<(.|\n)*?>/;  
		if (!Comm.value.length){COMME.className="error";COMME.innerHTML = "Cannot Be Blank"; Comm.className="fail"; ERR=1;}	
		
		
		else if (RXComm.test(Comm.value))
			 {COMME.className="error";
			 COMME.innerHTML = "Please remove HTML code and stop hacking the website"; 
			 Comm.className="fail"; ERR=1;}
			
		else{COMME.className="confirm";COMME.innerHTML = "Success";Comm.className="success";}
                     
			
		
               if (ERR===0){CONF.className="contentbox"; 
                   
                    fnameout.innerHTML = Fname.value;
                    birthout.innerHTML = Bday.Value;
                    EmailOut.innerHTML = Email.value;
                    commout.innerHTML = Comm.value;
                    MAIN.style.display = "none";        
                    CONF.style.display = "block";
                    
                    
                }
	}
