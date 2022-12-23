import { useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

import { getIndicationMessage } from "../redux/messages/selectors";

const useIndicationMessage = () => {
  const indicationMessage = useSelector(getIndicationMessage);
  useEffect(() => {
    if (!indicationMessage.message) return;
    indicationMessage.type === "error" &&
      message.error({
        content: indicationMessage.message,
        key: indicationMessage.key,
        duration: 3,
      });
    indicationMessage.type === "info" &&
      message.info({
        content: indicationMessage.message,
        key: indicationMessage.key,
        duration: 3,
      });
    indicationMessage.type === "success" &&
      message.success({
        content: indicationMessage.message,
        key: indicationMessage.key,
        duration: 3,
      });
  }, [indicationMessage]);
};

export default useIndicationMessage;
