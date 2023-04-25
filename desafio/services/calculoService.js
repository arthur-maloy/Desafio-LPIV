var service = {};
service.iteractiveWay = iteractiveWay;
service.recursiveWay = recursiveWay;

function iteractiveWay(inferior, superior) {
    total = 1;
    for(let i = inferior; i <= superior; i++) {
        console.log(i);
        console.log(total);
        total *= ( i + (1/i));
    }
    return total;
}

function recursiveWay(inferior, superior) {
    if(inferior >= superior) {
        return (inferior + (1/inferior))
    }
    return recursiveWay(inferior+1,superior) * (inferior + 1/inferior);                   
}
module.exports = service;
