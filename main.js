    const dollar = document.getElementById('dollar');
    const cent = document.getElementById('cent');

    console.log(dollar.value);

    function dollarToCent() {
        if (dollar.value == "") {
            cent.value = "";
            alert("Please enter a value");
            return;
        }
        else if(dollar.value && dollar.value.includes(".")) {
            dollar.value = dollar.value.substring(0, dollar.value.indexOf(".") + 4);
            cent.value = dollar.value * 100 + " cents";
        }
        else {

            cent.value =  dollar.value * 100 + " cents";
        }
        // cent.value = dollar.value * 100;


    }