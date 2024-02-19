import React, { FC, useRef, useState, useEffect, ReactElement } from "react";
import {
  AddPoint,
  calculateSomatotype,
  IPoints,
  UpdateCanvas,
} from "../../datas/Calculation";
import { IAnthropometric, ISomatotype } from "../../App";

interface ISomatotypeGraph {
  graphColor?: string;
  updateGraph?: boolean;
  pointsArray?: IPoints[];
  endo?: number;
  meso?: number;
  ecto?: number;
}

const SomatotypeGraph: FC<ISomatotypeGraph> = (props): any => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const showSomatotypeGraph = () => {
    var canvas: HTMLCanvasElement | null = canvasRef.current;
    var ctx: any = canvas?.getContext("2d");

    if (
      canvasRef.current?.style.width != null &&
      canvasRef.current?.style.height != null
    ) {
      canvasRef.current!.style.width = "100%";
      canvasRef.current!.style.height = `${
        canvasRef.current?.offsetWidth! * 1.17
      }px`;
    }

    UpdateCanvas(
      ctx,
      canvas,
      canvasRef.current?.offsetWidth,
      canvasRef.current?.offsetHeight,
      props.pointsArray!,
      props.graphColor!
    );

    function handleResize() {
      if (canvasRef.current?.style.width !== undefined) {
        canvasRef.current!.style.width = "100%";
        canvasRef.current!.style.height = `${
          canvasRef.current?.offsetWidth * 1.17
        }px`;

        UpdateCanvas(
          ctx,
          canvas,
          canvasRef.current?.offsetWidth,
          canvasRef.current?.offsetHeight,
          props.pointsArray!,
          props.graphColor!
        );
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  };

  useEffect(() => {
    showSomatotypeGraph();
  }, [props.updateGraph]);

  return <canvas width="0" height="0" ref={canvasRef} />;
};

export default SomatotypeGraph;
