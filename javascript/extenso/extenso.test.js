
const extenso = require('./extenso')

test('0', () => expect(extenso(0)).toBe("zero"))
test('1', () => expect(extenso(1)).toBe("um"))
test('2', () => expect(extenso(2)).toBe("dois"))
test('3', () => expect(extenso(3)).toBe("três"))
test('4', () => expect(extenso(4)).toBe("quatro"))
test('5', () => expect(extenso(5)).toBe("cinco"))
test('6', () => expect(extenso(6)).toBe("seis"))
test('7', () => expect(extenso(7)).toBe("sete"))
test('8', () => expect(extenso(8)).toBe("oito"))
test('9', () => expect(extenso(9)).toBe("nove"))
test('10', () => expect(extenso(10)).toBe("dez"))
test('11', () => expect(extenso(11)).toBe("onze"))
test('12', () => expect(extenso(12)).toBe("doze"))
test('13', () => expect(extenso(13)).toBe("treze"))
test('23', () => expect(extenso(23)).toBe("vinte e três"))
test('30', () => expect(extenso(30)).toBe("trinta"))
test('54', () => expect(extenso(54)).toBe("cinquenta e quatro"))
test('70', () => expect(extenso(70)).toBe("setenta"))
test('100', () => expect(extenso(100)).toBe("cem"))
test('101', () => expect(extenso(101)).toBe("cento e um"))
test('117', () => expect(extenso(117)).toBe("cento e dezessete"))
test('123', () => expect(extenso(123)).toBe("cento e vinte e três"))
test('363', () => expect(extenso(363)).toBe("trezentos e sessenta e três"))
test('700', () => expect(extenso(700)).toBe("setecentos"))
test('808', () => expect(extenso(808)).toBe("oitocentos e oito"))






