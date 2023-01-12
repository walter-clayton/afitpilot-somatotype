import React, { FC, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IDisconnection {
  clearInterval?: number;
  setClearInterval?: (interval: number) => void;
}

const Disconnection: FC<IDisconnection> = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);
  const navigate = useNavigate();

  const checkForDisconnection = () => {
    if (cookies.user) {
      let tempInterval = window.setInterval(function () {
        const now = new Date();
        const seconds = Math.floor(now.getTime() / 1000);

        let secondsLeft = Math.max(0, cookies.user.createdAt + 3600 - seconds);

        if (secondsLeft <= 0) {
          console.log("you got disconnected");
          navigate("/");
          window.location.reload();
          clearInterval(props.clearInterval);
          removeCookie("user", { path: "/", sameSite: "none", secure: true });
          window.scrollTo(0, 0);
        }
      }, 1000);
      props.setClearInterval!(tempInterval);
    }
  };

  useEffect(() => {
    if (!props.clearInterval) {
      checkForDisconnection();
    }
  }, [cookies.user]);

  return <></>;
};

export default Disconnection;
