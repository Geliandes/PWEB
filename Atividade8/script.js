const maxNumber = (n1, n2, n3) => {
  return Math.max(n1, n2, n3);
};

const orderByAsc = (n1, n2, n3) => {
  const result = new Array(n1, n2, n3).sort(function (a, b) {
    return a - b;
  });
  return result;
};

const isPalindromo = (string) => {
  const inverseString = string.toUpperCase().split("").reverse().join("");

  return string.toUpperCase() === inverseString
    ? `A palavra ${string} é um palíndromo`
    : `A palavra ${string} não é um palíndromo`;
};

const triangleType = (a, b, c) => {
  if (
    a < b + c &&
    a > b - c &&
    b < a + c &&
    b > a - c &&
    c < a + b &&
    c > a - b
  ) {
    if (a == b && b == c) return "Triângulo Equilatero";
    else if (a == b || a == c || b == c) return "Triângulo Isósceles";
    else return "Triângulo Escaleno";
  } else {
    return "Não é um triângulo";
  }
};
