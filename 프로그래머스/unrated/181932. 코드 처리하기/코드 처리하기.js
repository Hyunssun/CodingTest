function solution(code) {
    let ret = '';
    let mode = false;
    
    for(let i = 0; i < code.length; i++){
        if(code[i] === '1'){
            mode = !mode
            continue;
        }
        mode === false ? (i % 2 === 0 ? ret += code[i] : '')
                    : (i % 2 === 1 ? ret += code[i] : '')
    }
    return ret === '' ? 'EMPTY' : ret;
}