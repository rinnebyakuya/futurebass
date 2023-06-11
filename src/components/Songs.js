const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "spiral tones (ren9 Remix)",
    artist: "Mori Calliope, 律可",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2Fspiral%20tones%20remix.mp3?alt=media&token=820f668f-9244-4678-a939-874b014b60b0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2Fspiral%20tones%20remix.jpg?alt=media&token=98652869-4d3a-4618-a223-42378144e7d3",
  },
  {
    id: 2,
    favourite: false,
    songName: "失礼しますが、RIP♡ (ren9 Remix)",
    artist: "Calliope Mori",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2Fcalli%20remix.mp3?alt=media&token=534f7f6b-8621-4dff-b2a7-e6f3c374bbcf",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2Fcalli_album_cover.jpg?alt=media&token=deb38f46-1b68-456e-a2b7-4a5d33e3641c",
  },
  {
    id: 3,
    favourite: false,
    songName: "Hentai Lambo (ren9 Remix)",
    artist: "Hentai Dude",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2F1.mp3?alt=media&token=5cc67b83-e72e-43dc-a2dd-98b3c09e6696",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2Fhentai_lambo_with_ren9.jpg?alt=media&token=18ae5b55-215c-45bf-b79b-4c5755ed146c",
  },
  {
    id: 4,
    favourite: false,
    songName: "stardust",
    artist: "ren9",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2Fstardust.mp3?alt=media&token=fe296e0a-8057-4722-b312-ddd4e6cb18f1",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2Fa1610558234_10.jpg?alt=media&token=8efc584f-fbda-4f18-ad25-e4a34047e7a5",
  },
  {
    id: 5,
    favourite: false,
    songName: "last goodbye",
    artist: "ren9",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2Flast_goodbye.mp3?alt=media&token=8efe9acc-faf5-4584-9fc1-dbd70b43648e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2Fa1327458238_10.jpg?alt=media&token=36684c7b-8c6a-4296-a29b-6e0cc4542d5c",
  },
  {
    id: 6,
    songName: "One Last Kiss (ren9 Remix)",
    artist: "Hikaru Utada",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2F7%20one%20last%20kiss.mp3?alt=media&token=212c1d5f-941e-4612-b6f1-c3cca2d42c06",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2FAska3.jpg?alt=media&token=fb7eea5d-211e-4efe-9e84-9f62ccee1701",
  },
  {
    id: 7,
    favourite: false,
    songName: "Diffusion",
    artist: "Axxolotl, ren9",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2FAxxolotl-%20ren9-Diffusion-kissvk.com.mp3?alt=media&token=b44bde8a-06c1-4a9a-b883-4cba99a5eb35",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2F316x316bb.webp?alt=media&token=ba2acdb3-e9c1-44af-9b7e-9be1853f7f64",
  },
  {
    id: 8,
    favourite: false,
    songName: "Disaster Axxolotl & ren9 Remix",
    artist: "Vallhee",
    song: "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/Ringtone%2FVallhee-%20Axxolotl-%20ren9-Disaster-kissvk.com.mp3?alt=media&token=751d9a12-2008-46b8-91ad-6e5faca894a9",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/futurebass-3b787.appspot.com/o/images%2F316x316bb%20(1).webp?alt=media&token=b390cab4-0726-4ae7-b464-9553c975aef9",
  },
];


export { Songs };
export function getSongIdBySongName(name) {
    return Songs.find((song) => song.songName === name).id;
}

