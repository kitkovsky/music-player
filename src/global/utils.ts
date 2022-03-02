import { uuid } from "uuidv4";
import Song from "./song.interface";

const getSongs = (): Song[] => {
  return [
    {
      name: "Drift",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      artist: "Somni",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=30133",
      colours: ["#FE906B", "#213B4F"],
      id: uuid(),
      active: true,
    },
    {
      name: "Green Tea",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2022/02/601932bb9d6e204a256293df2ae5b1993951d6c4-1024x1024.jpg",
      artist: "Aves",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=30308",
      colours: ["#DACEB2", "#E0BE00"],
      id: uuid(),
      active: false,
    },
    {
      name: "Tropical Midnight",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2022/02/7c943e75ba2e1017052e03444366c79445b43195-1024x1024.jpg",
      artist: "C Y G N",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=31516",
      colours: ["#3B8344", "#17213A"],
      id: uuid(),
      active: false,
    },
    {
      name: "Santiago",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2022/01/1abf44fbb1364ca8435a8bbf4c5750a80947128f-1024x1024.jpg",
      artist: "Psalm Trees, Moods",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=30202",
      colours: ["#FDECCE", "#737C8C"],
      id: uuid(),
      active: false,
    },
    {
      name: "Soulsounds",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      artist: "Parkbench Epiphany",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=27500",
      colours: ["#EE9695", "#28323E"],
      id: uuid(),
      active: false,
    },
    {
      name: "la zona",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      artist: "Maydee",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=27455",
      colours: ["#B4C5D9", "#6A5834"],
      id: uuid(),
      active: false,
    },
    {
      name: "Conflicted",
      coverUrl:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      artist: "Hanz",
      audioUrl: "https://mp3.chillhop.com/serve.php/?mp3=24642",
      colours: ["#43536D", "#DF8D8D"],
      id: uuid(),
      active: false,
    },
  ];
};

export default getSongs;
