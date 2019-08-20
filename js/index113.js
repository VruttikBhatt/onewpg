function getShapePerimeter(base,height) {
    let area
    if (base>=100 || height>=100) {
        return console.log("perimeter is too big")
    } else if (base!=height) {
        area = base*height
    } else if (base==height) {
        area = base*height
    }
    return console.log("Perimeter is fine.\n",area,"is the shape perimeter")
}
getShapePerimeter(100,100);
