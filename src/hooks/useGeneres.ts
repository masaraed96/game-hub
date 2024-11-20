import Genres from "../data/Genres";
import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
    image_background: string

  }

const useGenres = ()=> ({data: Genres, isLoading: false, error: null});

export default useGenres;