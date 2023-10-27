import { $ } from '@builder.io/qwik';
import { useNavigate, type RouteNavigate } from '@builder.io/qwik-city';

type NavigateOptions = Parameters<RouteNavigate>[1];

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const goToSignIn = $((options?: NavigateOptions) =>
    navigate(`/interactions/sign-in${window.location.search}`, options)
  );

  const goToSignInIdentifier = $((options?: NavigateOptions) =>
    navigate(
      `/interactions/sign-in/identifier${window.location.search}`,
      options
    )
  );

  const goToSignInPassword = $((options?: NavigateOptions) =>
    navigate(`/interactions/sign-in/password${window.location.search}`, options)
  );

  return {
    goToSignIn,
    goToSignInIdentifier,
    goToSignInPassword,
  } as const;
};
