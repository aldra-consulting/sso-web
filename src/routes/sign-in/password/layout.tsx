import {
  component$,
  Slot,
  useContext,
  useVisibleTask$,
} from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import { SignInContext } from '../context';

export default component$(() => {
  const { identifierIsValid } = useContext(SignInContext);

  const navigate = useNavigate();
  const { url } = useLocation();

  useVisibleTask$(() => {
    if (!identifierIsValid) {
      navigate(`/interactions/sign-in/identifier${url.search}`).catch(() => {});
    }
  });

  return identifierIsValid ? <Slot /> : null;
});
