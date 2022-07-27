<!DOCTYPE html>

<html>

<head>
    <style>
	.container {
	    text-align: center;
		margin-top: 100px;
	}
	textarea {
		width: 500px;
		height: 250px;
		resize: none;
		font-size: 22px;
		font-family: 'times new roman';
		font-weight: bold;
		padding: 10px 15px;
	}
	button {
		background-color: white;
        color: black;
        border: 2px solid #555555;
		transition-duration: 0.4s;
        cursor: pointer;
	}
	button:hover {
        background-color: #555555;
		color: white;
    }
	
	</style>
</head>

<body>
     <div class="container">
        <textarea id="textarea"></textarea><br>
		<button id="speak">Type to Speak</button>
		<select id="country"></select>
		<select id="countryLang"></select>
		<button class = "btn btn-danger btn-block" onclick="onConnectUsb()" id="connect-usb">  connect </button> 
		<div id="confd">----</div>
    </div>
<script>
    var speak = document.getElementById('speak');
    var textarea = document.getElementById('textarea');
	var country = document.getElementById("country");
	var countryLang = document.getElementById("countryLang");
	//Now use web speech api, I used both api to make sure one was available to the browser offering the service
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
	//get languages from array supported by api , copy array from a website
		var langList = [
                     ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-KE', 'Kenya'],
                     ['en-TZ', 'Tanzania'],
                     ['en-GH', 'Ghana'],
                     ['en-NZ', 'New Zealand'],
                     ['en-NG', 'Nigeria'],
                     ['en-ZA', 'South Africa'],
                     ['en-PH', 'Philippines'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],


                     ['Arabic',			 ['ar-DZ', 'Algeria'],
					 ['ar-BH', 'Bahrain'],
					 ['ar-EG', 'Egypt'],
					 ['ar-IQ', 'Iraq'],
					 ['ar-JO', 'Jordan'],
					 ['ar-KW', 'Kuwait'],
					 ['ar-LB', 'Lebanon'],
					 ['ar-MR', 'Mauritania'],
					 ['ar-MA', 'Morocco'],
					 ['ar-OM', 'Oman'],
					 ['ar-QA', 'Qatar'],
					 ['ar-SA', 'Saudi Arabia'],
					 ['ar-PS', 'Palestine'],
					 ['ar-TN', 'Tunisia'],
					 ['ar-AE', 'United Arab Emirates'],
					 ['ar-YE', 'Yemen']

                     ]
                     ];
					 
	// select a default language on page load
	recognition.lang = "en-US";
	// create a list of language to select on page
		for(var i=0; i<langList.length; i++){
			// add it in the select tag
			var countryList = countryList + '<option value="'+i+'">'+langList[i][0]+'</option>';
		}
		country.innerHTML = countryList;
	//specify languages for country
		country.onchange = function() {
		var countryVal = country.value;
	// give the array variable to get data "langList"
			var selectCount = langList[countryVal];
			if(selectCount.length <= 2){
				var countryLangList = countryLangList + '<option value="'+selectCount[1][0]+'">'+selectCount[0]+'</option>';
			}else{
				for(var j=1; j<selectCount.length; j++){
				var countryLangList = countryLangList + '<option value="'+selectCount[j][0]+'">'+selectCount[j][1]+'</option>';
				}
			}
			countryLang.innerHTML = countryLangList;
			countryLang.style.display = "inline-block";
			recognition.lang = countryLang.value;
		}
	// set the value for lang 
		countryLang.onchange = function() {
	// it will get the value and assign to the "recognition.lang" on selecting
			recognition.lang = countryLang.value;
		}		
    //handle the action on click		
    speak.addEventListener('click', function () {
        recognition.start();
        textarea.innerHTML = '...speaking';
    })
    //Once the result is ready We only control the item we get in response
    recognition.onresult = function (e) {
        var transcript = e.results[0][0].transcript;
	//Link the result to the text area
        textarea.innerHTML = transcript;
    }
</script>
<script src="arduino.js"></script>

</body>

</html>