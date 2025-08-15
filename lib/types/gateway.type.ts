import { Meta } from "./meta.type";

export type Gateway = {
  created_at: string;
  gateway_name: string;
  gateway_type: string;
  id: string;
  provider: string;
  queue_id: string;
  region: string;
  rpc_url: string;
  status: string;
  transcoding_profile: string;
  updated_at: string;
  user: null;
  user_id: string;
};

export type GetGatewayResponse = {
  data: Gateway[];
  metadata: Meta;
};
