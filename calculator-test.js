
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 28000,
    years: 4,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('655.02');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 12000,
    years: 8,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual('146.27');
});
/// etc
