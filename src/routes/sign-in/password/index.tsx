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

  const { goToSignInIdentifier } = useAppNavigation();

  const { submitSignIn } = useInteraction();

  const passwordInputElementRef = useSignal<HTMLInputElement>();

  const { identifier, identifierIsValid } = useContext(SignInContext);

  const password = useSignal('');

  const isFormValid = useComputed$(
    () => identifierIsValid && password.value.length > 0
  );

  const isLoading = useSignal(false);

  const onPasswordChange = $((_: unknown, { value }: HTMLInputElement) => {
    password.value = value;
  });

  const submit = $((_: unknown, form: HTMLFormElement) => {
    isLoading.value = true;

    window.setTimeout(() => {
      submitSignIn(form).catch(() => {});
    }, 10);
  });

  useVisibleTask$(() => {
    passwordInputElementRef.value?.focus();
  });

  return (
    <div id='layout'>
      <div id='logo'>
        <Logo height={34} />
      </div>
      <form preventdefault:submit method='post' onSubmit$={submit}>
        <h1>Velkommen</h1>
        <h2>{identifier}</h2>
        <input
          type='email'
          name='login'
          value={identifier}
          autoComplete='username'
          readOnly
          hidden
        />
        <input
          type='hidden'
          name='prompt'
          value='login'
          autoComplete='off'
          readOnly
          hidden
        />
        <div id='password-slot'>
          <Input
            fluid
            type='password'
            id='password'
            name='password'
            placeholder='Passord'
            value={password.value}
            onInput$={onPasswordChange}
            readOnly={isLoading.value}
            textAlign='center'
            ref={passwordInputElementRef}
            autoComplete='current-password'
          />
        </div>
        <div id='actions-slot'>
          <Button
            type='submit'
            variant='contained'
            colour='blue'
            startIcon={isLoading.value}
            disabled={isLoading.value || !isFormValid.value}
          >
            <Loader q:slot='start-icon' />
            Logg på
          </Button>
          <Button
            colour='blue'
            onClick$={() => goToSignInIdentifier()}
            disabled={isLoading.value}
          >
            Tilbake
          </Button>
        </div>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Logg inn | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra er et norsk konsulenthus som bistår bedrifter med å finne smarte løsninger til morgendagends utfordringer.',
    },
  ],
};
