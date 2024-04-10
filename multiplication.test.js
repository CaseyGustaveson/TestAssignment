const { multiplication, concatOdds } = require('./index');

describe('multiplication', ()=>{
  test('it multiplies two numbers correctly', () => {
    expect(multiplication(1, 2)).toEqual(2)
    expect(multiplication(-1, 2)).toEqual(-2)
    expect(multiplication(-1, -2)).toEqual(2)
    expect(multiplication(1, 0)).toEqual(0)
  })
  
  test('it will return NaN if input does not contain two numbers', () => {
    expect(multiplication(1)).toEqual(NaN)
    expect(multiplication(1, 'a')).toEqual(NaN)
    expect(multiplication('a', 1)).toEqual(NaN)
    expect(multiplication('a', 'b')).toEqual(NaN)
    expect(multiplication()).toEqual(NaN)
  })
});

describe('concatOdds', ()=>{
  test('it concats two arrays and returns only odd numbers', () => {
    expect(concatOdds([1, 2, 3], [-1, 4, 5])).toEqual([-1, 1, 3, 5])
    expect(concatOdds([1], [5])).toEqual([1, 5])
  })
  
  test('it wont return duplicates', () => {
    expect(concatOdds([ 1, 2, 3 ], [ -1, 1, 4, 5 ])).toEqual([ -1, 1, 3, 5 ])
    expect(concatOdds([ 1, 1, 1, 1 ], [ 3, 3, 3, 3 ])).toEqual([ 1, 3 ])
  })

  test('it returns an empty array if two arrays are not passed in or if either arrays contains any input other than integers', () => {
    expect(concatOdds()).toEqual([])
    expect(concatOdds([ 1 ])).toEqual([])
    expect(concatOdds([ 1, 3, 'a' ], [ 1, 3 ])).toEqual([])
    expect(concatOdds([ 1, 3 ], [ 1, 3, 'a' ])).toEqual([])
    expect(concatOdds(0, [ 1, 2, 4 ])).toEqual([])
    expect(concatOdds([1, 3], 0)).toEqual([])
  })
});