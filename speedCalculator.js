// function that detect speed
function calculateDemeritsPoints() {
    const speedLimit = 70 ;
    const kmPerDemeritPoint =5;
    const speed = ("speed of the car");
// condition check speed and demerit points
    if(speed < speedLimit) {
       return "OK";
       // No demerit points 
    }
    const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoint)
    if (demeritPoints >12) {
        return("License suspended");
    } else {
        return("points:" + demeritPoints);{
        
        }
    } }
    // calling the function
    console.log (calculateDemeritsPoints())
