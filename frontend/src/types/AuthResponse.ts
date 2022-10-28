import type User from "@/types/User";

type AuthResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export default AuthResponse;
