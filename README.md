# Corso angular 4Bi 2024-2025

## Link utili

> [Corso prof. Andrea Trentini](https://github.com/andreatrentini/corsoangular4bi2024-2025)

> [Nodejs - Sito ufficiale](https://nodejs.org/en)

> [npm - Sito ufficiale](https://www.npmjs.com/)

> [Angular - Sito ufficiale](https://angular.dev/)


## Primi passi
Controllare che node e npm siano installati nel computer.  
In caso contrario scaricare dalla rete i programmi di installazione e eseguirli sul proprio computer.  
Per contralle se sono installati e la versione:  
``` node -v```  
``` npm -v```  

## Installare Angular
Per installare angular si usa Node Packe Manager (npm):  
``` npm install -g @angular/cli```  

## Creare la prima app
Per creare un'applicazione angular:
``` ng new first-app```

> NB: i nomi composti vanno separati da trattino. Non usare camel case. Questo NON vale per i nomi delle variabili o degli oggetti.

## Struttura di un'applicazione Angular
Un'applicazione è interamente contenuta inuna directory con il nome del progetto. (se cancello la directory del progetto non rimane traccia.)
Per seguire comandi angular su un determinato progetto, è necessario entrare nella directory (renderla directory corrente.)

- .vscode: è una crtella privata di Visual Studio Code, NON VA MODIFICATA in nessun modo
- node_modules: contiene tutte le librerie necessarie alla realizzazione della nostra applicazione. Può essere ricreata in qualsiasi momento con il programma ```npm install```
- public: contiene tutti i file multimediali (immagini, suoni, video, ecc), di testo, ecc, che devono essere usati nell'applicazione, ad eccezione dei file che contengono codice.
- src: contiene tutti i file di codice che costituiscono l'applicazione:  
  - app: contiene tutti i componenti, servizi, menu, router, ecc
  - index.html: il file principale della webapp
  - main.ts: configurazione della webapp 
  - style.css: foglio stile principale dell'applicazione
- angular.json: definizione globale dell'applicazione. Salvo casi speciali non va modificato.
- package.json (package-lock.json): contiene l'elenco delle librerie necessarie al funzionamento di angular
- tsconfig...: contengono parametri di configurazione del linguaggio Typescript, raramente vengono modificati.

## Linguaggi in un'applicazione angular
HTML, CSS e Typescript

Typescript è un superset del linguaggio javascript

## Eseguire un'applicazione angular
```ng serve```

## Elementi di un'applicazione angular
1. Componenti: un componente è un parte della pagina web che contiene l'applicazione: intestazione, menu, una tabella, un input, una form  
   Un componente è definito con 3 liunguaggi di programmazione:  
   - HTML: definisce la vista
   - CSS: definisce lo stile
   - Typescript: definisce la business logic. Il linguaggio è case sensitive.
   - spec.ts: contiene i test automatici per il componente


## Componenti
Sono definiti da una classe: ```export class AppComponent...``` e da un decoratore: ```@Component({```.  
- selector: nome del tag per inserire il componente nell'applicazione
- standalone: true a partire dalla versione 17 di angular, ogni componente contiene tutte le definizioni (import) necessari al suo funzionamento
- imports: array di classi, moduli, componenti, altri oggetti da importare per il funzionamento del componente
- templateUrl: percorso e nome del file che contiene il codice HTML del componente
- styleUrl: percorso e nome del file CSS

Per creare un nuovo componente il comando da usare è: ```ng generate component nome-del-componente``` (attenzione ai trattini!)  

## Lavorare con i componenti

### String interpolation
Mi consente di visualizzare nella pagina il contenuto di una variabile (attributo) definita nel file typescript.  
Si inserisce con la doppia parentesi graffa ```{{ nome-della-variabile }}```.  

Questa modifica è stata fatta da github
