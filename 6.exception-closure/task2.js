class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = 0.5 * this.perimeter;
        return Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 1000) / 1000;
    }
}

class TriangleForCatch {
    get perimeter() {
        return 'Ошибка! Треугольник не существует';
    }

    get area() {
        return 'Ошибка! Треугольник не существует';
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);

    } catch (error) {
        return new TriangleForCatch;
    }
}



