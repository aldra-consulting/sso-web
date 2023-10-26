import { UserManager } from 'oidc-client-ts';

import AuthService from '../../services/auth';
import env from '../env';

export const auth = () =>
  new AuthService(
    new UserManager({
      authority: env().OIDC_ISSUER,
      client_id: env().OIDC_CLIENT_ID,
      redirect_uri: `${env().LANDING_PAGE_WEB_URL}/auth`,
      post_logout_redirect_uri: env().LANDING_PAGE_WEB_URL,
      scope: env().OIDC_SCOPES,
      response_mode: 'query',
      automaticSilentRenew: false,
      staleStateAgeInSeconds: 0,
    })
  );
