"use client";

import { MessageType } from "@/types";
import {Card, CardBody} from "@heroui/card";

const user_id: string = import.meta.env.VITE_USER_ID!;

export const ChatCard = ({userId, message}: MessageType) => {

  return (
    <Card className="text-white m-1">
      <CardBody className={userId===user_id ? "bg-blue-500" : "bg-green-500" }>
        <p>{message}</p>
      </CardBody>
    </Card>
  );
};
