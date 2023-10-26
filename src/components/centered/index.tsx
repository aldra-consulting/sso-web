import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props {
  axis?: 'vertical' | 'horizontal';
}

export default component$<Props>(({ axis }) => {
  useStylesScoped$(styles);

  return (
    <div data-centering-axis={axis}>
      <Slot />
    </div>
  );
});
