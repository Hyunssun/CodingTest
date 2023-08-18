function solution(a, b, c, d) {
    let arr = [a,b,c,d];
    let arr2 = [];
    for(let i = 1; i <= 6; i++){
        arr2.push(arr.filter(x => i === x).length)
    }
    let arr3 = arr2.concat()
    arr2.sort((a,b) => b - a)
    
    switch(arr2[0]){
        case 4:
            return 1111 * arr[0];
        case 3:
            let p = arr3.indexOf(3) + 1;
            let q = arr3.indexOf(1) + 1;
            return (10 * p + q) ** 2;
        case 2:
            if(arr2[1] === 2){
                let p = arr3.indexOf(2) + 1;
                let q = arr3.indexOf(2, p) + 1;
                return (p + q) * Math.abs(p - q);
            }else{
                let p = arr3.indexOf(2) + 1;
                let q = arr3.indexOf(1) + 1;
                let r = arr3.indexOf(1, q) + 1;
                return q * r;
            }
        case 1:
            arr.sort((a,b) => a - b);
            return arr[0];
    }
}