import AxiosApi from "@/api/AxiosApi";
import useAuthStore from "@/stores/auth";
import type { AuthResponse } from "@/types";

/**
 * Attempts to log a user in.
 *
 * @param email The user's email address.
 * @param password The user's password.
 * @returns The authentication request result.
 */
export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const axiosApi = new AxiosApi(import.meta.env.VITE_API_BASE_URL);

  try {
    const response = await axiosApi.post<AuthResponse>("auth/login/", {
      email,
      password,
    });

    const authStore = useAuthStore();
    authStore.setAccessToken(response.data.access_token);
    authStore.setId(response.data.user.pk);

    return true;
  } catch {
    return false;
  }
};
