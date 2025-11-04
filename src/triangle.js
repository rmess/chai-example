class Triangle {
  constructor(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Les côtés doivent être positifs');
    }
    
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Les côtés ne forment pas un triangle valide');
    }
    
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // Calcule le périmètre du triangle
  getPerimeter() {
    return this.a + this.b + this.c;
  }

  // Calcule l'aire du triangle avec la formule de Héron
  getArea() {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  // Détermine le type de triangle
  getType() {
    if (this.a === this.b && this.b === this.c) {
      return 'équilatéral';
    } else if (this.a === this.b || this.b === this.c || this.a === this.c) {
      return 'isocèle';
    } else {
      return 'scalène';
    }
  }
}

module.exports = Triangle;