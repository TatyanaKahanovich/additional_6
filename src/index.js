module.exports = function zeros(expression) {
	var count = 0,
	    arr = [];
	if(expression.indexOf("*") >= 0){
		expression = expression.split("*");
		var len = expression.length;

		for (var i = 0; i < len; i++){
			var j = parseInt(expression[i]);
			arr[i] = j;

			if (/!!$/.test(expression[i])){
                check(j);

			} else {
                check2(j);
			}
		}

		var c = 0;

		for (var n = 0; n < arr.length; n++){
			if (arr[n] % 2 === 0){
				c++;
			}
		}

		c ? count = count : count = 0;
	} else {
	    var j = parseInt(expression);

		if (/!!$/.test(expression[i])){
            check(j);

        } else {
            check2(j);
        }

	}

	function check(j){
        for (j; j > 4; j = j-2){
            if (j % 5 === 0 || j % 10 === 0){
                count++;
                if(j % 25 === 0){
                    count++;
                }
            }
        }
	}
	function check2(j){
        for (j; j > 4; j--){
            if (j % 5 === 0 || j % 10 === 0){
                count++;
                if(j % 25 === 0){
                    count++;
                }
            }
        }
    }

	return count;
}

