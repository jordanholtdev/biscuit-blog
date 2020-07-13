const form = document.getElementById('contactForm');
const message = document.getElementById('message');


// prevent form from submitting if the message contains <> 

form.addEventListener('submit', e => {
    
    const pattern = /<[\s\S]*?>/gm;
    // e.preventDefault();
    
    if(pattern.test(form.message.value)){
        form.message.setCustomValidity('Do not use special characters such as >,<,|')
        event.preventDefault();
    }  else {
        console.log('passed')
        form.message.setCustomValidity("")
    }
});