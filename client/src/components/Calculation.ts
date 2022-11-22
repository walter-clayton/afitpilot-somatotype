import { IAnthropometric } from "../App";

/**
 * Calculate Endo/Meso/Ecto-morphes based on the given somatotype.
 * The given somatotype Object need theses properties :
 * weight - height - tricep_skinfold - subscapular_skinfold - supraspinal_skinfold - humerus_breadth - femur_breadth - calf_girth - bicep_girth
 * @param {Object} somatotype
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @param {any} canvasRef
*/
export function myform(
  somatotype: IAnthropometric,
  canvasWidth: number | undefined,
  canvasHeight: number | undefined,
  canvasRef: any
) {
  
  var endomorphy = 0;
  var mesomorphy = 0;
  var ectomorphy = 0;

  if (
    somatotype.weight !== undefined &&
    somatotype.height !== undefined &&
    somatotype.tricep_skinfold !== undefined &&
    somatotype.subscapular_skinfold !== undefined &&
    somatotype.supraspinal_skinfold !== undefined &&
    somatotype.humerus_breadth !== undefined &&
    somatotype.femur_breadth !== undefined &&
    somatotype.calf_girth !== undefined &&
    somatotype.bicep_girth !== undefined
  ) {
    var skinfolds =
      somatotype.tricep_skinfold +
      somatotype.subscapular_skinfold +
      somatotype.supraspinal_skinfold;

    var xSomatotype = skinfolds * (170.18 / somatotype.height);

    var hwr = somatotype.height / Math.cbrt(somatotype.weight);

    endomorphy =
      -0.7182 +
      0.1451 * xSomatotype -
      0.00068 * Math.pow(xSomatotype, 2) +
      0.0000014 * Math.pow(xSomatotype, 3);

    mesomorphy =
      0.858 * somatotype.humerus_breadth +
      0.601 * somatotype.femur_breadth +
      0.188 * somatotype.bicep_girth +
      0.161 * somatotype.calf_girth -
      0.131 * somatotype.height +
      4.5;

    if (hwr >= 40.75) {
      ectomorphy = 0.732 * hwr - 28.58;
    } else if (hwr < 40.75 && hwr > 38.25) {
      ectomorphy = 0.463 * hwr - 17.63;
    } else {
      ectomorphy = 0.1;
    }
  }

  // formula for plotting somatotype on graph
  var x = ectomorphy - endomorphy;
  var y = (2 * mesomorphy) - (endomorphy + ectomorphy);

  // x axes has 23 reference points going up by 1
  // the middle of the canvas starts at 0
  // x = 23.5 based of the original 400
  var rel_x = (canvasWidth! * getWidthRatio(247)) + ((canvasWidth! * getWidthRatio(400))/12 * x);

  // y axes has 16 reference points going up by 2
  // the middle of the triangle starts at 0 (242)
  // y = 26.25
  var rel_y = (canvasHeight! * getHeightRatio(342))-((canvasWidth! * getWidthRatio(420))/23 * y);


  var canvas: HTMLCanvasElement = canvasRef as HTMLCanvasElement;
  var ctx: any = canvas?.getContext("2d");

  if(canvas !== undefined && canvas !== null && ctx !== undefined){
    // ctx.reset();
    
    (canvas.width as number | undefined) = canvasWidth;
    (canvas.height as number | undefined) = canvasHeight;
    
    drawGraph(ctx, canvasWidth, canvasHeight);
    
    drawNewPoint(ctx, rel_x, rel_y, endomorphy, mesomorphy, ectomorphy);
  }

  return [endomorphy, mesomorphy, ectomorphy];
}

function drawGraph(context:any, canvasWidthValue:number | undefined, canvasHeightValue:number | undefined){
  
  // middle line of the canvas
  context.beginPath();
  context.moveTo(canvasWidthValue! * getWidthRatio(247), canvasHeightValue! * getHeightRatio(116));
  context.lineTo(canvasWidthValue! * getWidthRatio(247),canvasHeightValue! * getHeightRatio(516));
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  // middle of the triangle , which is 1/3 of the height of the triangle = 115.33.
  context.beginPath();
  context.arc(canvasWidthValue! * getWidthRatio(247), canvasHeightValue! * getHeightRatio(342), 5, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(canvasWidthValue! * getWidthRatio(47), canvasHeightValue! * getHeightRatio(462), canvasWidthValue! * getWidthRatio(400), 5/3 * Math.PI,0 );
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  // circle from the right side
  context.beginPath();
  context.arc(canvasWidthValue! * getWidthRatio(447), canvasHeightValue! * getHeightRatio(462), canvasWidthValue! * getWidthRatio(400), 1 * Math.PI, 4/3 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  // circle from top of the triangle
  context.beginPath();
  context.arc(canvasWidthValue! * getWidthRatio(247), canvasHeightValue! * getHeightRatio(116), canvasWidthValue! * getWidthRatio(400), 1/3 * Math.PI, 2/3 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  // path going from right triangle corner to middle left triangle side
  context.beginPath();
  context.moveTo(canvasWidthValue! * getWidthRatio(447), canvasHeightValue! * getHeightRatio(462));
  context.lineTo(canvasWidthValue! * getWidthRatio(47), canvasHeightValue! * getHeightRatio(231));
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  // path going from left triangle corner to middle right triangle side
  context.beginPath();
  context.moveTo(canvasWidthValue! * getWidthRatio(47), canvasHeightValue! * getHeightRatio(462));
  context.lineTo(canvasWidthValue! * getWidthRatio(447), canvasHeightValue! * getHeightRatio(231));
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();
}

function drawNewPoint(context:any, xPos:number, yPos:number, endomorphyValue:number, mesomorphyValue:number, ectomorphyValue:number){
  context.beginPath();
  context.arc(xPos, yPos, 1, 0, 2 * Math.PI);
  context.fillStyle = "blue";
  context.fill();
  context.strokeStyle = "blue";
  context.stroke();

  context.font = "15px Georgia";
  context.fillText( " " + endomorphyValue.toFixed(0) + "-" + mesomorphyValue.toFixed(0) + "-" + ectomorphyValue.toFixed(0), xPos, yPos);
  context.fillStyle = "white";
  context.closePath();
}

function getWidthRatio(value:number){
    //494 = base Width of canvas
    var ratio = value/494;
    return ratio;
}

function getHeightRatio(value:number){
  //577.5 = base Height of canvas
  var ratio = value/577.5;
  return ratio;
}
