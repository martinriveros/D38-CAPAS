process.on('message', cant =>{
    process.send({data:calculateRandom(cant)})})

module.exports = function serviceChildProcess(cant){

  let results = [];

  for(let i=0; i<Number(cant); i++){
    let random = Math.floor(1+Math.random()*1000)
      if(isNaN(results[random])){
        results[random]=1}
      else{
        results[random]++
      }
    }
return {...results}}