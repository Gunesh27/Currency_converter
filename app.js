
let curr = fetch(`https://api.frankfurter.app/currencies`)
    .then(resp => resp.json())
    .then((res) => {
        dropdown(res);
    }).catch((err) => { console.log(err); });

let select1 = document.getElementsByTagName("select")[0]
let select2 = document.getElementsByTagName("select")[1]
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let curr1 = select1.options[select1.selectedIndex].value;
    let curr2 = select2.options[select2.selectedIndex].value;
    let input1 = document.getElementsByTagName("input")[0];
    let input2 = document.getElementsByTagName("input")[1];
    if (curr1 == curr2) {
        alert('Choose different currencies!')
    }
    else if (input1.value !== null) {
        const host = 'api.frankfurter.app';
        if (input1.value !== null) {
            console.log(curr2);
            fetch(`https://${host}/latest?amount=${input1.value}&from=${curr1}&to=${curr2}`)
                .then(resp => resp.json())
                .then((data) => {
                    console.log(Object.values(data.rates)[0]);
                    document.getElementsByTagName("input")[1].value = Object.values(data.rates)[0]
                });
        }
        // if(input2.value !== null){
        //     fetch(`https://${host}/latest?amount=${input2.value}&from=${curr2}&to=${curr1}`)
        //         .then(resp => resp.json())
        //         .then((data) => {
        //             console.log(Object.values(data.rates)[0]);
        //             document.getElementsByTagName("input")[0].value = Object.values(data.rates)[0]
        //         });
        // }
    }
    else {
        alert('Choose different currencies!')
    }
    // else if(input2 !== null) {
    //     const host = 'api.frankfurter.app';
    //     console.log(curr2);
    //     fetch(`https://${host}/latest?amount=${input1.value}&from=${curr1}&to=${curr2}`)
    //         .then(resp => resp.json())
    //         .then((data) => {
    //             console.log(Object.values(data.rates)[0]);
    //         });
    // }
})

function dropdown(res) {
    let arr = Object.entries(res)
    for (i = 0; i <= arr.length - 1; i++) {
        let opt = `<option>${arr[i][0]}</option>`
        select1.innerHTML += opt;
        select2.innerHTML += opt;
    }
}