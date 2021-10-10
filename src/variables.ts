export interface IDataCar {
  word: string;
  translation: string;
  image: string;
  audioSrc?: string;
}

export const winnSong: string = './audio/tasks_rslang_english-for.kids.data_audio_correct.mp3';
export const errorSong: string = './audio/tasks_rslang_english-for.kids.data_audio_error.mp3';
export const theSoundOfVictory: string = './audio/tasks_rslang_english-for.kids.data_audio_success.mp3';
export const theSoundOfDefeat: string = './audio/tasks_rslang_english-for.kids.data_audio_failure.mp3';
export const linkRSSchool: string = 'https://rs.school/js/';

export interface IUser {
  username: string;
  password: string;
}

export const passwordValidatePattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
export const usernameValidatePattern = /^(?!d+$)[^~!@#$%*()_—+=|:;&quot;'`<>,.?/^]{1,30}$/;
