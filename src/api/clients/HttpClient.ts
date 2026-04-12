/**
 * HttpClient - Base HTTP client using Axios
 * Handles all API requests for testing
 */

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
}

export interface ApiResponse<T = unknown> {
  status: number;
  data: T;
  headers: Record<string, unknown>;
}

export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string = process.env.API_BASE_URL || 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  async request<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>> {
    // Replace with actual axios implementation when ready
    console.log(`[HTTP] ${options.method} ${this.baseUrl}${options.url}`);
    
    return {
      status: 200,
      data: {} as T,
      headers: {},
    };
  }

  async get<T = unknown>(url: string, options?: Partial<RequestOptions>): Promise<ApiResponse<T>> {
    return this.request({ method: 'GET', url, ...options });
  }

  async post<T = unknown>(url: string, data?: unknown, options?: Partial<RequestOptions>): Promise<ApiResponse<T>> {
    return this.request({ method: 'POST', url, data, ...options });
  }

  async put<T = unknown>(url: string, data?: unknown, options?: Partial<RequestOptions>): Promise<ApiResponse<T>> {
    return this.request({ method: 'PUT', url, data, ...options });
  }

  async delete<T = unknown>(url: string, options?: Partial<RequestOptions>): Promise<ApiResponse<T>> {
    return this.request({ method: 'DELETE', url, ...options });
  }
}
