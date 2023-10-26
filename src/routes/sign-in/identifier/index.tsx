import {
  $,
  component$,
  useComputed$,
  useContext,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Button from '../../../components/button';
import Input from '../../../components/input';
import Loader from '../../../components/loader';
import Logo from '../../../components/logo';
import { useAppNavigation, useInteraction } from '../../../hooks';
import { SignInContext } from '../context';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { goToSignInPassword } = useAppNavigation();

  const { abort } = useInteraction();

  const identifierInputElementRef = useSignal<HTMLInputElement>();

  const signInContext = useContext(SignInContext);

  const isIdentifierValid = useComputed$(() =>
    Boolean(
      signInContext.identifier &&
        identifierInputElementRef.value?.validity.valid
    )
  );

  const isLoading = useSignal(false);

  const onIdentifierChange = $((_: unknown, { value }: HTMLInputElement) => {
    signInContext.identifier = value;
  });

  const submit = $(() => {
    isLoading.value = true;

    signInContext.identifierIsValid = isIdentifierValid.value;

    goToSignInPassword()
      .catch(() => {})
      .finally(() => {
        isLoading.value = false;
      });
  });

  useVisibleTask$(() => {
    identifierInputElementRef.value?.focus();
  });

  return (
    <div id='layout'>
      <div id='logo'>
        <Logo height={34} />
      </div>
      <form preventdefault:submit onSubmit$={submit}>
        <h1>Logg på</h1>
        <h2>Bruk Aldra-kontoen din</h2>
        <div id='idenifier-slot'>
          <Input
            fluid
            type='email'
            id='identifier'
            name='identifier'
            placeholder='E-post'
            value={signInContext.identifier ?? ''}
            onInput$={onIdentifierChange}
            disabled={isLoading.value}
            readOnly={isLoading.value}
            textAlign='center'
            ref={identifierInputElementRef}
          />
        </div>
        <div id='actions-slot'>
          <Button
            type='submit'
            variant='contained'
            colour='blue'
            startIcon={isLoading.value}
            disabled={isLoading.value || !isIdentifierValid.value}
          >
            <Loader q:slot='start-icon' />
            Neste
          </Button>
          <Button
            type='submit'
            colour='red'
            onClick$={abort}
            disabled={isLoading.value}
          >
            Avbryt
          </Button>
        </div>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Logg på | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra er et norsk konsulenthus som bistår bedrifter med å finne smarte løsninger til morgendagends utfordringer.',
    },
  ],
};
