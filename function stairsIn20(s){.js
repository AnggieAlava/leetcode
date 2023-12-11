function stairsIn20(s) {
  const oneYear = s.flat().reduce((total, steps) => total + steps, 0);
  return oneYear * 20;
}

const stairs = [
  [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
  ],
];

const estimate = stairsIn20(stairs);
console.log(estimate);
