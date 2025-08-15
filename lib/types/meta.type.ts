export type Metadata = {
  count: number;
  limit: number;
  order: string;
  page: number;
  search: string;
  total: number;
};

export type Meta = {
  count: number;
  metadata: Metadata;
  total: number;
};
