// Definisco la classe Studente
// export: per utilizzare la classe in altri file, ad es. componenti

export class Studente {
    // Attributi della classe, l'accessibilità è private: non è possibile accedere alle variabili 
    // fuori dalla classe.
    private id: number;
    private nome: string;
    private cognome: string;
    private classe: string;

    // Attenzione: è necessario prevedere un costruttore per assegnare i valori iniziali agli attributi
    // quando l'oggetto viene creato
    constructor(id: number, nome: string, cognome: string, classe: string) {
        this.id = id;
        this.cognome = cognome;
        this.nome = nome;
        this.classe = classe;
    }

    // Getter: aggiungo una proprietà alla classe in lettura
    // Come si usa:  stud1.Id
    get Id(): number {
        return this.id;
    }

    get Nome(): string {
        return this.nome;
    }

    // Setter: aggiungo una proprietà alla classe studente per impostare un valore all'attributo
    // Come si usa: stud1.Nome = 'Andrea'
    set Nome(nome: string) {
        this.nome = nome;
    }

    get Cognome(): string {
        return this.nome;
    }

    set Cognome(nome: string) {
        this.nome = nome;
    }

    get Classe(): string {
        return this.nome;
    }

    set Classe(nome: string) {
        this.nome = nome;
    }    

}