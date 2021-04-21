
//function statement named noBoringZeros with parameter n
function noBoringZeros(n){
	//while statement with condition n modulus equals zero and n does
	//not equal 0
	while(n%10==0 && n!=0){
		//statement to be executed if condition is met, n equals n
		//divided by 10, [same as n divided equals 10]
		n/=10;
	}
	return n;
}