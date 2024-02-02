function solution(s, n) {
    let arr = [];
    
    [...s].map((item)=>{
        let code = item.charCodeAt()
        
        if(code>=65&&code<=90){
            code+n>90?arr.push(code+n-91+65):arr.push(code+n);
        }else if(code===32){
            arr.push(code);
        }else{
            code+n>122?arr.push(code+n-123+97):arr.push(code+n);
        }
    })
    
    return String.fromCharCode(...arr);
}