function solution(food) {
    var answer = '';
    
    food.map((item,index)=>{
        for(let i=0; i<Math.floor(item/2); i++){
            answer+=index;
        }
    })
    
    return [answer,[...answer].reverse().join('')].join(0);
}