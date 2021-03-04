const dx = sides => (Math.ceil((Math.random() * sides)))

function ndx(num, sides){
    const rollResults = []
    for(let i = 1; i <= num; i++){
        rollResults.push(dx(sides))
    }
    return rollResults
}

function findSuccesses(rollResults, diffToBeat){
    return rollResults.filter((roll) => roll >= diffToBeat)
}

function findBotches(rollResults){
    return rollResults.filter((roll) => roll === 1)
}

function mageRoll(num, diffToBeat){
    let rollResults = ndx(num, 10)
    let successes = findSuccesses(rollResults, diffToBeat)
    let botches = findBotches(rollResults)
    if(successes.length === 1 && botches.length === 1){
        return `You rolled ${successes.length} success, with ${successes.length} die beating a difficulty of ${diffToBeat}. You also rolled ${botches.length} botch.`
    }
    else if(successes.length === 1 && botches.length){
        return `You rolled ${successes.length} success, with ${successes.length} die beating a difficulty of ${diffToBeat}. You also rolled ${botches.length} botches.`
    }
    else if(successes.length === 1){
        return `You rolled ${successes.length} success, with ${successes.length} die beating a difficulty of ${diffToBeat}.`
    }
    else if(botches.length === 1){
        return `You rolled ${successes.length} successes, with ${successes.length} dice beating a difficulty of ${diffToBeat}. You also rolled ${botches.length} botch.`
    }
    else if(botches.length){
        return `You rolled ${successes.length} successes, with ${successes.length} dice beating a difficulty of ${diffToBeat}. You also rolled ${botches.length} botches.`
    }
    else{
        return `You rolled ${successes.length} successes, with ${successes.length} dice beating a difficulty of ${diffToBeat}.`
    }
}

document.addEventListener('submit', function(e){
    e.preventDefault()
    let num = document.querySelector('#total-pool').value
    let diffToBeat = document.querySelector('#difficulty').value
    let newRoll = document.createElement('p')
    newRoll.innerText = mageRoll(num, diffToBeat)
    document.querySelector('#roll-results').append(newRoll) 
})