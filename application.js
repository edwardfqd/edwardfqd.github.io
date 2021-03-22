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

var SparqlParser = require('sparqljs').Parser;
var parser = new SparqlParser();
var parsedQuery = parser.parse(
  'PREFIX foaf: <http://xmlns.com/foaf/0.1/> ' +
  'SELECT * { ?mickey foaf:name "Mickey Mouse"@en; foaf:knows ?other. }');

// Regenerate a SPARQL query from a JSON object
var SparqlGenerator = require('sparqljs').Generator;
var generator = new SparqlGenerator({ /* prefixes, baseIRI, factory, sparqlStar */ });
parsedQuery.variables = ['?mickey'];
var generatedQuery = generator.stringify(parsedQuery);