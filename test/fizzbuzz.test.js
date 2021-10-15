import fizzBuzz from "../src/fizzbuzz"
test("replace 3 in Fizz, 5 in Buzz and 15", () => {
  expect(fizzBuzz()[0]).toBe(1);
  expect(fizzBuzz()[2]).toBe("Fizz");
  expect(fizzBuzz()[4]).toBe("Buzz")
  expect(fizzBuzz()[14]).toBe("FizzBuzz")
});
