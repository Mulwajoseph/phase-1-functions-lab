// Code your solution in this file!
function distanceFromHqInBlocks(PickupLocation) {
    const Scuberlocation = 42;
    return PickupLocation - Scuberlocation;
}
console.log(distanceFromHqInBlocks())
console.log(distanceFromHqInBlocks(60))

//calculate the distance below 42nd street
//This makes sure thet the code returns a  positive number whether the sistance is below or above ScuberHeadquarters

function distanceFromHqInBlocks(PickupLocation) {
    const Scuberlocation = 42;

    if (PickupLocation >= Scuberlocation) {
        return PickupLocation - Scuberlocation;
    } else {
        return Scuberlocation - PickupLocation;
    }
}
console.log(distanceFromHqInBlocks(12))

//distance from Hq in feef
//we multiply the distance in block since 1block =264feet 
function distanceFromHqInFeet(PickupLocation) {
    const feetblock = 264;
    const blocks = distanceFromHqInBlocks(PickupLocation);
    return blocks * feetblock
}
console.log(distanceFromHqInFeet(30))
console.log(distanceFromHqInFeet(80))
console.log(distanceFromHqInFeet(42))


//distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    const feetblock = 264;
    const distanceInBlocks = destination - start;
    return distanceInBlocks >= 0 ? distanceInBlocks * feetblock : -distanceInBlocks * feetblock;
}
console.log(distanceTravelledInFeet(58, 60))
console.log(distanceTravelledInFeet(10, 60))
console.log(distanceTravelledInFeet(42, 42))

///fare price

function calculatesFarePrice(start,destination){
    const feetblock =264;
    const distanceInFeet = Math.abs( destination - start ) * feetblock
   
    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
      } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
      } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
      } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
      }
    }