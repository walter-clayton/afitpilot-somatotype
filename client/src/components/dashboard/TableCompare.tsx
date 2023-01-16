import * as React from "react";
import { FC, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Checkbox,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ISomatotype } from "../../App";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AddPoint, IPoints } from "../../datas/Calculation";

function createRow(
  name: string,
  endo: string,
  meso: string,
  ecto: string,
  gender: string,
  isDisplayed: boolean
) {
  return { name, endo, meso, ecto, gender, isDisplayed };
}

export interface IComparison {
  group: string;
  gender: string;
  name: string;
  endo: number;
  meso: number;
  ecto: number;
}
interface ITableCompare {
  datas: IComparison[];
  isFetching?: boolean;
  setPointsArray?: (pointsArray: IPoints[]) => void;
  toggleGraph?: boolean;
  setToggleGraph?: (toggleGraph: boolean) => void;
  tableTitle?: string;
  page?: number;
  setPage?: (newPage: number) => void;
}

const TableCompare: FC<ITableCompare> = (props) => {
  const rowsPerPage: number = 5;
  const [rows, setRows] = useState<any[]>([]);
  const [shownSomatotypeArray, setShownSomatotypeArray] = useState<
    ISomatotype[]
  >([]);

  const xxs = useMediaQuery("(max-width:400px)");
  const xSmall = useMediaQuery("(max-width:550px)");
  const small = useMediaQuery("(max-width:650px)");
  const minSmall = useMediaQuery("(min-width:900px)");
  const medium = useMediaQuery("(max-width:1000px)");

  useEffect(() => {
    setRows([]);
    if (props.datas !== undefined && props.datas.length > 0) {
      props.datas.forEach((comparison: IComparison, index: number) => {
        let isDisplayed = false;
        if (index === 0) {
          isDisplayed = true;
        }

        setRows((rows) => [
          ...rows,
          createRow(
            String(comparison.name),
            String(comparison.endo),
            String(comparison.meso),
            String(comparison.ecto),
            String(comparison.gender),
            isDisplayed
          ),
        ]);
      });
    }
  }, [props.datas]);

  useEffect(() => {
    UpdateTableContent();
  }, []);

  useEffect(() => {
    CheckForDisplayedRows(rows);
  }, [rows]);

  useEffect(() => {
    showSomatotypeInGraph(shownSomatotypeArray);
  }, [shownSomatotypeArray]);

  const showSomatotypeInGraph = (somatotypesToShow: ISomatotype[]) => {
    let pointsResultsArray: IPoints[] = [];
    somatotypesToShow.forEach((somatotypeToShow) => {
      const point = AddPoint(
        somatotypeToShow.endomorphy!,
        somatotypeToShow.mesomorphy!,
        somatotypeToShow.ectomorphy!,
        "#000000"
      );
      pointsResultsArray.push(point);
    });

    props.setPointsArray!(pointsResultsArray);
    props.setToggleGraph!(!props.toggleGraph);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    CheckForDisplayedRows(rows);
    props.setPage!(newPage);
  };

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    row: any
  ) => {
    row.isDisplayed = !row.isDisplayed;

    UpdateTableContent();
    CheckForDisplayedRows(rows);
  };

  const CheckForDisplayedRows = (rows: any) => {
    setShownSomatotypeArray([]);
    let tempSomatotypesToShow: ISomatotype[] = [];
    rows.forEach((row: any) => {
      let displayedSomatotype: ISomatotype | undefined;
      if (row.isDisplayed) {
        displayedSomatotype = {
          endomorphy: row.endo,
          mesomorphy: row.meso,
          ectomorphy: row.ecto,
        };
        tempSomatotypesToShow.push(displayedSomatotype!);
      }
    });
    setShownSomatotypeArray(tempSomatotypesToShow);
  };

  let endoColumnTitle = small || minSmall ? "Endo" : "Endomorphy";
  let mesoColumnTitle = small || minSmall ? "Meso" : "Mesomorphy";
  let ectoColumnTitle = small || minSmall ? "Ecto" : "Ectomorphy";

  let cellStyle = small || minSmall ? { padding: "6px 6px" } : null;

  let tableHeadContent = null;
  let tableBodyContent = null;

  const UpdateTableContent = () => {
    tableHeadContent = (
      <TableRow>
        <TableCell align="center" sx={cellStyle}>
          Show
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          Name
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          {endoColumnTitle}
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          {mesoColumnTitle}
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          {ectoColumnTitle}
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          Gender
        </TableCell>
      </TableRow>
    );

    if (props.isFetching) {
      tableBodyContent = (
        <TableRow key={"fetching"}>
          <TableCell align="center" sx={cellStyle} colSpan={6}>
            <CircularProgress size={25} />
          </TableCell>
        </TableRow>
      );
    } else {
      tableBodyContent = rows
        .slice(
          props.page! * rowsPerPage,
          props.page! * rowsPerPage + rowsPerPage
        )
        .map((row, index) => (
          <TableRow
            key={index}
            sx={{ backgroundColor: row.isDisplayed ? "lightgrey" : "white" }}
          >
            <TableCell align="center" sx={cellStyle}>
              <Checkbox
                onChange={(e) => {
                  handleCheckBoxChange(e, row);
                }}
                aria-label="Somatotype selection checkbox"
                checked={row.isDisplayed}
                icon={<VisibilityOffIcon sx={{ color: "#aaaaaa" }} />}
                checkedIcon={<VisibilityIcon sx={{ color: "#aaaaaa" }} />}
              />
            </TableCell>
            <TableCell align="center" sx={cellStyle}>
              {row.name}
            </TableCell>
            <TableCell align="center" sx={cellStyle}>
              {row.endo}
            </TableCell>
            <TableCell align="center" sx={cellStyle}>
              {row.meso}
            </TableCell>
            <TableCell align="center" sx={cellStyle}>
              {row.ecto}
            </TableCell>
            <TableCell align="center" sx={cellStyle}>
              {row.gender}
            </TableCell>
          </TableRow>
        ));
      tableBodyContent.push(
        <TableRow key={"pagination"}>
          <TableCell align="center" colSpan={12}>
            <TablePagination
              component="div"
              count={rows.length}
              page={props.page!}
              onPageChange={handleChangePage}
              rowsPerPage={5}
              rowsPerPageOptions={[]}
            />
          </TableCell>
        </TableRow>
      );
      return [tableHeadContent, tableBodyContent];
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "25px", marginTop: "20px" }}
    >
      <Table aria-label="comparison table" size="small">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={12}
              sx={{
                backgroundColor: "#000000",
                color: "white",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "18px",
              }}
            >
              {props.tableTitle?.toUpperCase()}
            </TableCell>
          </TableRow>
          {UpdateTableContent()![0]}
        </TableHead>
        <TableBody>{UpdateTableContent()![1]}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCompare;
