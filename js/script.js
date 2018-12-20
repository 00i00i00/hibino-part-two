
var eventType = prompt('What type of event are you going to? Choose from the following: casual, semi-formal, and formal.');
var tempFahr = prompt('How many degrees Fahrenheit is it outside?');
var para = document.querySelector('p');



if (eventType === 'casual' && tempFahr < 54) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear something comfy and a coat.';
   
} else if (eventType === 'casual' && (tempFahr >= 54) || (tempFahr <= 70) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear something comfy and a jacket.';
    
} else if (eventType === 'casual' && tempFahr > 70) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear something comfy and no jacket.';

} else if (eventType === 'semi-formal' && tempFahr < 54) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear a polo and a coat.';
       
} else if (eventType === 'semi-formal' && (tempFahr >= 54) || (tempFahr <= 70) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear a polo and a jacket.';
        
} else if (eventType === 'semi-formal' && tempFahr > 70) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear a polo and no jacket.';

} else if (eventType === 'formal' && tempFahr < 54) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear a suit and a coat.';
       
} else if (eventType === 'formal' && (tempFahr >= 54) || (tempFahr <= 70) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear a suit and a jacket.';
        
} else if (eventType === 'formal' && tempFahr > 70) {
    para.textContent = 'Since it is' + tempFahr + 'degrees and you are going to a' + eventType + 'event, you should wear a suit and no jacket.';
    
}
