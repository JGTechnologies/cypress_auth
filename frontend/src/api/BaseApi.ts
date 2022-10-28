export interface ApiPage<T> {
  count: number;
  next?: string;
  previous?: string;
  results: Array<T>;
}

export type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
};

export interface IApiClient {
  delete<T = unknown>(path: string): Promise<ApiResponse<T>>;
  get<T = unknown>(path: string): Promise<ApiResponse<T>>;
  patch<T = unknown>(path: string, body: unknown): Promise<ApiResponse<T>>;
  post<T = unknown>(path: string, body: unknown): Promise<ApiResponse<T>>;
  put<T = unknown>(path: string, body: unknown): Promise<ApiResponse<T>>;
}
