import { component$, useVisibleTask$ } from '@builder.io/qwik';

import { useAppNavigation } from '../../hooks';

export default component$(() => {
  const { goToSignInIdentifier } = useAppNavigation();

  useVisibleTask$(() => {
    goToSignInIdentifier().catch(() => {});
  });

  return null;
});
