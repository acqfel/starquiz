export interface Url {
    type: string;
    template: string;
}

export interface Request {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    language: string;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
    searchType: string;
    imgSize: string;
    imgColorType: string;
}

export interface NextPage {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    language: string;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
    searchType: string;
    imgSize: string;
    imgColorType: string;
}

export interface Queries {
    request: Request[];
    nextPage: NextPage[];
}

export interface Context {
    title: string;
}

export interface SearchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
}

export interface Image {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
}

export interface Item {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    mime: string;
    image: Image;
}

export interface HeroImage {
    kind: string;
    url: Url;
    queries: Queries;
    context: Context;
    searchInformation: SearchInformation;
    items: Item[];
}




