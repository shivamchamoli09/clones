import { MEDIAS, PLAYLISTS } from "../content/home";
import { IMedia } from "../types";


export function getMediaListByCount(count: number): IMedia[] {
    if (count > 30) return [];
    const result = [] as IMedia[];
    for (let i = 0; i < count; i++) {
        result.push(MEDIAS[i]);
        if (i === (MEDIAS.length - 1)) {
            i = 0;
        }
    }
    return result;
}

export function getPlayListsByCount(startCount = 0, endCount = PLAYLISTS.length): IMedia[] {
    if (startCount > 30 || endCount > 30) return [];
    const result = [] as IMedia[];
    for (let i = startCount; i < endCount; i++) {
        result.push(PLAYLISTS[i]);
        if ((result.length < (endCount - startCount)) && i === (PLAYLISTS.length - 1)) {
            i = startCount;
        }
    }
    return result;
}

export function findMediaById(id: string | number) {
    return MEDIAS.filter((media: IMedia) => media.id == id)[0];
}

export function findPlaylistById(id: string | number) {
    return PLAYLISTS.filter((media: IMedia) => media.id == id)[0];
}