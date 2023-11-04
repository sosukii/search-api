import axios from 'axios';
import { BASE_URL, SEARCH_URL } from './constants/constants';

export interface Item {
  mal_id: number;
  title: string;
  year: number;
  duration: string;
  episodes: number;
  favorites: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
}
export interface Pagination {
  current_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
  last_visible_page: number;
}

export interface ItemsResponse {
  data: {
    data: Item[];
    pagination: Pagination;
  };
  statusText: string;
}

export async function fetchItems(
  limit: number | string = 10,
  page: number | string = 1,
  animeTitle: string = ''
): Promise<ItemsResponse | null> {
  try {
    const head = animeTitle ? SEARCH_URL : BASE_URL;
    const search = `q=${animeTitle}`;
    const queries = `limit=${limit}&page=${page}`;

    const response: ItemsResponse = await axios({
      url: `${head}?${search}&${queries}`,
      maxBodyLength: Infinity,
      headers: {},
      method: 'get',
    });
    return response;
  } catch (error) {
    return null;
  }
}
