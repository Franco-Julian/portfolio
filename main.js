function show () {
    let status = true;
    if(document.getElementById("appear").style.display === "flex") {
        document.getElementById("appear").style.display = "none";
    } else{
        document.getElementById("appear").style.display = "flex";
    }
    
}