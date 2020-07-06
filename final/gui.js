function apply() {
    //select reflection model
    var element = document.getElementById("target");

    var elements = element.options;

    for (var a = "", i = 0, l = elements.length; l > i; i++) {
        if (elements[i].selected) {
            a += elements[i].value + " ";
        }
    }
    console.log("Result: " + a);    

    //input parameter
    const ka = document.getElementById("ka").value;
    const kd = document.getElementById("kd").value;
    const ks = document.getElementById("ks").value;
    const n = document.getElementById("n").value;
    const m = document.getElementById("m").value;
    const F0 = document.getElementById("F0").value;
    console.log(ka);
    
    setParameters(a, ka, kd, ks, n, m, F0);
}