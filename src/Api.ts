import { IUser } from './variables';

export class Api {
  readonly baseURL: string;

  readonly userRegistration: string;

  readonly userLogin: string;

  constructor() {
    this.baseURL = 'http://127.0.0.1:3000';
    this.userRegistration = `${this.baseURL}/registration`;
    this.userLogin = `${this.baseURL}/login`;
  }

  async registration(user: IUser): Promise<number> {
    const res = await fetch(this.userRegistration, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return res.status;
  }

  async login(user: IUser): Promise<number> {
    const res = await fetch(this.userLogin, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return res.status;
  }
}
