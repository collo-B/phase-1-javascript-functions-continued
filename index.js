// code your solution here
function saturdayFun(msg='roller-skate') {
return `This Saturday, I want to ${msg}!`
}
saturdayFun();

function mondayWork(msg='go to the office') {
    return `This Monday, I will ${msg}.`
    }
    mondayWork();

    function wrapAdjective(adjective){
        const specialChar=function(char){
            return `You are ${adjective}${char}${adjective}!`
        }
        return specialChar
     }
     wrapAdjective('*')