function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Обидва аргументи повинні бути числами");
  }

  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return numerator / denominator;
}

try {
  const result1 = divide(10, 2);
  console.log("Результат:", result1);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result2 = divide(5, 0);
  console.log("Результат:", result2);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result3 = divide("10", 2);
  console.log("Результат:", result3);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}