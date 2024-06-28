export type UserDetails = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  avatar_url: string;
};

export type Song = {
  id: number;
  title: string;
  file_url: string;
  poster_url: string;
  singer: string;
  listener: number;
  music_by: string;
  album: string;
  created_at: Date;
  duration: string;
  user: number;
};
