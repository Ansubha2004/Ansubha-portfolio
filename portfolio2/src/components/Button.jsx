import React from "react";
import clsx from "clsx";
import useAOS from "../hooks/useAOS.jsx";

function Button({
  handleClick,
  handleSubmit,
  themecss,
  icon,
  iconcss,
  content,
  type,
  delay,
  animation,
}) {
  useAOS();

  return (
    <>
      <button
        data-aos={animation}
        data-aos-mirror="true"
        data-aos-delay={delay}
        type={type}
        onSubmit={handleSubmit}
        onClick={handleClick}
        className={clsx(
          themecss,
          "transition-all duration-100 linear active:scale-[0.95] hover:opacity-[0.8] sapce-x-5"
        )}
      >
        <img src={icon} className={clsx(iconcss)} />
        {content}
      </button>
    </>
  );
}

export default Button;
