export interface Booking {
  id: number;
  Guest: string;
  Order_Date: string;
  Check_in: string;
  Check_out: string;
  roomId?: number;
  price: number;
  Special_Request: string;
  amenities?: string[];
  Room_type: string;
  description: string;
  Status: string,
  img:string
};