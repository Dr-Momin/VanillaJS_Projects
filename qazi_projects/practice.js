

const letterCounter = () => {
    const phrase = 'hey, can you go to grocery';
    let counter = 0;
    // for (let i = 0; i < phrase.length; i++) {
    //     if (phrase[i] !== ' ') {
    //         counter++;
    //     }
    // }

    for(let letter of phrase){
        if (letter !== ' ')
            counter++;

    }
    console.log(counter);
}


letterCounter();
