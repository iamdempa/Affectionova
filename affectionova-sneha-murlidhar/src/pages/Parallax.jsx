import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import photo from '../assets/images/aboutme.jpg'

const style = {
//   background: 'url("../assets/images/aboutme.jpg") center center / cover no-repeat',
  padding: "10px",
  width: "300px",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle = {
  color: "black",
  fontSize: "50px",
  background: "none",
};

const App = (props) => {
  const [isLoaded, setLoaded] = useState(false);
  const [{ param }, set] = useSpring(() => ({ param: 0 }));

  const onScroll = () => {
    let ratio = window.scrollY / window.innerHeight;
    ratio = ratio > 1 ? 1 : ratio;

    set({
      param: ratio,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    fetch({photo}).then((pr) => {
      setLoaded(true);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div style={style}>
      {isLoaded ? (
        <div style={style}>
          <animated.div
            style={{
              ...textStyle,
              opacity: param.interpolate({
                range: [0, 0.5, 0.75, 1],
                output: [0, 0.5, 0.75, 1],
              }),
              transform: param
                .interpolate({ range: [0, 0.5, 1], output: [-50, -25, 525] })
                .interpolate((x) => `translateX(${x}px)`),
            }}
          >
            Some text
          </animated.div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
};
export default App;
