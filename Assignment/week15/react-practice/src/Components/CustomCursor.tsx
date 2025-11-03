import { useGSAP } from "@gsap/react";
import type React from "react";
import gsap from "gsap";

const CustomCursor = ({
  refObject,
}: {
  refObject: React.RefObject<HTMLDivElement>;
}) => {
  useGSAP(() => {
    const cursorEl = refObject.current;
    if (!cursorEl) return;

    const moveMouse = (e: MouseEvent) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const leaveMouse = () => {
      gsap.to(cursorEl, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const hideOnInteractiveHover = () => {
      document
        .querySelectorAll<HTMLElement>(
          ".cursor-pointer, button, a, input, textarea, select"
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(cursorEl, {
              opacity: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(cursorEl, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseleave", leaveMouse);
    hideOnInteractiveHover();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseleave", leaveMouse);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      id="cursor-layer"
    >
      <div ref={refObject} className="absolute top-0 left-0 opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-foreground"
            d="M4.5.79v22.42l6.56-6.57h9.29L4.5.79z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
