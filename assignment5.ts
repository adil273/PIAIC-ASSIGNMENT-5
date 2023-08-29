const num:number[]=[0,1,-2,-3,4,5,-6,-7,8,-9,3,-10];
const PositiveNumArray:number[]=num.filter(function(removeNegative)
{
return removeNegative>=0;
}
);
console.log(`Positive Num Array = ${PositiveNumArray}`);
