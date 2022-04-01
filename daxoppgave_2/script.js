let errorM = document.getElementsByClassName("errorM")[0]

// const naod = value => value ? 1 : 0;

/**
 * 
 * @param {value} // form option value
 * @returns 1 if there is value and 0 if there is no value
 */
function naod(value) {
    let result;

    if (value) result = 1;
    else result = 0;

    return result;
}

function setError(message){
    let newElement = document.createElement("div")

    newElement.textContent = message

    errorM.appendChild(newElement);
}

let formData = document.querySelector("form");
formData.addEventListener("submit", (event) => {


    errorM.innerText = '';
    event.preventDefault();
    

    let fodselsdatoData = formData.fodselsdato.value
    let isKvinne  = parseInt(formData.isKvinne.value)


    let wowRace = formData.wowRace.value
    let antallGangerRettetGeirSinProg = parseInt(formData.antallGangerRettetGeirSinProg.value)
    let treningPerUke = parseInt(formData.treningPerUke.value)
    let McTjukkasPerManed = parseInt(formData.McTjukkasPerManed.value)
    let hasFrokostForSkole = naod(formData.hasFrokostForSkole.value)
    let hasDrivingFemalePartner = naod(formData.hasDrivingFemalePartner.value)
    let hasMaleDrivingPartner = naod(formData.hasDrivingMalePartner.value)
    let isSpillerItimen = naod(formData.isSpillerItimen.value)

    // Error handling

    let feilData = "Du har ikke oppgit riktig data";

    if(fodselsdatoData === '') setError("Du har ikke oppgit riktig informasjon om datoen du er født")
    if(isKvinne === "") setError(feilData + " på hva slags kjønn du er")
    if (antallGangerRettetGeirSinProg === '') setError(feilData);
    if (treningPerUke === '') setError(feilData);
    if (McTjukkasPerManed === '') setError(feilData);

    let calculateAgeData = calculateAge( isKvinne, wowRace, antallGangerRettetGeirSinProg,
        treningPerUke, McTjukkasPerManed,  
        hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
        isSpillerItimen)

        let calculateYearsLeft = Math.round(calculateAgeData)

        let answer = document.getElementsByClassName("answer")[0];
        
        if(!isNaN(calculateYearsLeft)){answer.textContent += "du har " + calculateYearsLeft + " år å leve igjen";}


      
        



        

})





function calculateAge(
    isKvinne, wowRace, antallGangerRettetGeirSinProg,
    treningPerUke, McTjukkasPerManed,  
    hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
    isSpillerItimen){
        let calculatedAge;
        if(isKvinne){
            calculatedAge = 81.7;
        } else {
            calculatedAge = 76.1;
        }

    

        if(wowRace) calculatedAge -=10.2; //To much sitting still..
        calculatedAge -= (McTjukkasPerManed*4.666);
        calculatedAge = calculatedAge - antallGangerRettetGeirSinProg*1.2
        calculatedAge = calculatedAge + treningPerUke * 1.2;
        calculatedAge += (hasFrokostForSkole * 4.19);
        calculatedAge -= (isSpillerItimen * 4.21);
        calculatedAge += (hasDrivingFemalePartner * 3.75);
        calculatedAge -= (hasMaleDrivingPartner * 3.71); 
        calculatedAge -= (isSpillerItimen * 4.62)

        
        return calculatedAge;
    }

    let prompt = document.getElementsByClassName("prompt");

 
    








    
    //Complete the formulae
    //You are supposed to calculate time and date of death, down to the minute!
    function calculateExactTimeOfDeath(
        fodselsdatoData, isKvinne, wowRace, antallGangerRettetGeirSinProg,
        treningPerUke, McTjukkasPerManed,  
        hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
        isSpillerItimen){
        let achievedAge = calculateAge(isKvinne, wowRace, antallGangerRettetGeirSinProg,
            treningPerUke, McTjukkasPerManed,  
            hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
            isSpillerItimen);

    }