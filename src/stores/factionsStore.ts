import { defineStore } from 'pinia';

// Definizione Nazione
export interface Nazione {
  name: string;
  imgUrl: string;
  description: string
  showDescription: boolean;
  personeImportanti: Vip[];
  showVips: boolean;
}

// Definizione Associazione
export interface Vip {
  nome: string;
  ruolo?: string;
  descrizione: string;
  imgUrl: string;
}

export interface Associazione {
  name: string;
  personeImportanti: Vip[];
  imgUrl: string;
  description: string
  showDescription: boolean;
  showVips: boolean;
}


export interface FactionState {
  nazioni: Nazione[];
  associazioni: Associazione[];
}

export const useFactionsStore = defineStore('faction', {
  state: (): FactionState => ({
    nazioni: [
      {
        name: 'Nazione',
        imgUrl: '',
        description: '',
        showDescription: false,
        showVips: false,
        personeImportanti: [
          {
            nome: 'Persona Importante',
            ruolo: 'Ruolo Importante',
            descrizione: 'Lui è qualcuno.',
            imgUrl: 'string'
          },
        ],
      },
    ],
    associazioni: [
      {
        name: 'La Gilda degli Avventurieri',
        imgUrl: '/imgs/associazioni/gilda/Gilda.png',
        description: "La Gilda degli Avventurieri è un\'associazione rinomata e rispettata, fondata da coraggiosi esploratori, mercenari e cercatori di tesori che condividono una passione insaziabile per l\'avventura. Questa gilda è il rifugio per chi non teme l\'ignoto, chi ha sempre un piede sul sentiero e l\'occhio fisso all\'orizzonte, in cerca di nuove sfide e tesori nascosti nelle profondità di antiche rovine o tra i confini di terre inesplorate. Ogni membro della Gilda, sia esso combattente, incantatore o esploratore, condivide un codice non scritto che abbraccia l\'audacia, la lealtà verso i compagni e il desiderio di spingersi oltre ogni limite. Dalle missioni per recuperare artefatti perduti alle battaglie contro creature mitiche, ogni impresa è un\'opportunità per crescere e dimostrare il proprio valore. Le sfide diventano sempre più grandi, ma la ricompensa è altrettanto epica: fama, gloria, e la promessa di inestimabili ricchezze. Il quartier generale della Gilda è un imponente edificio in pietra, un mix tra una fortezza e una taverna, dove i membri si ritrovano per raccontarsi storie di terre lontane e pianificare la prossima impresa. Il grande stemma della Gilda, con due spade incrociate dietro uno scrigno del tesoro traboccante di monete d\'oro, è un simbolo di avventura e prosperità, noto in ogni angolo del mondo. La Gilda accoglie chiunque abbia il coraggio e la determinazione di affrontare l\'ignoto, offrendo supporto, alleanze e la possibilità di diventare leggenda. Per gli Avventurieri, la vera ricchezza non è solo nei tesori che si trovano, ma nelle sfide superate e nei legami forgiati lungo il cammino.",
        showDescription: false,
        showVips: false,
        personeImportanti: [
          {
            nome: 'Makoto Rosenwald',
            ruolo: 'Capo Gilda',
            descrizione: 'Lui è il cpao della gilda!',
            imgUrl: '/imgs/associazioni/gilda/makotoR.jpg'
          },
        ],
      },
      {
        name: 'Cavalca Grifoni di Melodia',
        imgUrl: '/imgs/associazioni/cavalcaGrifoni/LogoCavalcaGrifoni.jpg',
        description: "Descrizione Cavalca Grifoni.",
        showDescription: false,
        showVips: false,
        personeImportanti: [
          {
            nome: 'Belecthor',
            ruolo: 'Gran Maestro',
            descrizione: 'Lui è il capo dei cavalca Grifoni! Il suo grifone è Syphalus, ha un\'aquila di nome Fannie.',
            imgUrl: '/imgs/associazioni/cavalcaGrifoni/belecthor.jpg'
          },
        ],
      },
      {
        name: 'Lame di Ossidiana',
        imgUrl: '/imgs/associazioni/lameOssidiana/LogoLameOssidiana.jpg',
        description: "Descrizione Lame di Ossidiana.",
        showDescription: false,
        showVips: false,
        personeImportanti: [
          {
            nome: 'Lama di Ossidiana',
            ruolo: 'Cultista Standard',
            descrizione: 'Lui è un cultista standard!',
            imgUrl: '/imgs/associazioni/lameOssidiana/cultista.jpg'
          },
        ],
      },
    ]
  }),

  actions: {
    toggleDescription(fazione: Nazione | Associazione) {
      fazione.showDescription = !fazione.showDescription
    },

    toggleVips(fazione: Nazione | Associazione) {
      fazione.showVips = !fazione.showVips
    },

    returnDescription(description: string): string {
      // Dividi la descrizione in un array, rimuovendo i punti finali
      const sentences = description.split('.').filter(sentence => sentence.trim() !== '');

      // Riassembla le frasi con un punto seguito da un '<br>', eccetto l'ultima frase
      return sentences.map(sentence => sentence.trim()).join('.<br>') + '.';
    }
  },
});
