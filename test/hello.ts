import 'mocha';
import { expect } from 'chai';

describe('sample test', () => {
  it('should return sample', () => {
    const result = 'sample!';
    expect(result).to.equal('sample!');
  });
});