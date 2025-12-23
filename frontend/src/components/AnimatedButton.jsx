import { useEffect, useRef, useState } from "react";

export default function AnimatedSubmitButton({ onComplete }) {
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const [state, setState] = useState("ready"); // ready | loading | complete
  const [disabled, setDisabled] = useState(false);

  /* ---------------- CONFETTI LOGIC ---------------- */

  const confettiCount = 20;
  const sequinCount = 10;
  const gravityConfetti = 0.3;
  const gravitySequins = 0.55;
  const dragConfetti = 0.075;
  const dragSequins = 0.02;
  const terminalVelocity = 3;

  let confetti = [];
  let sequins = [];

  const colors = [
    { front: "#7b5cff", back: "#6245e0" },
    { front: "#b3c7ff", back: "#8fa5e5" },
    { front: "#5c86ff", back: "#345dd1" },
  ];

  const randomRange = (min, max) => Math.random() * (max - min) + min;

  const initVelocity = (xRange, yRange) => {
    const x = randomRange(xRange[0], xRange[1]);
    const range = yRange[1] - yRange[0] + 1;
    let y =
      yRange[1] -
      Math.abs(randomRange(0, range) + randomRange(0, range) - range);
    return { x, y: -y };
  };

  class Confetto {
    constructor(canvas, button) {
      this.color = colors[Math.floor(randomRange(0, colors.length))];
      this.dimensions = {
        x: randomRange(5, 9),
        y: randomRange(8, 15),
      };
      this.position = {
        x: randomRange(
          canvas.width / 2 - button.offsetWidth / 4,
          canvas.width / 2 + button.offsetWidth / 4
        ),
        y: randomRange(
          canvas.height / 2,
          canvas.height / 2 + button.offsetHeight
        ),
      };
      this.rotation = randomRange(0, 2 * Math.PI);
      this.velocity = initVelocity([-9, 9], [6, 11]);
      this.scaleY = 1;
    }

    update() {
      this.velocity.x -= this.velocity.x * dragConfetti;
      this.velocity.y = Math.min(
        this.velocity.y + gravityConfetti,
        terminalVelocity
      );
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.scaleY = Math.cos(this.position.y * 0.09);
    }
  }

  class Sequin {
    constructor(canvas, button) {
      this.radius = randomRange(1, 2);
      this.color =
        colors[Math.floor(randomRange(0, colors.length))].back;
      this.position = {
        x: randomRange(
          canvas.width / 2 - button.offsetWidth / 3,
          canvas.width / 2 + button.offsetWidth / 3
        ),
        y: randomRange(
          canvas.height / 2,
          canvas.height / 2 + button.offsetHeight
        ),
      };
      this.velocity = {
        x: randomRange(-6, 6),
        y: randomRange(-8, -12),
      };
    }

    update() {
      this.velocity.x -= this.velocity.x * dragSequins;
      this.velocity.y += gravitySequins;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }

  const initBurst = () => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    for (let i = 0; i < confettiCount; i++)
      confetti.push(new Confetto(canvas, button));
    for (let i = 0; i < sequinCount; i++)
      sequins.push(new Sequin(canvas, button));
  };

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c, i) => {
      c.update();
      ctx.save();
      ctx.translate(c.position.x, c.position.y);
      ctx.rotate(c.rotation);
      ctx.fillStyle = c.scaleY > 0 ? c.color.front : c.color.back;
      ctx.fillRect(
        -c.dimensions.x / 2,
        -c.dimensions.y / 2,
        c.dimensions.x,
        c.dimensions.y * c.scaleY
      );
      ctx.restore();
      if (c.position.y > canvas.height) confetti.splice(i, 1);
    });

    sequins.forEach((s, i) => {
      s.update();
      ctx.beginPath();
      ctx.arc(s.position.x, s.position.y, s.radius, 0, 2 * Math.PI);
      ctx.fillStyle = s.color;
      ctx.fill();
      if (s.position.y > canvas.height) sequins.splice(i, 1);
    });

    requestAnimationFrame(render);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  }, []);

  /* ---------------- BUTTON CLICK ---------------- */

  const handleClick = () => {
    if (disabled) return;
    setDisabled(true);
    setState("loading");

    setTimeout(() => {
      setState("complete");
      initBurst();
      onComplete?.();

      setTimeout(() => {
        setState("ready");
        setDisabled(false);
      }, 4000);
    }, 1800);
  };

  /* ---------------- JSX ---------------- */

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
      />

      <button
        ref={buttonRef}
        onClick={handleClick}
        className="relative w-[190px] h-[40px] text-white overflow-hidden rounded-full"
      >
        <div className="absolute inset-0 bg-[#1f2335] rounded-full shadow-inner" />

        {/* READY */}
        {state === "ready" && (
          <span className="relative z-10 flex items-center justify-center gap-2">
            Submit
          </span>
        )}

        {/* LOADING */}
        {state === "loading" && (
          <span className="relative z-10 flex gap-2">
            <span className="animate-bounce">•</span>
            <span className="animate-bounce delay-100">•</span>
            <span className="animate-bounce delay-200">•</span>
          </span>
        )}

        {/* SUCCESS */}
        {state === "complete" && (
          <span className="relative z-10 text-green-400 font-semibold">
            Success ✓
          </span>
        )}
      </button>
    </>
  );
}
