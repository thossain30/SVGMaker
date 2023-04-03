const Shape = require('shapes.js');

const square = new Square('SVG', 'blue', 'green');

describe('This should render the square', ()=> {
    expect(square.RenderShape(160)).toEqual(<rect x="90" y="40" width="160" height="160" fill="green"></rect>);
})