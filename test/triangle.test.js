// test/triangle.test.js

const { expect } = require('chai');
const Triangle = require('../src/triangle');

describe('Triangle', () => {
  describe('Constructor', () => {
    it('devrait créer un triangle avec des côtés valides', () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.a).to.equal(3);
      expect(triangle.b).to.equal(4);
      expect(triangle.c).to.equal(5);
    });

    it('devrait lever une erreur si un côté est négatif', () => {
      expect(() => new Triangle(-1, 4, 5)).to.throw('Les côtés doivent être positifs');
    });

    it('devrait lever une erreur si un côté est zéro', () => {
      expect(() => new Triangle(0, 4, 5)).to.throw('Les côtés doivent être positifs');
    });

    it('devrait lever une erreur si les côtés ne forment pas un triangle valide', () => {
      expect(() => new Triangle(1, 2, 10)).to.throw('Les côtés ne forment pas un triangle valide');
    });
  });

  describe('perimeter()', () => {
    it('devrait calculer le périmètre correctement', () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.getPerimeter()).to.equal(12);
    });

    it('devrait calculer le périmètre pour un triangle équilatéral', () => {
      const triangle = new Triangle(5, 5, 5);
      expect(triangle.getPerimeter()).to.equal(15);
    });

    it('devrait calculer le périmètre pour un triangle isocèle', () => {
      const triangle = new Triangle(5, 5, 6);
      expect(triangle.getPerimeter()).to.equal(16);
    });
  });

  describe('area()', () => {
    it('devrait calculer l\'aire d\'un triangle rectangle (3, 4, 5)', () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.getArea()).to.be.closeTo(6, 0.01);
    });

    it('devrait calculer l\'aire d\'un triangle équilatéral', () => {
      const triangle = new Triangle(6, 6, 6);
      const expectedArea = (Math.sqrt(3) / 4) * 36;
      expect(triangle.getArea()).to.be.closeTo(expectedArea, 0.01);
    });

    it('devrait calculer l\'aire d\'un triangle isocèle', () => {
      const triangle = new Triangle(5, 5, 6);
      expect(triangle.getArea()).to.be.closeTo(12, 0.01);
    });

    it('devrait calculer l\'aire d\'un triangle scalène', () => {
      const triangle = new Triangle(7, 8, 9);
      expect(triangle.getArea()).to.be.closeTo(26.83, 0.01);
    });
  });

  describe('type()', () => {
    it('devrait identifier un triangle équilatéral', () => {
      const triangle = new Triangle(5, 5, 5);
      expect(triangle.getType()).to.equal('équilatéral');
    });

    it('devrait identifier un triangle isocèle (a = b)', () => {
      const triangle = new Triangle(5, 5, 7);
      expect(triangle.getType()).to.equal('isocèle');
    });

    it('devrait identifier un triangle isocèle (b = c)', () => {
      const triangle = new Triangle(7, 5, 5);
      expect(triangle.getType()).to.equal('isocèle');
    });

    it('devrait identifier un triangle isocèle (a = c)', () => {
      const triangle = new Triangle(5, 7, 5);
      expect(triangle.getType()).to.equal('isocèle');
    });

    it('devrait identifier un triangle scalène', () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.getType()).to.equal('scalène');
    });
  });
});