const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	// Write your code here
	const list = new Array();
	let subarraySumlist = new Array();
	let sum = 0;

	for(let i = 0; i<arr.length; i++){
		sum += arr[i];
		if(sum <= n){
			subarraySumlist.push(arr[i]);
		} else {
			list.push(subarraySumlist);
			subarraySumlist = new Array();
			sum = arr[i];
			subarraySumlist.push(arr[i]);
			
		}
	}
	list.push(subarraySumlist);
	return list;
};

const n = prompt("Enter n: ");    
alert(JSON.stringify(divide(arr, n)));
