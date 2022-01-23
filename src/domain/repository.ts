import { v4 as uuid } from "uuid";
import { Chat, LOCATION, Message, User, Zoo } from "./types";

const zoos: Zoo[] = [
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

const chats: Chat[] = zoos.map((zoo) => ({
  id: uuid(),
  zooId: zoo.id,
}));

const messages: Message[] = [];
const users: User[] = [];

export const listAllZoos = (): Zoo[] => {
  return zoos;
};

export const findZooByLocation = (location: LOCATION): Zoo | null => {
  return zoos.find((zoo) => zoo.location === location) ?? null;
};

export const findZooById = (id: string): Zoo | null => {
  return zoos.find((zoo) => zoo.id === id) ?? null;
};

export const findChatForZoo = (zooId: string): Chat | null => {
  return chats.find((chat) => chat.zooId === zooId) ?? null;
};

export const findZooForChat = (id: string): Zoo | null => {
  const chat = chats.find((chat) => chat.id === id);
  if (!chat) return null;

  return findZooById(chat?.zooId);
};

export const findMessagesByChatId = (id: string): Message[] => {
  return messages.filter((message) => message.chatId === id);
};

export const findUsersByZooId = (id: string): User[] => {
  return users.filter((user) => user.zooId === id);
};

export const findUserById = (id: string): User | null => {
  return users.find((user) => user.id === id) ?? null;
};

export const findZooForUser = (id: string): Zoo | null => {
  const user = users.find((user) => user.id === id);
  if (!user) return null;

  return findZooById(user?.zooId);
};

export const findChatForUser = (id: string): Chat | null => {
  const user = users.find((user) => user.id === id);
  if (!user) return null;

  return findChatForZoo(user?.zooId);
};

export const createMessage = ({
  chatId,
  content,
  poster,
}: {
  chatId: string;
  content: string;
  poster: string;
}): Message => {
  const message = {
    id: uuid(),
    chatId,
    content,
    postedAt: Date.now(),
    poster,
  };

  messages.push(message);

  return message;
};

export const createUser = ({
  name,
  zooId,
}: {
  name: string;
  zooId: string;
}): User => {
  const user = {
    id: uuid(),
    name,
    zooId,
  };

  users.push(user);

  return user;
};
