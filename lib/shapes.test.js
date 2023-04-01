const shape = new Square("SVG", "blue", "green");
shape.RenderShape(120);
shape.SetText();
expect(shape.RenderSVG()).toEqual('<svg width="300" height="200>${this.RenderShape(120)} ${this.SetText()}</svg>');