type ProfileDto = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

type ArticleDto = {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: ProfileDto;
  tagList: string[];
};

type ArticleParams = {
  type?: string;
  author?: string;
  favorited?: string;
  offset?: string;
  limit?: string;
};

const API = 'http://localhost:9000/api';

export async function fetchArticles(
  params?: ArticleParams,
): Promise<ArticleDto> {
  const searchParams = new URLSearchParams({
    limit: '10',
    offset: '0',
    ...params,
  });

  const response = await fetch(`${API}/articles?${searchParams}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
