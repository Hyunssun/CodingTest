function solution(array) {
    var answer = 0;
    let dict = {}
    
    if(array.length === 1){
        return array[0]
    }
    
    array.map((item) => {
        if(item in dict){
            dict[item] += 1;
        }else{
            dict[item] = 1;
        }
    })
    
    let valArr = Object.values(dict).sort((a,b) => a - b)
    
    if(valArr[valArr.length-1] === valArr[valArr.length-2]){
        return -1
    }
    else{
        Object.keys(dict).map((item)=>{
            if(dict[item] > answer){
                answer = dict[item]
            } 
        })
    }
    
    let keyArr = Object.keys(dict)
    let key = keyArr.find((item) => dict[item] === answer);
    
    return Number(key)
}