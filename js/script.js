var eventType = prompt('What type of event are you going to? Choose from the following: casual, semi-formal, and formal.');
var tempFahr = prompt('How many degrees Fahrenheit is it outside?');

if (eventType === 'casual') {
    eventClothing ='something comfy';
} else if (eventType === 'semi-formal') {
    eventClothing = 'a polo';
} else if (eventType === 'formal') {
    eventClothing = 'a suit';
} else {eventClothing = 'Not an option.';}


if (tempFahr < 54) {
    tempClothing ='a coat';
} else if (tempFahr >= 54 && tempFahr <= 70) {
    tempClothing = 'a jacket';
} else if (tempFahr > 70) {
    tempClothing = 'no jacket';
} else {tempClothing = 'Not an option.';}

var result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear ' + eventClothing + ' and ' + tempClothing + '.'

console.log(result);
 