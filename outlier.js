const outlier = (arr) => {
    let odd = [];
    let even = [];

    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    if(even.length > odd.length){
        return odd[0];
    }else{
        return even[0];
    }
}

console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))