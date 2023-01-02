import { IAnthropometric } from "../App";

/**
 * Calculate Endo/Meso/Ecto-morphes based on the given somatotype.
 * The given somatotype Object need theses properties :
 * weight - height - tricep_skinfold - subscapular_skinfold - supraspinal_skinfold - humerus_breadth - femur_breadth - calf_girth - bicep_girth
 * @param {Object} anthropometric
 */
export function calculateSomatotype(anthropometric: IAnthropometric) {
  var endomorphy = 0;
  var mesomorphy = 0;
  var ectomorphy = 0;

  if (
    anthropometric.weight !== undefined &&
    anthropometric.height !== undefined &&
    anthropometric.tricep_skinfold !== undefined &&
    anthropometric.subscapular_skinfold !== undefined &&
    anthropometric.supraspinal_skinfold !== undefined &&
    anthropometric.humerus_breadth !== undefined &&
    anthropometric.femur_breadth !== undefined &&
    anthropometric.calf_girth !== undefined &&
    anthropometric.bicep_girth !== undefined
  ) {
    var skinfolds =
      anthropometric.tricep_skinfold +
      anthropometric.subscapular_skinfold +
      anthropometric.supraspinal_skinfold;

    var xSomatotype = skinfolds * (170.18 / anthropometric.height);

    var hwr = anthropometric.height / Math.cbrt(anthropometric.weight);

    endomorphy =
      -0.7182 +
      0.1451 * xSomatotype -
      0.00068 * Math.pow(xSomatotype, 2) +
      0.0000014 * Math.pow(xSomatotype, 3);

    mesomorphy =
      0.858 * anthropometric.humerus_breadth +
      0.601 * anthropometric.femur_breadth +
      0.188 * anthropometric.bicep_girth +
      0.161 * anthropometric.calf_girth -
      0.131 * anthropometric.height +
      4.5;

    if (hwr >= 40.75) {
      ectomorphy = 0.732 * hwr - 28.58;
    } else if (hwr < 40.75 && hwr > 38.25) {
      ectomorphy = 0.463 * hwr - 17.63;
    } else {
      ectomorphy = 0.1;
    }
  }

  return [
    Number(endomorphy.toFixed(1)),
    Number(mesomorphy.toFixed(1)),
    Number(ectomorphy.toFixed(1)),
  ];
}

export interface IPoints {
  x: number;
  y: number;
  endomorphy: number;
  mesomorphy: number;
  ectomorphy: number;
  pointColor: string;
}

export function AddPoint(
  endomorphy: number,
  mesomorphy: number,
  ectomorphy: number,
  pointColor: string
) {
  var xPos = Number(ectomorphy) - Number(endomorphy);
  var yPos = 2 * Number(mesomorphy) - (Number(endomorphy) + Number(ectomorphy));
  var pos: IPoints = {
    x: xPos,
    y: yPos,
    endomorphy: endomorphy,
    mesomorphy: mesomorphy,
    ectomorphy: ectomorphy,
    pointColor: pointColor,
  };
  return pos;
}

export function UpdateCanvas(
  context: any,
  canvas: any,
  canvasWidthValue: number | undefined,
  canvasHeightValue: number | undefined,
  addedPointsList: Array<IPoints>,
  graphColor: string
) {
  if (canvas !== undefined && canvas !== null && context !== undefined) {
    // ctx.reset();

    (canvas.width as number | undefined) = canvasWidthValue;
    (canvas.height as number | undefined) = canvasHeightValue;

    drawGraph(
      context,
      canvasWidthValue,
      canvasHeightValue,
      graphColor,
      String(canvasWidthValue! / 25)
    );

    if (addedPointsList !== undefined) {
      for (let i = 0; i < addedPointsList.length; i++) {
        // x axes has 23 reference points going up by 1
        // the middle of the canvas starts at 0
        // x = 23.5 based of the original 400
        var rel_x =
          canvasWidthValue! * getWidthRatio(247) +
          ((canvasWidthValue! * getWidthRatio(400)) / 12) *
            addedPointsList[i].x;

        // y axes has 16 reference points going up by 2
        // the middle of the triangle starts at 0 (242)
        // y = 26.25
        var rel_y =
          canvasHeightValue! * getHeightRatio(342) -
          ((canvasWidthValue! * getWidthRatio(420)) / 23) *
            addedPointsList[i].y;

        drawNewPoint(
          context,
          rel_x,
          rel_y,
          Number(addedPointsList[i].endomorphy),
          Number(addedPointsList[i].mesomorphy),
          Number(addedPointsList[i].ectomorphy),
          addedPointsList[i].pointColor,
          String(canvasWidthValue! / 20)
        );
      }
    }
  }
}

function drawGraph(
  context: any,
  canvasWidthValue: number | undefined,
  canvasHeightValue: number | undefined,
  graphColor: string,
  fontsize: string
) {
  // middle line of the canvas
  context.beginPath();
  context.moveTo(
    canvasWidthValue! * getWidthRatio(247),
    canvasHeightValue! * getHeightRatio(116)
  );
  context.lineTo(
    canvasWidthValue! * getWidthRatio(247),
    canvasHeightValue! * getHeightRatio(516)
  );

  context.font = `bold ${fontsize}px Roboto`;
  context.fillStyle = graphColor;
  context.strokeStyle = graphColor;
  context.fillText(
    "Meso",
    canvasWidthValue! * getWidthRatio(220),
    canvasHeightValue! * getHeightRatio(110)
  );

  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();

  // middle of the triangle , which is 1/3 of the height of the triangle = 115.33.
  context.beginPath();
  context.arc(
    canvasWidthValue! * getWidthRatio(247),
    canvasHeightValue! * getHeightRatio(342),
    5,
    0,
    2 * Math.PI
  );
  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(
    canvasWidthValue! * getWidthRatio(47),
    canvasHeightValue! * getHeightRatio(462),
    canvasWidthValue! * getWidthRatio(400),
    (5 / 3) * Math.PI,
    0
  );
  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();

  // circle from the right side
  context.beginPath();
  context.arc(
    canvasWidthValue! * getWidthRatio(447),
    canvasHeightValue! * getHeightRatio(462),
    canvasWidthValue! * getWidthRatio(400),
    1 * Math.PI,
    (4 / 3) * Math.PI
  );
  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();

  // circle from top of the triangle
  context.beginPath();
  context.arc(
    canvasWidthValue! * getWidthRatio(247),
    canvasHeightValue! * getHeightRatio(116),
    canvasWidthValue! * getWidthRatio(400),
    (1 / 3) * Math.PI,
    (2 / 3) * Math.PI
  );
  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();

  // path going from right triangle corner to middle left triangle side
  context.beginPath();
  context.moveTo(
    canvasWidthValue! * getWidthRatio(447),
    canvasHeightValue! * getHeightRatio(462)
  );
  context.lineTo(
    canvasWidthValue! * getWidthRatio(47),
    canvasHeightValue! * getHeightRatio(231)
  );

  context.font = `bold ${fontsize}px Roboto`;
  context.fillStyle = graphColor;
  context.strokeStyle = graphColor;
  context.fillText(
    "Ecto",
    canvasWidthValue! * getWidthRatio(450),
    canvasHeightValue! * getHeightRatio(480)
  );

  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();

  // path going from left triangle corner to middle right triangle side
  context.beginPath();
  context.moveTo(
    canvasWidthValue! * getWidthRatio(47),
    canvasHeightValue! * getHeightRatio(462)
  );
  context.lineTo(
    canvasWidthValue! * getWidthRatio(447),
    canvasHeightValue! * getHeightRatio(231)
  );

  context.font = `bold ${fontsize}px Roboto`;
  context.fillStyle = graphColor;
  context.strokeStyle = graphColor;
  context.fillText(
    "Endo",
    canvasWidthValue! * getWidthRatio(0),
    canvasHeightValue! * getHeightRatio(480)
  );

  context.strokeStyle = graphColor;
  context.stroke();
  context.closePath();
}

function drawNewPoint(
  context: any,
  xPos: number,
  yPos: number,
  endomorphyValue: number,
  mesomorphyValue: number,
  ectomorphyValue: number,
  pointColor: string,
  fontsize: string
) {
  context.beginPath();
  context.arc(xPos, yPos, 1.5, 0, 2 * Math.PI);
  context.fillStyle = pointColor;
  context.fill();
  context.strokeStyle = pointColor;
  context.stroke();

  context.font = `bold ${fontsize}px Roboto`;
  // if value < 1 then value gets 1 to avoid value of 0
  endomorphyValue =
    Number(endomorphyValue) < 1 ? 1 : Number(endomorphyValue?.toFixed());
  mesomorphyValue =
    Number(mesomorphyValue) < 1 ? 1 : Number(mesomorphyValue?.toFixed());
  ectomorphyValue =
    Number(ectomorphyValue) < 1 ? 1 : Number(ectomorphyValue?.toFixed());
  context.fillText(
    ` ${Math.abs(endomorphyValue)}-${Math.abs(mesomorphyValue)}-${Math.abs(
      ectomorphyValue
    )}`,
    xPos,
    yPos
  );
  context.fillStyle = "white";
  context.closePath();
}

function getWidthRatio(value: number) {
  //494 = base Width of canvas
  var ratio = value / 494;
  return ratio;
}

function getHeightRatio(value: number) {
  //577.5 = base Height of canvas
  var ratio = value / 577.5;
  return ratio;
}
