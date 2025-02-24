"use client";

import {Card, CardBody} from "@heroui/card";

export type ChatCardProps = {
  isMe: boolean
  message: string
}

export const ChatCard = ({isMe, message}: ChatCardProps) => {

  return (
    <Card className="text-white m-1">
      <CardBody className={isMe ? "bg-blue-500" : "bg-green-500" }>
        <p>{message}</p>
      </CardBody>
    </Card>
  );
};
