export type SearchParams = Record<string, string | number | boolean | undefined>;

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  params?: SearchParams;
  headers?: HeadersInit;
}
