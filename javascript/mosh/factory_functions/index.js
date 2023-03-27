
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoTreeFour

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1)
console.log()