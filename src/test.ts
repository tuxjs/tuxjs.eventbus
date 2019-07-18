import EventBus, { Subcriber } from './index';

const eventBus = new EventBus();

var sub1:Subcriber  = eventBus.subcribe('event1', (value: any) => {
    console.log('1: ' + value);
});

eventBus.subcribe('event1', (value: any) => {
    console.log('1: ' + value);
});

eventBus.subcribe('event2', (value: any) => {
    console.log('2: ' + value);
});

eventBus.subcribe('event3', (value: any) => {
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

eventBus.getSubcribers()