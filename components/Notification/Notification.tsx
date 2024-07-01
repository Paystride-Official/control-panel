import React from "react";
import Image from "next/image";
import notificationIcon from "@/components/Notification/assets/Notification.svg";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import NotificationPopOver from "./NotificationPopOver/NotificationPopOver";

type Props = {};

const Notification = (props: Props) => {
  return (
    <div>
      <Popover placement="bottom-end" backdrop="opaque">
        <PopoverTrigger>
          <Image
            src={notificationIcon}
            alt="Notification"
            className="w-5 rounded-xl cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="rounded-[4px]">
          <NotificationPopOver />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Notification;
