import { v4 as uuid } from "uuid";
import { chats, messages, users, zoos } from "./data";
import { Chat, Message, User, Zoo } from "./types";

export const listAllZoos = (): Zoo[] => {
  return zoos;
};

export const findZooById = (id: string): Zoo | null => {
  return zoos.find((zoo) => zoo.id === id) ?? null;
};

export const findMessageById = (id: string): Message | null => {
  return messages.find((message) => message.id === id) ?? null;
};

export const findChatForZoo = (zooId: string): Chat | null => {
  return chats.find((chat) => chat.zooId === zooId) ?? null;
};

export const findZooForChat = (id: string): Zoo | null => {
  const chat = chats.find((chat) => chat.id === id);
  if (!chat) return null;

  return findZooById(chat?.zooId);
};

export const findUserForMessage = (id: string): User | null => {
  const message = findMessageById(id);
  if (!message) return null;

  return findUserById(message?.senderId);
};

export const findMessagesByChatId = (id: string): Message[] => {
  return messages.filter((message) => message.chatId === id).reverse();
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
  senderId,
}: {
  chatId: string;
  content: string;
  senderId: string;
}): Message => {
  const message = {
    id: uuid(),
    chatId,
    content,
    senderId,
  };

  messages.push(message);

  return message;
};

export const createUser = ({
  name,
  zooId,
  avatar,
}: {
  name: string;
  zooId: string;
  avatar?: string | null | undefined;
}): User => {
  const user = {
    id: uuid(),
    name,
    zooId,
    avatar,
  };

  users.push(user);

  return user;
};
