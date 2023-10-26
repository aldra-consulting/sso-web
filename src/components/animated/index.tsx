import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props {
  animation: 'fade-in-up';
}

export default component$<Props>(({ animation }) => {
  useStylesScoped$(styles);

  return (
    <div data-animation-name={animation}>
      <Slot />
    </div>
  );
});
