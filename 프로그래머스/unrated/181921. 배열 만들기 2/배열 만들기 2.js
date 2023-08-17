function solution(l, r) {
    var answer = [];
    let a = [];
    
    for(let i = l; i <= r; i++){
        if(i % 5 === 0){
            a.push(i)
        }
    }
    a.map((item)=>{
        if(count(item, '0', '5') === item.toString().length){
            answer.push(item);
        }
    })
    
    return answer.length !== 0 ? answer : [-1];
}

const count = (item, a, b) => {
    let sum = 0;
    for(let x of item.toString()){
        if(x === a){
            sum += 1;
        }else if(x === b){
            sum += 1;
        }
    }
    return sum;
}