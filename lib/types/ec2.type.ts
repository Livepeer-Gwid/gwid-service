export type EC2Instance = {
  architecture: string;
  cpu: number;
  cpu_manufacturer: string;
  created_at: string;
  id: string;
  ram: number;
  tag: string;
  updated_at: string;
};

export type GetEC2InstancesResponse = {
  data: EC2Instance[];
  success: boolean;
};
