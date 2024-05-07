import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface RPEData {
  _id: string;
  averageScore: number;
  color: string;
  emoji: string;
}

const RPEDashboard = () => {
  const [data, setData] = useState<RPEData[]>([]);
  const d3Container = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/rpe");
      setData(response.data.rpeData);
    } catch (error) {
      console.error("Error fetching RPE data:", error);
    }
  };
  // D3 graph rendering logic
  useEffect(() => {
    if (data.length > 0 && d3Container.current) {
      const svg = d3.select(d3Container.current);

      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const daysOfWeek = [
        "Mon", // Start from Monday and only use the first three letters
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ];

      const x = d3
        .scaleBand()
        .domain(daysOfWeek)
        .rangeRound([0, width])
        .padding(0.3); // Increase padding to reduce the width of the columns
      const y = d3.scaleLinear().domain([0, 15]).rangeRound([height, 0]); // Change the y scale domain to [0, 15]

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("path") // Select the path of the axis
        .style("stroke-width", 2.5); // Set the stroke width to 2.5

      g.selectAll("text")
        .style("fill", "white")
        .style("font-size", "30px") // Increase the font size of the days
        .style("font-weight", "bold"); // Make the days of the week bold

      // Add horizontal lines at y axis positions
      for (let i = 0; i <= 15; i += 2) {
        g.append("line")
          .attr("x1", -80)
          .attr("y1", y(i))
          .attr("x2", 0)
          .attr("y2", y(i))
          .attr("stroke", "white")
          .attr("stroke-width", 2.5);
      }
      // Get the date 7 days ago
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      // Filter the data to include only the last 7 days
      const lastSevenDaysData = data.filter(
        (d) => new Date(d._id) >= sevenDaysAgo
      );

      lastSevenDaysData.forEach((d) => {
        // Calculate the day of the week from the _id date
        const dayOfWeek = daysOfWeek[new Date(d._id).getDay() - 1];
        const barWidth = 50; // Set the bar width to 70px
        const barHeight = height - y(d.averageScore);

        g.append("rect")
          .attr("class", "bar")
          .attr("x", (x(dayOfWeek) || 0) + x.bandwidth() / 2 - barWidth / 2) // Adjust the x position of the bar
          .attr("y", y(d.averageScore))
          .attr("width", barWidth)
          .attr("height", barHeight)
          .attr("fill", d.color)
          .attr("stroke-width", 2.5);

        // Add average score text above the emoji
        g.append("text")
          .attr("class", "score")
          .attr("x", (x(dayOfWeek) || 0) + x.bandwidth() / 2) // Adjust the x position of the score
          .attr("y", y(d.averageScore) - 50) // Position the score 80px above the emoji
          .attr("text-anchor", "middle")
          .attr("font-size", "20px") // Set the font size of the score
          .attr("fill", "white") // Set the color of the score
          .text(Math.round(d.averageScore)) // Display the score as an integer
          .style("font-size", "30px") // Increase the font size of the days
          .style("font-weight", "bold"); // Make the days of the week bold

        g.append("text")
          .attr("class", "emoji")
          .attr("x", (x(dayOfWeek) || 0) + x.bandwidth() / 2) // Adjust the x position of the emoji
          .attr("y", y(d.averageScore) + 20) // Adjust the y position of the emoji to be 10px above the bar
          .attr("text-anchor", "middle")
          .attr("font-size", "70px") // Keep the size of the emoji the same
          .text(d.emoji);
      });
    }
  }, [data]);
  return (
    <Grid
      container
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        margin: -10,
        padding: 100,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography
          variant={isSmallScreen ? "h3" : "h1"}
          align="center"
          gutterBottom
        >
          RPE DASHBOARD
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          align="center"
          gutterBottom
        >
          Last 7 days
        </Typography>
      </Grid>
      <Grid item sm={10}>
        <svg
          className="d3-component"
          width="100%"
          height="100%"
          viewBox="0 0 960 500"
          preserveAspectRatio="xMidYMid meet"
          ref={d3Container}
        />
      </Grid>
    </Grid>
  );
};

export default RPEDashboard;
