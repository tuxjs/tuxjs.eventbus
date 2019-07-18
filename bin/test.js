"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var eventBus = new index_1.default();
var sub1 = eventBus.subcribe('event1', function (value) {
    console.log('1: ' + value);
});
eventBus.subcribe('event1', function (value) {
    console.log('1: ' + value);
});
eventBus.subcribe('event2', function (value) {
    console.log('2: ' + value);
});
eventBus.subcribe('event3', function (value) {
    console.log('3: ' + value);
});
eventBus.publish('event1', 1);
eventBus.publish('event2', 'hello world 2');
eventBus.publish('event3', "Hi");
sub1.unsubcribe();
console.log('-----');
eventBus.publish('event1', 100);
eventBus.publish('event2', 'hello world 3');
eventBus.publish('event3', "Say goodbye");
eventBus.getSubcribers();
//# sourceMappingURL=test.js.map