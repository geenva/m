import axios from "axios";
import { createAPI } from "nextkit";

export interface Response {
  success: boolean;
  data: Data;
  status: number;
  message?: string;
}

export interface Data {
  playing: boolean;
  name?: string;
  artist?: string;
  album?: string;
  url?: string;
}

interface TData {
  recenttracks: Recenttracks;
}

interface Recenttracks {
  track: Track[];
  "@attr": Attr2;
}

interface Track {
  artist: Artist;
  streamable: string;
  image: Image[];
  mbid: string;
  album: Album;
  name: string;
  "@attr"?: Attr;
  url: string;
  date?: Date;
}

interface Artist {
  mbid: string;
  "#text": string;
}

interface Image {
  size: string;
  "#text": string;
}

interface Album {
  mbid: string;
  "#text": string;
}

interface Attr {
  nowplaying: string;
}

interface Date {
  uts: string;
  "#text": string;
}

interface Attr2 {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}

const getCurrentSong = async () => {
  const data: TData = await axios
    .get(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=flarely&api_key=" +
        process.env.LAST_FM_API_KEY +
        "&format=json&limit=1"
    )
    .then((c) => c.data);

  const song = data.recenttracks.track[0];

  if (
    !song ||
    song["@attr"]?.nowplaying == "false" ||
    !song["@attr"]?.nowplaying
  )
    return null;

  return song;
};

const api = createAPI({
  getContext: async (req, res) => {
    return {
      currentSong: await getCurrentSong(),
    };
  },
  onError: async (req, res, err) => ({ status: 500, message: err.message }),
});

export default api({
  async GET({ context }) {
    if (!context.currentSong)
      return {
        playing: false,
      };
    return {
      playing: true,
      name: context.currentSong?.name,
      artist: context.currentSong?.artist["#text"],
      album: context.currentSong?.album["#text"],
      url: context.currentSong?.url,
    };
  },
});
