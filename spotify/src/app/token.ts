import { IToken } from "./i-token";

export class Token {
    private access_token: string;
    private token_type: string;
    private expires_in: number;

    constructor(token: IToken) {
        this.access_token = token.access_token;
        this.token_type = token.token_type;
        this.expires_in = token.expires_in;
    }

    get bearer(): string {
        return this.token_type + ' ' + this.access_token;
    }

    get expireIn(): number {
        return this.expires_in * 1000;
    }
}
