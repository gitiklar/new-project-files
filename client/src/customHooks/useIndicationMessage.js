import { useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

import { getIndicationMessage } from "../redux/messages/selectors";

const useIndicationMessage = () => {
  const indicationMessage = useSelector(getIndicationMessage);

  const loadingMessage = () =>
    message.loading({ content: "checking...", key: indicationMessage.key });

  const destoryMessage = () => message.destroy(indicationMessage.key);

  useEffect(() => {
    if (!indicationMessage.message) return;
    message[indicationMessage.type]({
      content: indicationMessage.message,
      key: indicationMessage.key,
      duration: 3,
    });
  }, [indicationMessage]);

  return {
    loadingMessage,
    destoryMessage,
  };
};

export default useIndicationMessage;
