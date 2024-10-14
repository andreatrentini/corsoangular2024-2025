export interface ISquadra {
    nome: string;
    vittorie: number;
    pareggi: number;
    sconfitte: number;

    get giocate(): number;
    get punti(): number;
}
