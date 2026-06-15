import { client } from './client';

type RequestConfig = RequestInit & {
  params?: Record<string, string | number | boolean | undefined>;
};

function createQuery(params?: RequestConfig['params']) {
  if (!params) return '';

  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    searchParams.set(key, String(value));
  }

  const query = searchParams.toString();
  return query ? `?${query}` : '';
}

async function request<T>(url: string, config: RequestConfig = {}): Promise<T> {
  const { params, headers, body, ...rest } = config;

  const response = await fetch(`${client.baseUrl}${url}${createQuery(params)}`, {
    ...rest,
    headers: {
      ...client.headers,
      ...(headers ?? {}),
    },
    ...(body !== undefined ? { body } : {}),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || response.statusText);
  }

  const contentType = response.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    return await response.json();
  }

  return (await response.text()) as T;
}

function requestWithBody<T, B>(
  url: string,
  method: 'POST' | 'PUT' | 'PATCH',
  body: B,
  config?: RequestConfig,
) {
  return request<T>(url, {
    ...config,
    method,
    body: JSON.stringify(body),
  });
}

export const api = {
  get: <T>(url: string, config?: RequestConfig) => request<T>(url, { ...config, method: 'GET' }),

  post: <T, B>(url: string, body: B, config?: RequestConfig) =>
    requestWithBody<T, B>(url, 'POST', body, config),

  put: <T, B>(url: string, body: B, config?: RequestConfig) =>
    requestWithBody<T, B>(url, 'PUT', body, config),

  patch: <T, B>(url: string, body: B, config?: RequestConfig) =>
    requestWithBody<T, B>(url, 'PATCH', body, config),

  delete: <T>(url: string, config?: RequestConfig) =>
    request<T>(url, { ...config, method: 'DELETE' }),
};
