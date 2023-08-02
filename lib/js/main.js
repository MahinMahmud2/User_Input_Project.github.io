let title = document.getElementById("title_input")
let noun = document.getElementById("noun")
let verb = document.getElementById("verb")
let adjective = document.getElementById("adjective")
let button = document.getElementById("submit_button")
let story_result = document.getElementById("story_result")
let mainTitle = document.getElementById("main_title")
let container= document.getElementsByClassName(".form_container");

title.onchange = function(event) {
    event.preventDefault();
    let userTitle = title.value;
    mainTitle.innerHTML = userTitle;

}

button.onclick = function(event) {
    

    event.preventDefault();

    if (title.value == ""){
        alert("Please insert a Title!")
    }
    else if(noun.value == "" ){
        alert("Please insert a noun!")
    }
    else if(verb.value == ""){
        alert("Please insert a Verb!")
    }
    else if(adjective.value == ""){
        alert("Please insert an adjective!")
    }

    if (title.value != "" && noun.value != "" && verb.value != "" && adjective.value != ""){
        story_result.innerHTML = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + "." + " What a " + adjective.value + " day!" 
        container.style.display = "none"
    }

}


// let titleInput=document.getElementById("title_input");
// let nounI=document.getElementById("noun");
// let verbI=document.getElementById("verb");
// let adjectiveI=document.getElementById("adjective");
// let mainInput=document.getElementById("main_title");
// let submit=document.getElementById("submit_button");
// let formContainer= document.getElementsByClassName(".form_container");
// let result=document.getElementById("story_result");


// submit.onclick = function(event){
   
//     event.preventDefault();

//     if (nounI.value=="" || verbI.value=="" || adjectiveI.value=="" || titleInput.value==""){
//         alert("Please fill in all fields.");
//     }
//     else{
//         // const noun=nounI.value;
//         // const verb = verbI.value;
//         // const adjective= adjectiveI.value;
//         result.innerHTML="Last night I ate a " + nounI.value + ", and today I just had to " + verbI.value + "." + " What a " + adjectiveI.value + " day!" ;
//         formContainer.style.display="hidden";
//     }
// }
