import { $, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import env from '../../utils/env';

export const useInteraction = () => {
  const navigate = useNavigate();

  const id = useSignal<string | null>();

  useVisibleTask$(() => {
    id.value = new URLSearchParams(window.location.search).get('id');
  });

  const getId = $(() => id.value);

  const abort = $(() =>
    navigate(`${env().OIDC_ISSUER}/interaction/${id.value}/abort`, {
      type: 'form',
    })
  );

  const submitSignIn = $((form: HTMLFormElement) => {
    form.setAttribute('action', `${env().OIDC_ISSUER}/interaction/${id.value}`);
    form.submit();
  });

  return {
    getId,
    abort,
    submitSignIn,
  } as const;
};
