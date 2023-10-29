import axios from 'axios';
import { BASE_URL } from './constants/constants';

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

interface ItemsResponse {
  data: {
    data: Item[];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: {
        count: number;
        total: number;
        per_page: number;
      };
      last_visible_page: number;
    };
  };
  statusText: string;
}

export async function fetchItems(
  limit: number | string = 10,
  page: number | string = 1,
  animeTitle?: string
): Promise<ItemsResponse | null> {
  try {
    const tail = animeTitle ? `letter=g` : '';

    const response: ItemsResponse = await axios({
      url: `${BASE_URL}?limit=${limit}&page=${page}&` + tail,
      maxBodyLength: Infinity,
      headers: {},
      method: 'get',
    });

    return response;
  } catch (e) {
    return null;
  }
}
