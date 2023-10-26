import { $ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import env from '../../utils/env';

export const useInteraction = () => {
  const navigate = useNavigate();

  const {
    url: { searchParams },
  } = useLocation();

  const id = searchParams.get('id');

  const abort = $(() =>
    navigate(`${env().OIDC_ISSUER}/interaction/${id}/abort`, {
      type: 'form',
    })
  );

  return {
    id,
    abort,
  } as const;
};
