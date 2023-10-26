import { type UserManager } from 'oidc-client-ts';

export default class AuthService {
  #manager: UserManager;

  constructor(manager: UserManager) {
    this.#manager = manager;
  }

  signIn = async (): Promise<void> => this.#manager.signinRedirect();

  signOut = async (): Promise<void> => this.#manager.signoutRedirect();
}
