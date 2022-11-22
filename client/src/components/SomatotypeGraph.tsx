import React, {FC,useRef, useState, useEffect, ReactElement} from 'react'
import { AddPoint, calculateSomatotype, IPoints, UpdateCanvas } from './Calculation';
import { IAnthropometric, ISomatotype } from "../App";

interface ISomatotypeGraph{
    updateGraph?: boolean,
    somatotype?: ISomatotype | undefined,
    anthropometric?: IAnthropometric | undefined,
    setSomatotype?:((somatotype:ISomatotype | undefined) => void | undefined)
}

const SomatotypeGraph:FC<ISomatotypeGraph> = (props):any => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const showSomatotypeGraph = () => {
        var canvas: HTMLCanvasElement | null = canvasRef.current;
        var ctx: any = canvas?.getContext("2d");
    
        if(canvasRef.current?.style.width != null && 
            canvasRef.current?.style.height != null){
                canvasRef.current!.style.width = "100%";
                canvasRef.current!.style.height = `${canvasRef.current?.offsetWidth! * 1.17}px`;
        }
    
        const anthropometricInputs:IAnthropometric = {
            weight : props.anthropometric?.weight, 
            height : props.anthropometric?.height, 
            tricep_skinfold : props.anthropometric?.tricep_skinfold, 
            subscapular_skinfold : props.anthropometric?.subscapular_skinfold, 
            supraspinal_skinfold : props.anthropometric?.supraspinal_skinfold, 
            humerus_breadth : props.anthropometric?.humerus_breadth, 
            femur_breadth : props.anthropometric?.femur_breadth, 
            calf_girth : props.anthropometric?.calf_girth, 
            bicep_girth : props.anthropometric?.bicep_girth
        };
    
        const somatotypeResults = calculateSomatotype(anthropometricInputs);
        
        let pointsArray: IPoints[] = [];
        const point = AddPoint(somatotypeResults[0],somatotypeResults[1],somatotypeResults[2]);
        pointsArray.push(point);
        
        UpdateCanvas(ctx, canvas,canvasRef.current?.offsetWidth, canvasRef.current?.offsetHeight, pointsArray);
    
        props.setSomatotype?.({
          endomorphy: somatotypeResults[0],
          mesomorphy: somatotypeResults[1],
          ectomorphy: somatotypeResults[2],
        });
    
        function handleResize() {
            if(canvasRef.current?.style.width !== undefined){
                canvasRef.current!.style.width = "100%";
                canvasRef.current!.style.height = `${canvasRef.current?.offsetWidth * 1.17}px`;
    
                UpdateCanvas(ctx, canvas,canvasRef.current?.offsetWidth, canvasRef.current?.offsetHeight, pointsArray);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      };

    useEffect(() => {
        showSomatotypeGraph();
    }, [props.updateGraph]);

  return (
    <canvas style={{border:`1px solid black`}} width="0" height="0" ref={canvasRef} />
  )
}

export default SomatotypeGraph