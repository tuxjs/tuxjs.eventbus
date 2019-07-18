export interface IEnventBus {
    publish(eventType: string, agrs: number): void;
    subcribe(eventType: string, callback: any): any;
}

export class Subcriber {
    private id: Symbol;
    private eventType: string;
    public callback: any;
    private unSubcribe: any;

    constructor(id: Symbol, eventType: string, callback: any, unSubcribe: any) {
        this.id = id;
        this.eventType = eventType;
        this.callback = callback;
        this.unSubcribe = unSubcribe;
    }

    unsubcribe() {
        this.unSubcribe(this.id, this.eventType);
    }
}

export default class EventBus implements IEnventBus {

    private subscriptions: Map<string, Subcriber[]>;

    public constructor() {
        this.subscriptions = new Map();
    }

    public publish(eventType: string, agrs: any) {
        if (!this.subscriptions.has(eventType)) return;

        this.subscriptions.get(eventType)!.forEach(sub => {
            sub.callback(agrs);
        });
    }

    public subcribe(eventType: string, callback: any): any {
        const id = Symbol(eventType);

        const subcriber = new Subcriber(id, eventType, callback, (idUnSubcriber: any, eventTypeSubcriber: any) => {
            for (let i = 0; i < this.subscriptions.get(eventTypeSubcriber)!.length; i++) {
                if (idUnSubcriber === id) {
                    this.subscriptions.get(eventTypeSubcriber)!.splice(i, 1);
                }
            }
        });

        if (this.subscriptions.has(eventType)) {
            this.subscriptions.get(eventType)!.push(subcriber);
        } else {
            this.subscriptions.set(eventType, [subcriber]);
        }
        return subcriber;
    }

    public getSubcribers() {
        return this.subscriptions;
    }
}