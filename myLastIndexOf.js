String.prototype.myLastIndexOf = function(searchString, position) {
	
	var S = this;
	var searchStr = searchString + ''; //приводим к строке не явно
	var numPos = position - 0;

	var pos = (numPos != numPos)
				? Infinity
				: numPos;

	var len = S.length;
	var start = Math.min(Math.max(pos, 0), len);
	var searchLen = searchStr.length;

	var k = start - searchLen;
	while ( k > 0 ) {
		var j = 0;
		while ( j < searchLen ){
			if ( S[k + j] != searchStr[j] )
				j = searchLen + 1;
			
			if ( ++j == searchLen )
				return k;
		}

		k--;
	}

	return -1;
}

