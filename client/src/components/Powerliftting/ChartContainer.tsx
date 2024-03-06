import React, { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";

interface Workout {
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

interface ChartsContainerProps {
  workouts: Workout[];
}

function ChartsContainer({ workouts }: ChartsContainerProps): JSX.Element {
  const [chartsCreated, setChartsCreated] = useState(false);

  const rpeChartRef = useRef<HTMLDivElement>(null);
  const loadChartRef = useRef<HTMLDivElement>(null);
  const adjustedLoadChartRef = useRef<HTMLDivElement>(null);

  const createCharts = useCallback(() => {
    if (workouts.length === 0) return;

    const loadChartData = workouts.map((workout) => workout.prescribedLoad);
    const adjustedLoadData = workouts.map((workout) =>
      getAdjustedLoad(workout)
    );

    const extent: [number, number] = d3.extent([
      ...loadChartData,
      ...adjustedLoadData,
    ]) as [number, number];

    const yScale = d3.scaleLinear().domain(extent).nice();

    createChart(
      rpeChartRef.current,
      getLabels(workouts.length),
      [
        workouts.map((workout) => workout.intendedRPE),
        workouts.map((workout) => workout.actualRPE),
      ],
      ["Intended RPE Scores", "Actual RPE Scores"],
      ["rgba(75, 192, 192, 0.4)", "rgba(255, 99, 132, 0.5)"],
      "RPE",
      yScale,
      "rgba(75, 192, 192, 0.4)",
      "Intended RPE Scores",
      "rgba(255, 99, 132, 0.5)",
      "Actual RPE Scores"
    );

    createChart(
      loadChartRef.current,
      getLabels(workouts.length),
      [loadChartData],
      ["Training Load (kg)"],
      ["rgba(54, 162, 235, 0.5)"],
      null,
      yScale,
      "rgba(54, 162, 235, 0.5)",
      "Training Load (kg)",
      "",
      ""
    );

    createChart(
      adjustedLoadChartRef.current,
      getLabels(workouts.length),
      [adjustedLoadData],
      ["Adjusted Training Load (kg)"],
      ["rgba(255, 99, 132, 0.5)"],
      null,
      yScale,
      "rgba(255, 99, 132, 0.5)",
      "Adjusted Training Load (kg)",
      "",
      ""
    );
  }, [workouts]);

  useEffect(() => {
    createCharts();
    setChartsCreated(true);

    return () => {
      destroyCharts();
    };
  }, []);

  useEffect(() => {
    if (chartsCreated) {
      destroyCharts();
      createCharts();
    }
  }, [workouts]);

  const destroyCharts = (): void => {
    if (rpeChartRef.current) {
      d3.select(rpeChartRef.current).selectAll("*").remove();
    }
    if (loadChartRef.current) {
      d3.select(loadChartRef.current).selectAll("*").remove();
    }
    if (adjustedLoadChartRef.current) {
      d3.select(adjustedLoadChartRef.current).selectAll("*").remove();
    }
    setChartsCreated(false);
  };

  const getLabels = (count: number): string[] => {
    return Array.from({ length: count }, (_, i) => `Workout ${i + 1}`);
  };

  const getAdjustedLoad = (workout: Workout): number => {
    const adjustmentFactor =
      1 + (workout.intendedRPE - workout.actualRPE) * 0.05;
    return workout.prescribedLoad * adjustmentFactor;
  };

  const createChart = (
    element: HTMLDivElement | null,
    labels: string[],
    data: number[][],
    legend: string[],
    colors: string[],
    chartType: string | null,
    yScale: d3.ScaleLinear<number, number>,
    intendedBoxColor: string,
    intendedDescription: string,
    actualBoxColor: string,
    actualDescription: string
  ): void => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = 450 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    if (!element) return;

    d3.select(element).selectAll("*").remove();

    const x = d3.scaleBand().domain(labels).range([0, width]);

    const extent: [number, number] = d3.extent(data.flat()) as [number, number];

    let y: d3.ScaleLinear<number, number>;
    if (chartType === "RPE") {
      y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
    } else {
      const adjustedExtent: [number, number] = [0, extent[1] * 1.1];
      y = d3.scaleLinear().domain(adjustedExtent).nice().range([height, 0]);
    }

    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("color", "gray")
      .style("border-radius", "10px")
      .style("background-color", "white")
      .style("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const line = d3
      .line<number>()
      .x((_, i) => x(labels[i])! + x.bandwidth() / 2)
      .y((d) => y(d))
      .curve(d3.curveMonotoneX);

    svg.selectAll(".x-axis-text").style("fill", "blue");
    svg.selectAll(".y-axis-text").style("fill", "green");

    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(-height).tickFormat(null));

    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(y).tickSize(-width).tickFormat(null));

    const tooltip = d3
      .select(element)
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    data.forEach((dataset, i) => {
      svg
        .append("path")
        .datum(dataset)
        .attr("fill", "none")
        .attr("stroke", colors[i])
        .attr("stroke-width", 2)
        .attr("d", line);

      svg
        .selectAll(`.circle-${i}`)
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class", `circle-${i}`)
        .attr("cx", (_, i) => x(labels[i])! + x.bandwidth() / 2)
        .attr("cy", (d) => y(d))
        .attr("r", 4)
        .attr("fill", colors[i])
        .on("mouseover", (event, d) => {
          const workoutType = legend[i];
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`${workoutType}: ${d}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });
    });

    if (intendedDescription) {
      const intendedBoxX = width + margin.right / 2 - 300;
      const intendedBoxY = -margin.top / 2;

      svg
        .append("rect")
        .attr("x", intendedBoxX + 20 - 15)
        .attr("y", intendedBoxY + 3)
        .attr("width", 15)
        .attr("height", 15)
        .style("fill", intendedBoxColor);

      svg
        .append("text")
        .attr("x", intendedBoxX + 20 + 5)
        .attr("y", intendedBoxY + 15)
        .text(intendedDescription)
        .style("font-size", "14px");
    }

    if (actualDescription) {
      const actualBoxX = width + margin.right / 2 - 300;
      const actualBoxY = -margin.top / 3 - 30;

      svg
        .append("rect")
        .attr("x", actualBoxX + 20 - 15)
        .attr("y", actualBoxY + 3)
        .attr("width", 15)
        .attr("height", 15)
        .style("fill", actualBoxColor);

      svg
        .append("text")
        .attr("x", actualBoxX + 20 + 5)
        .attr("y", actualBoxY + 15)
        .text(actualDescription)
        .style("font-size", "14px");
    }
  };

  return (
    <div className="main">
      <div className="chart-container">
        <div className="chart-wrapper">
          <div ref={rpeChartRef}></div>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-wrapper">
          <div ref={loadChartRef}></div>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-wrapper">
          <div ref={adjustedLoadChartRef}></div>
        </div>
      </div>
    </div>
  );
}

export default ChartsContainer;
