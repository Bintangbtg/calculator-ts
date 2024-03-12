import * as readline from 'readline/promises'; // Import using promises API

interface Operasi {
  (a: number, b: number): number;
}

const operasi: { [key: string]: Operasi } = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  ":": (a, b) => a / b,
};

async function hitung(angka1: number, operator: string, angka2: number) {
  const operasiFn = operasi[operator];
  if (!operasiFn) {
    throw new Error(`Operator tidak valid: ${operator}`);
  }
  return operasiFn(angka1, angka2);
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Function to prompt user for valid number input (optional, but enhances UX)
  async function getNumberInput(prompt: string): Promise<number> {
    let input: string;
    do {
      input = await rl.question(prompt);
    } while (isNaN(parseFloat(input)));
    return parseFloat(input);
  }

  const angka1 = await getNumberInput("Masukkan angka pertama: ");
  const operator = await rl.question("Masukkan operator (+, -, x, :): ");
  const angka2 = await getNumberInput("Masukkan angka kedua: ");

  const hasil = await hitung(angka1, operator, angka2);
  console.log(`Hasil: ${hasil}`);
}

main();