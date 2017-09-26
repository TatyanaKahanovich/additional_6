module.exports = function zeros(expression) {
	var count = 0;
	var countDec = 0;
	var countA = 0;
	var arr = [];
	if(expression.indexOf("*") >= 0){
		expression = expression.split("*");
		var len = expression.length;

		for (var i = 0; i < len; i++){
			var j = parseInt(expression[i]);
			arr[i] = j;
			if (/!!$/.test(expression[i])){
				for (j; j > 4; j = j-2){
					if (j % 5 === 0 || j % 10 === 0){
						count++;
						if(j % 25 === 0){
							count++;
						}
					}
				}

			} else {
			for (j; j > 4; j--){
				if (j % 5 === 0 || j % 10 === 0){
					count++;
					if(j % 25 === 0){
						count++;
					}
				}
			}
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
		if (/!!$/.test(expression[i])){
			for (var i = parseInt(expression); i > 4; i--){
				if (i % 5 === 0 || i % 10=== 0){
					count++;
					if(i % 25 === 0){
						count++;
					}
				}
			}

	} else {
			var i = parseInt(expression);
			for (var i = parseInt(expression); i > 4; i = i-2){
				if (i % 5 === 0 || i % 10=== 0){
					count++;
					if(i % 25 === 0){
						count++;
					}

				}
			}
		}
	}
	var c = 0;
	for (var n = 0; n > 0; n++){
		if (arr[n] % 2 === 0){
			c++;
		}
	}

	return count;
}

function factorialize(num) {
  if (num < 0)
        return -1;
  else if (num == 0)
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

function factorialize2(num) {
  if (num <= 0)
      return 1;
  else {
      return (num * factorialize2(num - 2));
  }
}