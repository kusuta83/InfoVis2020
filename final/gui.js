function apply() {
    //select reflection model
    var model = document.selbox.target.selectedIndex;
    // console.log(model);


    //input parameter
    const ka = document.getElementById("ka").value;
    const kd = document.getElementById("kd").value;
    const ks = document.getElementById("ks").value;
    const n = document.getElementById("n").value;
    const m = document.getElementById("m").value;
    const F0 = document.getElementById("F0").value;
    
    setParameters(model, ka, kd, ks, n, m, F0);
    main();
}