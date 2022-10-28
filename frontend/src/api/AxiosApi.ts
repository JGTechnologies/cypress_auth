import axios from "axios";
import type { AxiosInstance } from "axios";
import type { ApiResponse, IApiClient } from "@/api/BaseApi";
import useAuthStore from "@/stores/auth";

export default class AxiosApi implements IApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response) {
          const authStore = useAuthStore();
          if (error.response.status === 401) {
            try {
              const result = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/auth/token/refresh/`,
                {},
                { withCredentials: true }
              );

              authStore.setAccessToken(result.data.access);

              return axiosInstance(error.config);
            } catch {
              authStore.setAccessToken("");
              authStore.setId(-1);
              window.location.href = "/login";

              return Promise.reject(error);
            }
          }
        }
      }
    );

    this.axiosInstance = axiosInstance;
  }

  async delete<T = unknown>(path: string): Promise<ApiResponse<T>> {
    return await this.axiosInstance.delete(path);
  }

  async get<T = unknown>(path: string): Promise<ApiResponse<T>> {
    return await this.axiosInstance.get(path);
  }

  async patch<T = unknown>(path: string, body: any): Promise<ApiResponse<T>> {
    return await this.axiosInstance.patch(path, body);
  }

  async post<T = unknown>(path: string, body: any): Promise<ApiResponse<T>> {
    return await this.axiosInstance.post(path, body);
  }

  async put<T = unknown>(path: string, body: any): Promise<ApiResponse<T>> {
    return await this.axiosInstance.put(path, body);
  }
}
