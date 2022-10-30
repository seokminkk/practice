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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var res_1, users_1, list_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('/users')];
                case 1:
                    res_1 = _a.sent();
                    users_1 = res_1.data;
                    list_1 = document.getElementById('list');
                    list_1.innerHTML = '';
                    // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
                    Object.keys(users_1).map(function (key) {
                        var _this = this;
                        var userDiv = document.createElement('div');
                        var span = document.createElement('span');
                        span.textContent = users_1[key];
                        var edit = document.createElement('button');
                        edit.textContent = '수정';
                        edit.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            var name, err_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = prompt('바꿀 이름을 입력하세요');
                                        if (!name) {
                                            return [2 /*return*/, alert('이름을 반드시 입력하셔야 합니다')];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, axios_1["default"].put('/user/' + key, { name: name })];
                                    case 2:
                                        _a.sent();
                                        getUser();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        err_2 = _a.sent();
                                        console.error(err_2);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        var remove = document.createElement('button');
                        remove.textContent = '삭제';
                        remove.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            var err_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, axios_1["default"]["delete"]('/user/' + key)];
                                    case 1:
                                        _a.sent();
                                        getUser();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_3 = _a.sent();
                                        console.error(err_3);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        userDiv.appendChild(span);
                        userDiv.appendChild(edit);
                        userDiv.appendChild(remove);
                        list_1.appendChild(userDiv);
                        console.log(res_1.data);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
window.onload = getUser; // 화면 로딩 시 getUser 호출
// 폼 제출(submit) 시 실행
document.getElementById('form').addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var name, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                name = e.target.value;
                if (!name) {
                    return [2 /*return*/, alert('이름을 입력하세요')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1["default"].post('/user', { name: name })];
            case 2:
                _a.sent();
                getUser();
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error(err_4);
                return [3 /*break*/, 4];
            case 4:
                // e.target.username.value = '';
                e.target.value = '';
                return [2 /*return*/];
        }
    });
}); });
