/* Given an object and a key, "addProperty" adds a new property on the given object with a value of true. */

var obj = {
	mykey: 'value'
};

function addProperty(obj, key) {
	///Your code Starts here 
	{
		obj.key = true;
		return obj;
	}
	///Your code Ends here
}
addProperty(obj, "mykey");
/*
Lines For TestCase
obj.mykey
*/