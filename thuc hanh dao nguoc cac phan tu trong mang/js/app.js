let number = [-3,5,1,3,2,10];
let number1 = [];
let x = number.length -1;
for(let i=0;i<number.length;i++){
    number1[i]= number[(x-i)]
}
document.write(number1);