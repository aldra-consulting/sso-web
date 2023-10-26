import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Animated from '../../components/animated';
import Button from '../../components/button';
import Centered from '../../components/centered';
import Logo from '../../components/logo';
import { useAppNavigation } from '../../hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { goToSignIn } = useAppNavigation();

  return (
    <Centered>
      <Animated animation='fade-in-up'>
        <div id='layout'>
          <div id='logo'>
            <Logo height={34} />
          </div>
          <h1>Noe gikk galt</h1>
          <h2>Det har oppstått en uventet feil</h2>
          <div id='actions-slot'>
            <Button
              variant='contained'
              colour='blue'
              onClick$={() => goToSignIn()}
            >
              Prøv igjen
            </Button>
          </div>
        </div>
      </Animated>
    </Centered>
  );
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
