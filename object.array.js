function getScore (scores = {}) {  
 
    let sum = 0; 
    for (let key in scores) { 
    sum += scores[key]; 
     
    } 
     
    return sum;  
     
    }; 
const scores = {
    Nikita: 10,
    Djeka: 20,
    Kastet: 30,
};
getScore(scores)
