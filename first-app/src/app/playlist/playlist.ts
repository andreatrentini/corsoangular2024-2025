import { Song } from "./song";

export class Playlist {
    private _id: number;
    private _name: string;
    private _description: string;
    private _songs: Song[];

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
        this._description = '';
        this._songs = [];
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
    
    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get songs(): Song[] {
        return this._songs;
    }

    addSong(song: Song) {
        this._songs.push(song);
    }

    removeSong(index: number) {
        this._songs.splice(index, 1);
    }

    modifySong(index: number, song: Song) {
        this._songs[index] = song;
    }

    get songsNumber(): number {
        return this._songs.length;
    }

    get duration(): number {
        return this._songs.reduce((totalDuration, song,) => totalDuration += song.duration, 0);
    }
}
