"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const promises_1 = __importDefault(require("node:fs/promises"));
const server = node_http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        const data = yield promises_1.default.readFile('./server2.html');
        res.end(data);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(error.message);
        }
    }
}))
    .listen(8080);
server.on('listening', () => {
    console.log('8080서버대기중임');
});
server.on('error', (error) => {
    console.error(error);
});
