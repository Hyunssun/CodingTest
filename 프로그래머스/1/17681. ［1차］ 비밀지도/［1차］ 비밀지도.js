function solution(n, arr1, arr2) {
    var answer = [];
    let a=[];
    let b=[];
    
    for(let i=0; i<arr1.length; i++){
        a.push(arr1[i].toString(2).padStart(n,'0').split(''));
        b.push(arr2[i].toString(2).padStart(n,'0').split(''));
    }
    
    for(let i=0; i<arr1.length; i++){
        let c=[];
        for(let j=0; j<a.length; j++){
            c.push(a[i][j]|b[i][j]?'#':' ');
        }
        answer.push(c.join(''))
    }
    
    return answer;
}