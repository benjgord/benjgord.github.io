chrome.browserAction.onClicked.addListener(testFunc());

chrome.browserAction.setBadgeBackgroundColor(
{
	color: '#ffffff'
});

chrome.browserAction.setBadgeText(
{
	text: ':D'
});


function testFunc()
{
	console.log('This button was clicked');
};
