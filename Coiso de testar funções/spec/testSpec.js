it("Multiplicação por três", function(){
    expect(inteiro(1, 5, 2)).toBe(10)
    expect(inteiro(2, 6, 4)).toBe(48)
    expect(inteiro(3, 0, 9)).toBe(0)
})

it("Divisão sem zero", function(){
    expect(divisao(7, 1)).toBe(7)
    expect(divisao(10, 5)).toBe(2)
    expect(divisao(12, 6)).toBe(2)
    expect(divisao(12, 0)).toBe("Não é possível dividir por 0")
})

it("Celsius <=> Fahrenheit",function(){
    expect(celsiusFahrenheit(0)).toBe(32) 
    expect(celsiusFahrenheit(100)).toBe(212)
    expect(celsiusFahrenheit(-40)).toBe(-40)
    expect(fahrenheitCelsius(32)).toBe(0)
    expect(fahrenheitCelsius(212)).toBe(100)  
    expect(fahrenheitCelsius(-40)).toBe(-40)
})

it("Média de três", function() {
  expect(media(5, 4, 6)).toBe(5)
  expect(media(7, 7, 7)).toBe(7)
  expect(media(2.5, 3.5, 4.5)).toBe(3.5)
  expect(media(100, 200, 300)).toBe(200)
  expect(media(-2, -4, -6)).toBe(-4)
  expect(media(-10, 0, 10)).toBe(0)
})

it("Contar caracteres", function() {
  expect(contar("Eu amo JavaScript")).toBe(17)
  expect(contar("Olá, mundo!")).toBe(11)
  expect(contar("12345")).toBe(5)
  expect(contar("   ")).toBe(3)
  expect(contar("!@#$%^&*()")).toBe(10)
})

it("Calculadora", function() {
  expect(calcular(1, 2, "+")).toBe(3)
  expect(calcular(5, 3, "-")).toBe(2)
  expect(calcular(4, 6, "*")).toBe(24)
  expect(calcular(12, 4, "/")).toBe(3)
  expect(calcular(7, 2, "%")).toBe("Operação inválida")
  expect(calcular(0, 5, "+")).toBe(5)
  expect(calcular(-3, -7, "+")).toBe(-10)
  expect(calcular(-8, 2, "/")).toBe(-4)
  expect(calcular(9, 0, "/")).toBe(Infinity)
  expect(calcular(0, 0, "*")).toBe(0)
})
