"use client";

import { MessageType } from "@/types";
import {Card, CardBody} from "@heroui/card";

export const ChatCard = ({ userName="AI", message}: MessageType) => {
  return (
    <div className="flex-col">
      <Card className="text-white m-1">
        <CardBody className={userName==="AI" ? "bg-blue-500" : "bg-green-500" }>
          <p>{message}</p>
        </CardBody>
      </Card>
    </div>
  );
};
