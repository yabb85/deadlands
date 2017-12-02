function doAjax(url, method, responseHandler, data)
{
	// Set the variables
	url = url || "";
	method = method || "GET";
	async = true;
	data = data || null;

	if(url == "") {
		alert("URL can not be null/blank");
		return false;
	}
	var xmlHttpRequest = new XMLHttpRequest();

	// If AJAX supported
	if(xmlHttpRequest != false) {
		xmlHttpRequest.open(method, url, async);
		// Set request header (optional if GET method is used)
		if(method == "POST")  {
			xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
		}
		// Assign (or define) response-handler/callback when ReadyState is changed.
		xmlHttpRequest.onreadystatechange = responseHandler;
		// Send data
		xmlHttpRequest.send(data);
	}
	else
	{
		alert("Please use browser with Ajax support.!");
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function distribute()
{
	//doAjax("/distribute", "GET");
	fetch("/distribute")
		.then(function(response) {
			return response.json();
		})
		.then(async function(data) {
			console.log(data);
			for (var i=0; i<data.length; i++) {
				console.log(data[i]);
				var color = data[i].color;
				var value = data[i].value;
				console.log(i);
				var element = document.getElementById("card_" + i);
				var font = document.getElementById("front_" + i).id = color + "_" + value;
				element.classList.add("flipped");
				await sleep(500);
			}
		});
}
