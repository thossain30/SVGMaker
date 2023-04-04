const {Shape, Circle, Rectangle, Triangle, Square} = require('./shapes.js');



describe('Shapes Test', ()=> {
    it("Square Test: should render a green square with blue SVG text", ()=> {
        const square = new Square('SVG', 'blue', 'green');
        expect(square.RenderSVG()).toEqual(`<svg width="300" height="200">${square.RenderShape(150)} ${square.SetText(72)}</svg>`);
    })

    it("Circle Test: should render a white circle with red TZH text", ()=> {
        const circle = new Circle('TZH', 'red', 'white');
        expect(circle.RenderSVG()).toEqual(`<svg width="300" height="200">${circle.RenderShape(75)} ${circle.SetText(72)}</svg>`);
    })

    it("Triangle Test: should render a white circle with red GTB text", ()=> {
        const triangle = new Triangle('GTB', 'Black', 'Pink');
        expect(triangle.RenderSVG()).toEqual(`<svg width="300" height="200">${triangle.RenderShape(75)} ${triangle.SetText(64)}</svg>`);
    })
})