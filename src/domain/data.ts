import { v4 as uuid } from "uuid";
import { Chat, LOCATION, Message, User, Zoo } from "./types";

export const zoos: Zoo[] = [
  {
    id: uuid(),
    name: "Western Zoo",
    location: LOCATION.WEST,
  },
  {
    id: uuid(),
    name: "Central Zoo",
    location: LOCATION.CENTRE,
  },
  {
    id: uuid(),
    name: "Eastern Zoo",
    location: LOCATION.EAST,
  },
];

export const chats: Chat[] = zoos.map((zoo) => ({
  id: uuid(),
  zooId: zoo.id,
}));

export const users: User[] = [
  {
    id: uuid(),
    name: "Emma",
    zooId: zoos[0].id,
    avatar: "cockatoo",
  },
];

export const messages: Message[] = [
  {
    id: uuid(),
    chatId: chats[0].id,
    content: "What a beautiful day today!",
    senderId: users[0].id,
  },
  {
    id: uuid(),
    chatId: chats[0].id,
    content: "Perfect day to visit a zoo 🐯",
    senderId: users[0].id,
  },
];
