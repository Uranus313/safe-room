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