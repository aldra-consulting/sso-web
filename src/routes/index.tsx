import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import { useAppNavigation } from '../hooks';

export default component$(() => {
  const { goToSignIn } = useAppNavigation();

  useVisibleTask$(() => {
    goToSignIn().catch(() => {});
  });

  return null;
});

export const head: DocumentHead = {
  title: 'ID | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra er et norsk konsulenthus som bistår bedrifter med å finne smarte løsninger til morgendagends utfordringer.',
    },
  ],
};
