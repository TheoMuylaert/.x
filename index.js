if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(resgistration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failled!");
        console.log(error);
    })
}