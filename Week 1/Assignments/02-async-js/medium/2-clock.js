setInterval(() =>{
    let date = new Date()
    let AM_PM = date.getHours() < 12 ? "AM" : "PM"
    console.log(`${date.getHours().toString().padStart(2, 0)}:${date.getMinutes()}:${date.getSeconds()} ${AM_PM}`);
}, 1000)