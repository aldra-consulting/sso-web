import { createContextId } from '@builder.io/qwik';

interface SignInContextType {
  identifier?: string;
  identifierIsValid?: boolean;
}

export const SignInContext =
  createContextId<SignInContextType>('sign-in-context');
