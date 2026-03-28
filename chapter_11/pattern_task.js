n=5;
for (let i=1; i<=n; i++){
    let row =" ";
    for(let j=1; j<=i; j++){
        row=row+"*";
    }
    console.log(row);
}
console.log("-------------------------------");
a=5;
for(let k=n;k>=1;k--){
    let row1 =""
    for(let l=1;l<=n-k;l++){
        row1+=" ";
    }
    for(let m=1;m<=(2*k-1); m++){
        row1+="*";
    }
    
  console.log(row1);  
 }