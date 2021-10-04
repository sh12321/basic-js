
export default function getSumOfDigits(n) {
  let sum = 0;
  
  if (n < 10) return n;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += +n[i]
  }
  return getSumOfDigits(sum);
}
