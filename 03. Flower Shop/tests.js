let flowerShop = require('./flowerShop.js');
let { expect } = require('chai');

describe('flowerShop Object Function tests', () => {
    describe('calcPriceOfFlowers function tests', () => {
        it('Shoud throw an error if flowers are not string', () => {
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 5, 10)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(null, 5, 10)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers([], 5, 10)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers({}, 5, 10)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(5, 5, 10)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(NaN, 5, 10)).to.throw('Invalid input!')
        });
        it('Shoud throw an error if price is not integer', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5.5, 10)).to.throw('Invalid input!')
        });
        it('Shoud throw an error if quantity is not integer', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5, 10.5)).to.throw('Invalid input!')
        });
        it('Shoud return the price of the flowers', () => {
            expect(flowerShop.calcPriceOfFlowers('Roses', 5, 10)).to.equal('You need $50.00 to buy Roses!')
        });
    });
    describe('checkFlowersAvailable function tests', () => {
        it('Should return that the flower is available', () => {
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal('The Lily are available!')
        });
        it('Should return that the flower is sold', () => {
            expect(flowerShop.checkFlowersAvailable('Cactus', ["Rose", "Lily", "Orchid"])).to.equal('The Cactus are sold! You need to purchase more!')
        });
    });
    describe('sellFlowers function tests', () => {
        it('Shoud throw error if gardenArr is not array', () => {
            expect(() => flowerShop.sellFlowers({}, 1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers('Rose', 1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(1, 1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(NaN, 1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(null, 1)).to.throw('Invalid input!')
        });
        it('Shoud throw error if number is not integer', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.2)).to.throw('Invalid input!')
        });
        it('Shoud throw error if number is negative', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw('Invalid input!')
        });
        it('Shoud throw error if number is greater than array length', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw('Invalid input!')
        });
        it('Should remove the valid space and return the result', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });
    });
});