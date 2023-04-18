class Shape {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    RenderShape(){}
    SetText(size) {
        return `<text x="50%" y="50%" text-anchor = "middle" font-size = "${size}" fill="${this.textcolor}">${this.text}</text>`
    }
    RenderSVG(){}
}

class Square extends Shape {
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor)
    }

    RenderShape(length) {
        return `<rect x="75" y="00" width="${length}" height="${length}" fill="${this.shapecolor}"></rect>`
    }


    RenderSVG() {
        return `<svg width="300" height="200">${this.RenderShape(150)} ${this.SetText(72)}</svg>`
    }
}

class Circle extends Shape {
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor)
    }

    RenderShape(radius) {
        return `<circle cx = "150" cy = "75" r="${radius}" fill="${this.shapecolor}"></circle>`
    }

    RenderSVG() {
        return `<svg width="300" height="200">${this.RenderShape(75)} ${this.SetText(72)}</svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor)
    }

    RenderShape() {
        return `<polygon points="150,0 250,150 50,150" fill="${this.shapecolor}"></polygon>`
    }

    SetText(size) {
        return `<text x="50%" y="60%" text-anchor = "middle" font-size = "${size}" fill="${this.textcolor}">${this.text}</text>`
    }

    RenderSVG() {
        return `<svg width="300" height="200">${this.RenderShape()} ${this.SetText(64)}</svg>`
    }
}

module.exports = {
    Shape,
    Square,
    Circle, 
    Triangle
};