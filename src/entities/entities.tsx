export interface Game{
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    slug: string;
    publishers : Publisher[];
    genres : Genre[];
    description_raw: string;
    parent_platforms : {platform : Platform}[]
  }
  export interface Platform{
    id: number;
    name : string;
    slug : string;
  }  
  export interface Genre{
    id: number;
    name: string;
    image_background: string;
  }
  export interface Publisher{
    id: number;
    name: string;
  }
  export interface Trailer{
    id: number;
    name: string;
    preview: string;
    data: TrailerLinkPack;
  }
  interface TrailerLinkPack{
    480 : string;
    max : string;
  }
  export interface Screenshot{
    id : number;
    image : string;
  }