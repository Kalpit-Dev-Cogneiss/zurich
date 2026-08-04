"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { createPreloaderTimeline } from "@/app/lib/preloaderTimeline";
import {
  Z_BAR_HEIGHT,
  Z_MARK_HEIGHT,
  Z_MARK_WIDTH,
  Z_POLYGONS,
  Z_VIEWBOX,
} from "@/app/lib/lineGeometry";

const CIRCLE_BOX = 260;
const CIRCLE_CENTER = CIRCLE_BOX / 2;
const CIRCLE_RADIUS = 108;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const Z_OFFSET_X = CIRCLE_CENTER - Z_MARK_WIDTH / 2;
const Z_OFFSET_Y = CIRCLE_CENTER - Z_MARK_HEIGHT / 2;
const Z_SCALE = Z_MARK_WIDTH / 8;

export default function Preloader() {
  const [done, setDone] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const markAnchorRef = useRef<HTMLDivElement>(null);
  const zMarkRef = useRef<HTMLDivElement>(null);
  const loaderOverlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const circleOutlineRef = useRef<SVGCircleElement>(null);
  const circleFillRef = useRef<SVGCircleElement>(null);
  const zSvgRef = useRef<SVGSVGElement>(null);
  const loaderSvgRef = useRef<SVGSVGElement>(null);
  const loaderLineRef = useRef<SVGLineElement>(null);
  const bottomPolygonRef = useRef<SVGPolygonElement>(null);
  const diagonalGroupRef = useRef<SVGGElement>(null);
  const topGroupRef = useRef<SVGGElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const refs = {
      container: containerRef.current,
      stage: stageRef.current,
      markAnchor: markAnchorRef.current,
      zMark: zMarkRef.current,
      loaderOverlay: loaderOverlayRef.current,
      counter: counterRef.current,
      circleOutline: circleOutlineRef.current,
      circleFill: circleFillRef.current,
      zSvg: zSvgRef.current,
      loaderSvg: loaderSvgRef.current,
      loaderLine: loaderLineRef.current,
      bottomPolygon: bottomPolygonRef.current,
      diagonalGroup: diagonalGroupRef.current,
      topGroup: topGroupRef.current,
      tagline: taglineRef.current,
    };

    if (Object.values(refs).some((el) => !el)) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    createPreloaderTimeline(
      refs as Parameters<typeof createPreloaderTimeline>[0],
      () => {
        document.body.style.overflow = "";
        setDone(true);
      },
    );
  }, []);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      aria-label="Loading"
      role="status"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#000",
      }}
    >
      <div
        ref={stageRef}
        style={{ position: "relative", height: "100%", width: "100%" }}
      >
        <div
          ref={markAnchorRef}
          style={{
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            ref={zMarkRef}
            style={{
              position: "relative",
              width: Z_MARK_WIDTH,
              height: Z_MARK_HEIGHT,
            }}
          >
            <svg
              ref={zSvgRef}
              viewBox={Z_VIEWBOX}
              preserveAspectRatio="xMidYMid meet"
              style={{ display: "block", height: "100%", width: "100%" }}
              aria-hidden="true"
            >
              <polygon
                ref={bottomPolygonRef}
                data-polygon="3"
                points={Z_POLYGONS.bottom}
                fill="white"
                opacity={0}
              />
              <g
                ref={diagonalGroupRef}
                data-diagonal-group
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "100% 100%",
                  opacity: 0,
                }}
              >
                <polygon
                  data-polygon="2"
                  points={Z_POLYGONS.diagonal}
                  fill="white"
                />
              </g>
              <g
                ref={topGroupRef}
                data-top-group
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "0% 100%",
                  opacity: 0,
                }}
              >
                <polygon
                  data-polygon="1"
                  points={Z_POLYGONS.top}
                  fill="white"
                />
              </g>
            </svg>

            <svg
              width={CIRCLE_BOX}
              height={CIRCLE_BOX}
              viewBox={`0 0 ${CIRCLE_BOX} ${CIRCLE_BOX}`}
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            >
              <defs>
                <mask id="zCircleMask">
                  <circle
                    cx={CIRCLE_CENTER}
                    cy={CIRCLE_CENTER}
                    r={CIRCLE_RADIUS}
                    fill="white"
                  />
                  <g
                    transform={`translate(${Z_OFFSET_X} ${Z_OFFSET_Y}) scale(${Z_SCALE})`}
                    fill="black"
                  >
                    <polygon points={Z_POLYGONS.top} />
                    <polygon points={Z_POLYGONS.diagonal} />
                    <polygon points={Z_POLYGONS.bottom} />
                  </g>
                </mask>
              </defs>

              <circle
                ref={circleFillRef}
                cx={CIRCLE_CENTER}
                cy={CIRCLE_CENTER}
                r={CIRCLE_RADIUS}
                fill="white"
                mask="url(#zCircleMask)"
                opacity={0}
              />
              <circle
                ref={circleOutlineRef}
                cx={CIRCLE_CENTER}
                cy={CIRCLE_CENTER}
                r={CIRCLE_RADIUS}
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeDasharray={CIRCLE_CIRCUMFERENCE}
                strokeDashoffset={CIRCLE_CIRCUMFERENCE}
                transform={`rotate(-90 ${CIRCLE_CENTER} ${CIRCLE_CENTER})`}
              />
            </svg>

            <div
              ref={loaderOverlayRef}
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100vw",
                height: Z_BAR_HEIGHT,
              }}
            >
              <span
                ref={counterRef}
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: 24,
                  marginBottom: 16,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  color: "#fff",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                0%
              </span>

              <svg
                ref={loaderSvgRef}
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                style={{ display: "block", height: "100%", width: "100%" }}
              >
                <line
                  ref={loaderLineRef}
                  data-base-line
                  x1={0}
                  y1={5}
                  x2={0}
                  y2={5}
                  stroke="white"
                  strokeWidth={10}
                  strokeLinecap="butt"
                />
              </svg>
            </div>

            <div
              ref={taglineRef}
              style={{
                position: "absolute",
                top: `calc(50% + ${CIRCLE_RADIUS + 32}px)`,
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                color: "#fff",
                fontSize: "3rem",
                fontWeight: 600,
                letterSpacing: "0.24em",
                fontFamily: "'Times New Roman', Times, serif",
                fontStyle: "italic",
                opacity: 0,
              }}
            >
              excelling realty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
