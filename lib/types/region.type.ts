export type Region = {
  endpoint: string;
  region_name: string;
  status: string;
};

export type GetRegionResponse = {
  data: Region[];
  success: boolean;
};
