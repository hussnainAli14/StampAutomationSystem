export const buyerChange = (e,setsign)=>{
const {value}= e.target.value
console.log(e.target)
setsign(value)
console.log('ddd',value)
}

export const witnessChange1 = (e,setsign)=>{
    const {value} = e.target;
    setsign(value)
}

export const witnessChange2 = (e,setsign)=>{
    const {value} = e.target;
    setsign(value)
}

export const lawyerChange = (e,setsign)=>{
    const {value} = e.target;
    setsign(value)
}
