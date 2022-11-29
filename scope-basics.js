let a = 'Emmanuel';
let b = 'Odum';
let c = 'Chibuike';

function scopeTest() {
    console.log(a);


    if (a != '') {
        console.log(b.length);
    }
    console.log(c);
}

scopeTest();