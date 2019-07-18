import EventBus, { Subcriber } from './index';

var sub1:Subcriber  = EventBus.subcribe('event1', (value: any) => {
    console.log('1: ' + value);
});

EventBus.subcribe('event1', (value: any) => {
    console.log('1: ' + value);
});

EventBus.subcribe('event2', (value: any) => {
    console.log('2: ' + value);
});

EventBus.subcribe('event3', (value: any) => {
    console.log('3: ' + value);
});


EventBus.publish('event1', 1);
EventBus.publish('event2', 'hello world 2');
EventBus.publish('event3', "Hi");

sub1.unsubcribe();

console.log('-----');

EventBus.publish('event1', 100);
EventBus.publish('event2', 'hello world 3');
EventBus.publish('event3', "Say goodbye");

EventBus.getSubcribers()