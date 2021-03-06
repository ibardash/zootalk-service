export interface Context {
  token: string;
}

export enum LOCATION {
  WEST = "WEST",
  CENTRE = "CENTRE",
  EAST = "EAST",
}

export interface Zoo {
  id: string;
  location: LOCATION;
  name: string;
}

export interface Chat {
  id: string;
  zooId: string;
}

export interface Message {
  id: string;
  chatId: string;
  content: string;
  senderId: string;
}

export interface User {
  id: string;
  name: string;
  avatar?: string | null | undefined;
  zooId: string;
}
