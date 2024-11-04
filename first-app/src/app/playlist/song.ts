export class Song {
    private _id: number;
    private _title: string;
    private _artist: string;
    private _genre: string;
    private _duration: number;    
    private _rating: number;

    constructor(id: number, title: string, artist: string, genre: string, duration: number, rating: number) {
        this._id = id;
        this._title = title;
        this._artist = artist;
        this._genre = genre;
        this._duration = duration;
        this._rating = rating;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get artist(): string {
        return this._artist;
    }

    set artist(artist: string) {
        this._artist = artist;
    }

    get genre(): string {
        return this._genre;
    }

    set genre(genre: string) {
        this._genre = genre;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(duration: number) {
        if (duration > 0) {
            this._duration = duration;
        }
    }

    get rating(): number {
        return this._rating;
    }

    set rating(rating: number) {
        if (rating >= 0 && rating <= 5) {
            this._rating = rating;
        }
    }

}
