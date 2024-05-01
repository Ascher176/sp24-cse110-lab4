function currTime() {
    let d = new Date();
    let time =  d.toLocaleDateString();
    console.log(time);
}

setInterval(currTime, 1000);