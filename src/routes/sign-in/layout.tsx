import {
  component$,
  Slot,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';

import Animated from '../../components/animated';
import Centered from '../../components/centered';
import { useInteraction } from '../../hooks';
import { auth } from '../../utils/auth';

import { SignInContext } from './context';

export default component$(() => {
  const { id } = useInteraction();

  useVisibleTask$(() => {
    if (!id) {
      auth()
        .signIn()
        .catch(() => {});
    }
  });

  useContextProvider(SignInContext, useStore({}));

  return (
    <Centered>
      <Animated animation='fade-in-up'>
        <Slot />
      </Animated>
    </Centered>
  );
});
