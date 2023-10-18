import {
  renderToStream,
  type RenderToStreamOptions,
} from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';

import Root from './root';

export default (opts: RenderToStreamOptions) =>
  renderToStream(<Root />, {
    ...opts,
    manifest,
    base: '/interactions',
    containerAttributes: {
      ...opts.containerAttributes,
      lang: 'nb',
    },
  });
