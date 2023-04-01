class Shape {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    RenderShape();
    SetText();
    RenderSVG();
}

class Square extends Shape {
    super(text, textcolor, shapecolor);

    RenderShape(length) {
        return `<rect x="90" y="40" width="${length}" height="${length}" fill="${this.shapecolor}"></rect>`
    }

    SetText() {
        return `<text x="150" y="125" text-anchor = "middle" fill="${this.textcolor}"></text>`
    }

    RenderSVG() {
        return `<svg width="300" height="200>${this.RenderShape(120)} ${this.SetText()}</svg>`
    }
}

class Circle extends Shape {
    super(text, textcolor, shapecolor);

    RenderShape(radius) {
        return `<circle cx = "90" cy = "40" r="${radius}" fill="${this.shapecolor}"></circle>`
    }

    SetText() {
        return `<text x="150" y="125" text-anchor = "middle" fill="${this.textcolor}"></text>`
    }

    RenderSVG() {
        return `<svg width="300" height="200>${this.RenderShape(80)} ${this.SetText()}</svg>`
    }
}

class Triangle extends Shape {
    super(text, textcolor, shapecolor);

    RenderShape() {
        return `<polygon points=50,50 100,50 75,100"></polygon>`
    }

    SetText() {
        return `<text x="150" y="125" text-anchor = "middle" fill="${this.textcolor}"></text>`
    }

    RenderSVG() {
        return `<svg width="300" height="200>${this.RenderShape(80)} ${this.SetText()}</svg>`
    }
}