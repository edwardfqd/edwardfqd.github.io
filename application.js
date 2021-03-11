console.log("Hello ,world");
function test()
{
	var returnData;
	$.ajax({
		type:"Get",
		url:"https://raw.githubusercontent.com/edwardfqd/edwardfqd.github.io/main/resources/output.ttl",
		dataType:"text",
		async: false,
		success: function(response){
			returnData = response;
		}
		
	});
	return returnData;
}
console.log(select(test(),null,null,'<Country>'));