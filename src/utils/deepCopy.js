export default (arr) => {
	var out = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		var item = arr[i];
		var obj = {};
		for (var k in item) {
			obj[k] = item[k];
		}
		out.push(obj);
	}
	return out;
}