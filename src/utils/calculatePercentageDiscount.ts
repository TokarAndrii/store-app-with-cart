export const calculatePercentageDiscout = (
  discountPercentageValue: number,
  originalTotalAmount: number
): number => {
  const discount = (originalTotalAmount * discountPercentageValue) / 100;
  const discountedAmount = originalTotalAmount - discount;
  return discountedAmount;
};
