window.onload = function() 
{
	runEventListeners();
}

function runEventListeners()
{
	const elemIP = document.getElementById('sh_ip');
	const elemHash = document.getElementById('sh_hash');

	elemIP.addEventListener("click", () => showIPTab());
	elemHash.addEventListener("click", () => showHashTab());

	var ipInput = document.getElementById('ip_input');
	ipInput.addEventListener("keypress", () => checkKey(event));

	var hashInput = document.getElementById('hash_input');
	hashInput.addEventListener("keypress", () => checkKey(event));
}

function showIPTab(url)
{
	const ipData = document.getElementById('ip_data');
	const hashData = document.getElementById('hash_data');
	const shIP = document.getElementById('sh_ip');
	const shHash = document.getElementById('sh_hash');

	ipData.style.visibility = "visible";
	shIP.style.backgroundColor = "#18191b";
	shIP.style.borderBottomStyle = "none";

	hashData.style.visibility = "hidden";
	shHash.style.backgroundColor = "#444444";
	shHash.style.borderBottomStyle = "solid";
}

function showHashTab(url)
{
	const ipData = document.getElementById('ip_data');
	const hashData = document.getElementById('hash_data');
	const shIP = document.getElementById('sh_ip');
	const shHash = document.getElementById('sh_hash');

	ipData.style.visibility = "hidden";
	shIP.style.backgroundColor = "#444444";
	shIP.style.borderBottomStyle = "solid";

	hashData.style.visibility = "visible";
	shHash.style.backgroundColor = "#18191b";
	shHash.style.borderBottomStyle = "none";
}

function checkKey(event, url)
{
	if (event.key === "Enter")
	{
		if (event.srcElement.id == "ip_input")
		{
			var url = new URL('https://api.abuseipdb.com/api/v2/check');
			requestInfo = createIPInfo();
		}
		else if (event.srcElement.id == "hash_input")
		{
			var url = 'virusTotal';
		}
		
		var enteredIP = event.srcElement.value;
		createRequest(url, enteredIP);
	}
}

function createIPInfo()
{
	let requestInfo = 
	{
		"method": "GET",
		"headers":
		{
			"Accept": "application/json",
			"Key": ""
		},
		"referrerPolicy": "no-referrer"
	}
	
	return requestInfo;
}

function createRequest(url, enteredIP)
{
	var params = new URLSearchParams({"ipAddress": enteredIP, "maxAgeInDays": "30"});
	var url = url + params;
	
	requestInfo.headers.Key = "167bafb8161cb9287062db2a5732001a38fab043433bcd6f30a5827f789092d2c26b80deae39b6d2";
	
	makeRequest(url, requestInfo);
}

function makeRequest(url, requestInfo)
{
	console.log(url);
	console.log(requestInfo);
	
	fetch(url, requestInfo)
		.then(response => response.json())
		.then(data => console.log(data));

}





























