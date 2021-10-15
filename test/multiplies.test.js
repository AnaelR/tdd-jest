import { mult } from "../src/multiplies";
test('mult 2 * 3 to equal 6', ()=>{
    expect(mult(2, 3)).toBe(6)
})