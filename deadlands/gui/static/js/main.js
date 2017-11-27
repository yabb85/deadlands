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
	var xmlHttpRequest = getHttpRequestObject();

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

function close()
{
	doAjax("/quit", "GET");
}
