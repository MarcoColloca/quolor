import { defineStore } from 'pinia';

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    showEvents: boolean;
    events: string[];
}

export interface timelineState{
    eras: TimelineEvent[]
}

export const useTimelineStore = defineStore({ 
    id: 'timelineStore',
    state: (): timelineState => ({
        eras: [
            {
                year: '0',
                title: 'Creazione',
                description: 'Gli dei creano Quolor, con le sue terre e tutte le creature viventi. Leggende narrano di come andarono poi a vivere in cima all\'infinita torre bianca, chiamata successivamente Torre degli Dei.',
                events: ['evento1', 'evento2', 'evento3', 'evento4', 'evento5'],
                showEvents: false,
            },
            {
                year: '1 - 1\'000',
                title: 'Era Mancante',
                description: 'Anni di cui non è rimasta alcuna traccia o conoscenza.',
                events: [],
                showEvents: false,
            },
            {
                year: '1\'001 - 5\'000',
                title: 'Era di assestamento',
                description: 'Ogni razza fa gruppo a sè, creando fazioni sempre in guerra per la supremazia.',
                events: ['evento1', 'evento2', 'evento3', 'evento4', 'evento5'],
                showEvents: false,
            },
            {
                year: '5\'001 - 15\'000',
                title: 'Era della tirannia di Kamish',
                description: 'Si risveglia Kamish, un Grande Dragone in grado di imbrigliare la furia della natura. Stabilì un controllo tirannico su ogni creatura o essere vivente. Venne poi sigillato da 5 Eroi eletti dalle divinità.',
                events: ['evento1', 'evento2', 'evento3', 'evento4', 'evento5'],
                showEvents: false,
            },
            {
                year: '10\'001 - 20\'000',
                title: 'Era della prosperità',
                description: 'Reduci dalla schiavitù del grande dragone, i popoli sono ormai propensi a collaborare per la pace ed il bene comune.',
                events: ['evento1', 'evento2', 'evento3', 'evento4', 'evento5'],
                showEvents: false,
            },
            {
                year: '20\'001 - oggi',
                title: 'Era della Divisione',
                description: 'I vari popoli sono ormai divisi in diverse fazioni ben distinte. Non più in base alla razza come nella prima era, ma in base a credenze, cultura e politica. È pensiero comune che le tensioni possano presto sfociare in nuovi conflitti.',
                events: ['evento1', 'evento2', 'evento3', 'evento4', 'evento5'],
                showEvents: false,
            },
            {
                year: '23\'511',
                title: 'Anno Attuale',
                description: 'Anno da cui hanno inizio gli eventi della nostra narrazione.',
                events: [],
                showEvents: false,
            },
        ]
    }),
    actions:{
        toggleEvents(event: TimelineEvent): void {
          event.showEvents = !event.showEvents
        }
    }
});
