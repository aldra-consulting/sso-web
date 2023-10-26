import { $ } from '@builder.io/qwik';
import {
  useLocation,
  useNavigate,
  type RouteNavigate,
} from '@builder.io/qwik-city';

type NavigateOptions = Parameters<RouteNavigate>[1];

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const { url } = useLocation();

  const goToSignIn = $((options?: NavigateOptions) =>
    navigate(`/interactions/sign-in${url.search}`, options)
  );

  const goToSignInIdentifier = $((options?: NavigateOptions) =>
    navigate(`/interactions/sign-in/identifier${url.search}`, options)
  );

  const goToSignInPassword = $((options?: NavigateOptions) =>
    navigate(`/interactions/sign-in/password${url.search}`, options)
  );

  return {
    goToSignIn,
    goToSignInIdentifier,
    goToSignInPassword,
  } as const;
};
