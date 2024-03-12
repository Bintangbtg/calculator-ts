"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline/promises")); // Import using promises API
const operasi = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    ":": (a, b) => a / b,
};
function hitung(angka1, operator, angka2) {
    return __awaiter(this, void 0, void 0, function* () {
        const operasiFn = operasi[operator];
        if (!operasiFn) {
            throw new Error(`Operator tidak valid: ${operator}`);
        }
        return operasiFn(angka1, angka2);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        // Function to prompt user for valid number input (optional, but enhances UX)
        function getNumberInput(prompt) {
            return __awaiter(this, void 0, void 0, function* () {
                let input;
                do {
                    input = yield rl.question(prompt);
                } while (isNaN(parseFloat(input)));
                return parseFloat(input);
            });
        }
        const angka1 = yield getNumberInput("Masukkan angka pertama: ");
        const operator = yield rl.question("Masukkan operator (+, -, x, :): ");
        const angka2 = yield getNumberInput("Masukkan angka kedua: ");
        const hasil = yield hitung(angka1, operator, angka2);
        console.log(`Hasil: ${hasil}`);
    });
}
main();
