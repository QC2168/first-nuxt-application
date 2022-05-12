export interface NewsType{
    id:number;
    title:string;
    imgSrc:string;
    from:string;
    date:string;
}

export interface SwiperItemType {
    id: number;
    imgSrc: string;
    alt: string
}

export interface ResultType<T> {
    body: T;
    description: string;
    status: string;
}