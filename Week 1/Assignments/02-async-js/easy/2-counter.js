let counter = (i, maxCount, interval) => {
    console.log(i)
    if (i < maxCount){
        setTimeout(() => {
            counter(i + 1, maxCount, interval)
        }, interval)
    }
}

counter(1, 20, 1000)