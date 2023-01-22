let personArray =
		[
			{name: "Jessica Hawkins", age: "48", occupation: "pharmacist"},
			{name: "Bruna Collins", age: "71", occupation: "singer"},
			{name: "Carl Becker", age: "30", occupation: "jornalist"},
			{name: "Jonathan Fox", age: "59", occupation: "driver"},
			{name: "Julie Schultz", age: "28", occupation: "model"},
			{name: "Kelvin Britz", age: "52", occupation: "medic"},
			{name: "Hinata Uzumaki", age: "19", occupation: "ninja"},
			{name: "Caio Breder", age: "25", occupation: "model"},
			{name: "Hillary Hills", age: "40", occupation: "sailer"},
			{name: "Amanda Sakaguchi", age: "31", occupation: "astronaut"},
		];

		var allButton = document.getElementById("all");
		var below30Button = document.getElementById("below30");
		var allModelsButton = document.getElementById("allModels");
		var futureAllButton = document.getElementById("futureAll");

		allButton.addEventListener("click", displayAll);
		below30Button.addEventListener("click", displayAllOver30);
		allModelsButton.addEventListener("click", displayAllModels);
		futureAllButton.addEventListener("click", displayFutureAll);

		                      function personObjectToString(item)
		{
			let nameTemplate = `Name:  ${item.name}`;
			let ageTemplate = `Age:  ${item.age}`;
			let occupationTemplate = `Occupation:  ${item.occupation}`;

			let outputTemplate = `${nameTemplate}, ${ageTemplate}, ${occupationTemplate}`;

			return outputTemplate;
		}

		 function ageFilter(item)
		{
			if(parseInt(item.age) < 30)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		 function occupationFilter(item)
		{
			if(item.occupation == "model")
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		 function increaseAge(item)
		{
			item.age = (parseInt(item.age) + 10);

			return item;
		}

		 function displayAll()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let completeArray = personArray.map(personObjectToString);

			for(var i = 0; i < completeArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(completeArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}

		 function displayAllOver30()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let filteredArray = personArray.filter(ageFilter).map(personObjectToString);

			for(var i = 0; i < filteredArray.length; i++)
			 {
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(filteredArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			 }
		}

		function displayAllModels()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let filteredArray = personArray.filter(occupationFilter).map(personObjectToString);

			for(var i = 0; i < filteredArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(filteredArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}

		function displayFutureAll()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let completeArray = personArray.map(increaseAge).map(personObjectToString);

			for(var i = 0; i < completeArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(completeArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}