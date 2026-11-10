function activateHyperdrive() {
    return "Hyperdrive activated!";
}

const scanForLife = () => "No lifeforms detected";

const currentCoordinates = () => ({x: 10, y: 20,z: 30});

const spacecraft = {
    receiveMessage: (message) => {console.log(`Message received: ${message}`)}
};

console.log(activateHyperdrive());
console.log(scanForLife());
console.log(currentCoordinates());

spacecraft.receiveMessage(activateHyperdrive());
spacecraft.receiveMessage(scanForLife());
spacecraft.receiveMessage(JSON.stringify(currentCoordinates()));

