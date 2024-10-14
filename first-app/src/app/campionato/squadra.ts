import { ISquadra } from "./i-squadra";

export class Squadra implements ISquadra {
    nome: string;
    vittorie: number;
    pareggi: number;
    sconfitte: number;

    constructor(nome: string) {
        this.nome = nome;
        this.vittorie = 0;
        this.pareggi = 0
        this.sconfitte = 0;
    }

    get giocate() {
        return this.vittorie + this.pareggi + this.sconfitte;
    }

    get punti() {
        return this.vittorie * 3 + this.pareggi;
    }

    vittoria(): void {
        this.vittorie++;
    }

    pareggio(): void {
        this.pareggi++;
    }

    sconfitta(): void {
        this.sconfitte++;
    }
}
