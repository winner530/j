let arr = [3,9,7,-1,11];

let arrOne = arr.filter(function(item,index,array){
	if(array.length>1){
		return item > 8;
	}
})

console.log(arrOne);