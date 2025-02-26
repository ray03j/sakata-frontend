"use client";

import { MessageType } from "@/types";
import {Card, CardBody} from "@heroui/card";

const user_id: string = import.meta.env.VITE_USER_ID!;

export const ChatCard = ({userId, userName, message}: MessageType) => {

  return (
    <div className="flex-col">
      {userId===user_id ? 
        <></> : <div>{userName}</div>
      }
      <Card className="text-white m-1">
        <CardBody className={userId===user_id ? "bg-green-500" : "bg-blue-500" }>
          <p>{message}</p>
        </CardBody>
      </Card>
    </div>
  );
};
