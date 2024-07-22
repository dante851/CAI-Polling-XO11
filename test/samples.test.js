import { expect } from 'chai';
import { CalculationOperations } from '../src/routes/index';

describe('#sum()', function() {

  context('without arguments', function() {
    it('should return 8', function() {
      expect(CalculationOperations.Add(5,3)).to.equal(8)
    })
  })
})