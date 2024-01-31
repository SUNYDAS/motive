const a = [
    "When you have a dream, you've got to grab it and never let go.<br>— Carol Burnett",
    
    "Nothing is impossible. The word itself says 'I'm possible!<br>— Audrey Hepburn",
    
    "There is nothing impossible to they who will try.<br>— Alexander the Great",
    
    "The bad news is time flies. The good news is you're the pilot.<br>— Michael Altshuler",
    
    "Life has got all those twists and turns. You've got to hold on tight and off you go.<br>— Nicole Kidman",
    
    "Keep your face always toward the sunshine, and shadows will fall behind you.<br>— Walt Whitman",
    
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.<br>— Amal Clooney",

    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.<br>— Duchess Meghan",

    "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.<br>— Taylor Swift",

    "Success is not final, failure is not fatal: it is the courage to continue that counts.<br>- Winston Churchill"

]
let x = Math.floor(Math.random()*a.length);

window.onload = function (){
    document.getElementById('motive').innerHTML = a[x];
}

function next(){
    document.getElementById('motive').style = 'display:none';
    document.getElementById('motive-loop').style = 'display:block';
 
    let i=0;
    while(i<a.length){
        if(i!=x && typeof a[i]!=='undefined'){
            document.getElementById('motive-loop').innerHTML = a[i];
            delete a[i];
            break;
        }   
        i++;
    }
}
