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