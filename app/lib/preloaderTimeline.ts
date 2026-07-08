import { gsap } from "@/app/lib/gsap";
import { Z_MARK_WIDTH } from "@/app/lib/lineGeometry";

interface PreloaderElements {
  container: HTMLElement;
  stage: HTMLElement;
  markAnchor: HTMLElement;
  zMark: HTMLElement;
  loaderOverlay: HTMLElement;
  counter: HTMLElement;
  circleOutline: SVGCircleElement;
  circleFill: SVGCircleElement;
  zSvg: SVGSVGElement;
  loaderSvg: SVGSVGElement;
  loaderLine: SVGLineElement;
  bottomPolygon: SVGPolygonElement;
  diagonalGroup: SVGGElement;
  topGroup: SVGGElement;
}

const LOAD_Y = 5;

export function createPreloaderTimeline(
  elements: PreloaderElements,
  onComplete: () => void,
) {
  const {
    loaderLine,
    loaderOverlay,
    loaderSvg,
    bottomPolygon,
    diagonalGroup,
    topGroup,
    circleOutline,
    circleFill,
    zSvg,
    counter,
  } = elements;

  const circumference = circleOutline.getTotalLength();

  gsap.set(counter, { autoAlpha: 1 });
  gsap.set(zSvg, { autoAlpha: 1 });
  gsap.set(circleOutline, {
    strokeDasharray: circumference,
    strokeDashoffset: circumference,
    autoAlpha: 1,
  });
  gsap.set(circleFill, { autoAlpha: 0 });
  gsap.set(loaderOverlay, {
    width: "100vw",
    left: "50%",
    xPercent: -50,
    bottom: 0,
  });
  gsap.set(loaderSvg, { autoAlpha: 1 });
  gsap.set(bottomPolygon, { opacity: 0 });
  gsap.set(loaderLine, {
    attr: { x1: 0, y1: LOAD_Y, x2: 0, y2: LOAD_Y },
    opacity: 1,
    strokeWidth: 10,
  });
  gsap.set(diagonalGroup, {
    scale: 0,
    opacity: 0,
    transformOrigin: "100% 100%",
  });
  gsap.set(topGroup, {
    scale: 0,
    opacity: 0,
    transformOrigin: "0% 100%",
  });

  const tl = gsap.timeline({
    onComplete,
    defaults: { ease: "power2.inOut" },
  });

  tl.to(loaderLine, {
    attr: { x2: 100 },
    duration: 2.4,
    ease: "power1.inOut",
    onUpdate: function () {
      counter.textContent = `${Math.round(this.progress() * 100)}%`;
    },
  })
    .to({}, { duration: 0.25 })
    .addLabel("zGrow")
    .to(counter, { autoAlpha: 0, duration: 0.3 }, "zGrow")
    .to(
      loaderOverlay,
      {
        width: Z_MARK_WIDTH,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "zGrow",
    )
    .to(loaderSvg, { autoAlpha: 0, duration: 0.35 }, "zGrow+=0.45")
    .to(bottomPolygon, { opacity: 1, duration: 0.35 }, "zGrow+=0.45")
    .to(
      diagonalGroup,
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      "zGrow+=0.5",
    )
    .to(
      topGroup,
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "zGrow+=0.85",
    )
    .to(
      circleOutline,
      {
        strokeDashoffset: 0,
        duration: 0.9,
        ease: "power2.inOut",
      },
      "zGrow+=1.25",
    )
    .to(
      circleFill,
      {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "zGrow+=2.0",
    )
    .to(
      zSvg,
      {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "zGrow+=2.0",
    )
    .to({}, { duration: 0.8 })
    .addLabel("exit")
    .to(
      elements.stage,
      { autoAlpha: 0, y: -12, duration: 0.8, ease: "power2.inOut" },
      "exit",
    )
    .to(
      elements.container,
      {
        autoAlpha: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(elements.container, { display: "none" });
        },
      },
      "exit+=0.5",
    );

  return tl;
}
