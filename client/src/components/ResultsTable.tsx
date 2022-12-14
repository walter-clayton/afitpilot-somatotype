import * as React from "react";
import { useState, useEffect, FC } from "react";
import Table from "@mui/material/Table";
import TableBody, { tableBodyClasses } from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  ClickAwayListener,
  Grid,
  IconButton,
  Modal,
  Popper,
  TablePagination,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { display, flexbox, fontWeight } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ISomatotype } from "../App";
import axios from "axios";
import { useCookies } from "react-cookie";
import { AddPoint, IPoints } from "./Calculation";
import { getSomatotypeType } from "./TestPage";
import { useNavigate } from "react-router-dom";
import avatar from './image/manu-tribesman.png'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function createRow(
  Endomorphy: string,
  Mesomorphy: string,
  Ectomorphy: string,
  Date: string,
  Id: string,
  IsDisplayed: boolean
) {
  return { Endomorphy, Mesomorphy, Ectomorphy, Date, Id, IsDisplayed };
}

function formatDate(date: string) {
  let newDate = "";
  let formatedDate = "";
  if (date !== null && date !== undefined) {
    newDate = date.split(" ")[0];
  }
  if (date !== "") {
    formatedDate = newDate.substring(0, newDate.length - 1);
  }

  return formatedDate;
}

interface resultProps {
  somatotypes?: ISomatotype[];
  showHistory?: boolean;
  getUserDatas?: () => void;
  setIsAdding?: (openModal: boolean) => void;
  setIdRow?: (id: string) => void;
  idRow?: string;
  setIdSomatotype?: (id: string) => void;
  idSomatotype?: string;
  multipleResults?: boolean;
  singleSomatotype?: ISomatotype;
  setPointsArray?: (pointsArray: IPoints[]) => void;
  toggleGraph?: boolean;
  setToggleGraph?: (toggleGraph: boolean) => void;
  setDashboardSnackBarOpen?: (open: boolean) => void;
  setDashboardSnackBarMessage?: (msg: string) => void;
  isFetching?: boolean;
}

const ResultsTable: FC<resultProps> = (props: any) => {
  const { height, width } = useWindowDimensions();

  const [rows, setRows] = useState<any[]>([]);

  const [cookies, setCookie] = useCookies(["user"]);

  const [shownSomatotypeArray, setShownSomatotypeArray] = useState<
    ISomatotype[]
  >([]);

  const [updating, setUpdating] = useState<boolean>(false);

  const [page, setPage] = useState(0);
  const rowsPerPage: number = 5;

  const navigate = useNavigate();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    CheckForDisplayedRows(rows);
    setPage(newPage);
  };

  const deleteSomatotype = async (id: string) => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      setUpdating(true);
      const response = await axios.delete(
        `${process.env.REACT_APP_DELETESOMATOTYPE_URL}/${props.idSomatotype}`!,
        { headers: headers }
      );
      //TO DO Set snackbar message to say deleted sucessfully
      props.getUserDatas();
      setUpdating(false);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
      setUpdating(false);
    }
  };

  useEffect(() => {
    setRows([]);
    if (props.somatotypes !== undefined) {
      let ordoredSomatotypes = props.somatotypes.reverse();
      ordoredSomatotypes.forEach((somatotype: ISomatotype, index: number) => {
        let formatedDate = "";
        if (
          somatotype.createdAt !== null &&
          somatotype.createdAt !== undefined
        ) {
          formatedDate = formatDate(somatotype.createdAt);
        }

        let isDisplayed = false;
        if (index === 0) {
          isDisplayed = true;
        }

        setRows((rows) => [
          ...rows,
          createRow(
            String(somatotype.endomorphy?.toFixed(1)),
            String(somatotype.mesomorphy?.toFixed(1)),
            String(somatotype.ectomorphy?.toFixed(1)),
            String(formatedDate),
            String(somatotype._id),
            isDisplayed
          ),
        ]);
        setTypeResult(
          getSomatotypeType(
            ordoredSomatotypes[0].endomorphy,
            ordoredSomatotypes[0].mesomorphy,
            ordoredSomatotypes[0].ectomorphy
          )
        );
      });
    }
  }, [props.somatotypes]);

  useEffect(() => {
    setRows([]);
    if (props.singleSomatotype !== undefined) {
      setRows((rows) => [
        ...rows,
        createRow(
          String(props.singleSomatotype.endomorphy.toFixed(1)),
          String(props.singleSomatotype.mesomorphy.toFixed(1)),
          String(props.singleSomatotype.ectomorphy.toFixed(1)),
          String(props.singleSomatotype.createdAt),
          String(props.singleSomatotype._id),
          true
        ),
      ]);
      setTypeResult(
        getSomatotypeType(
          props.singleSomatotype.endomorphy,
          props.singleSomatotype.mesomorphy,
          props.singleSomatotype.ectomorphy
        )
      );
    }
  }, [props.singleSomatotype]);

  useEffect(() => {
    CheckForDisplayedRows(rows);
  }, [rows]);

  useEffect(() => {
    if (props.showHistory) {
      props.getUserDatas();
    }
  }, []);

  const showSomatotypeInGraph = (somatotypesToShow: ISomatotype[]) => {
    let pointsResultsArray: IPoints[] = [];
    somatotypesToShow.forEach((somatotypeToShow) => {
      const point = AddPoint(
        somatotypeToShow.endomorphy!,
        somatotypeToShow.mesomorphy!,
        somatotypeToShow.ectomorphy!
      );
      pointsResultsArray.push(point);
    });

    props.setPointsArray(pointsResultsArray);
    props.setToggleGraph(!props.toggleGraph);
  };

  useEffect(() => {
    showSomatotypeInGraph(shownSomatotypeArray);
  }, [shownSomatotypeArray]);

  const handleEditResultsClick = () => {
    handleEditModalOpen();
  };

  const handleDeleteResultsClick = () => {
    handleDeleteModalOpen();
  };

  const CheckForDisplayedRows = (rows: any) => {
    setShownSomatotypeArray([]);
    let tempSomatotypesToShow: ISomatotype[] = [];
    rows.forEach((row: any) => {
      let displayedSomatotype: ISomatotype | undefined;
      if (row.IsDisplayed) {
        displayedSomatotype = {
          endomorphy: row.Endomorphy,
          mesomorphy: row.Mesomorphy,
          ectomorphy: row.Ectomorphy,
        };
        tempSomatotypesToShow.push(displayedSomatotype!);
      }
    });
    setShownSomatotypeArray(tempSomatotypesToShow);
  };

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    row: any
  ) => {
    row.IsDisplayed = !row.IsDisplayed;

    UpdateTableContent();
    CheckForDisplayedRows(rows);
  };

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);

  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleDeleteModalOpen = () => setOpenDeleteModal(true);
  const handleDeleteModalClose = () => {
    setOpenDeleteModal(false);
  };

  const [typeResult, setTypeResult] = useState<string>("");

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:
      width < 400 ? "90%" : width < 550 ? "80%" : width < 1000 ? "50%" : "35%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let endoColumnTitle = width >= 650 ? "Endomorphy" : "Endo";
  let mesoColumnTitle = width >= 650 ? "Mesomorphy" : "Meso";
  let ectoColumnTitle = width >= 650 ? "Ectomorphy" : "Ecto";

  let cellStyle = width >= 650 ? null : { padding: "6px 6px" };

  let tableHeadContent = null;
  let tableBodyContent = null;

  useEffect(() => {
    UpdateTableContent();
  }, []);

  const UpdateTableContent = () => {
    if (props.showHistory) {
      tableHeadContent = (
        <TableRow>
          <TableCell align="center" sx={cellStyle}>
            Show
          </TableCell>
          <TableCell align="center" sx={cellStyle}>
            Date
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
            Options
          </TableCell>
        </TableRow>
      );

      if (updating || props.isFetching) {
        tableBodyContent = (
          <TableRow key={"fetching"}>
            <TableCell align="center" sx={cellStyle} colSpan={6}>
              <CircularProgress size={25} />
            </TableCell>
          </TableRow>
        );
      } else {
        tableBodyContent = rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => (
            <TableRow
              key={index}
              sx={{ backgroundColor: row.IsDisplayed ? "lightgrey" : "white" }}
            >
              <TableCell align="center" sx={cellStyle}>
                <Checkbox
                  onChange={(e) => {
                    handleCheckBoxChange(e, row);
                  }}
                  aria-label="Somatotype selection checkbox"
                  checked={row.IsDisplayed}
                  icon={<VisibilityOffIcon sx={{ color: "#aaaaaa" }} />}
                  checkedIcon={<VisibilityIcon sx={{ color: "#aaaaaa" }} />}
                />
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {row.Date}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {row.Endomorphy}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {row.Mesomorphy}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {row.Ectomorphy}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    id="EditIconButtonWrapper"
                    onClick={() => {
                      props.setIdSomatotype(row.Id);
                      props.setIdRow(index);
                      handleEditResultsClick();
                    }}
                  >
                    <IconButton
                      aria-label="edit"
                      sx={{
                        color: "#aaaaaa",
                        padding: "0",
                        "&:hover": { color: "black" },
                      }}
                    >
                      <EditIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                  </div>
                  <div
                    id="DeleteIconButtonWrapper"
                    onClick={() => {
                      props.setIdSomatotype(row.Id);
                      props.setIdRow(index);
                      handleDeleteResultsClick();
                    }}
                  >
                    <IconButton
                      aria-label="delete"
                      sx={{
                        color: "#aaaaaa",
                        padding: "0",
                        "&:hover": { color: "black" },
                      }}
                    >
                      <DeleteIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                  </div>
                </Grid>
              </TableCell>
            </TableRow>
          ));
        tableBodyContent.push(
          <TableRow key={"pagination"}>
            <TableCell align="center" colSpan={12}>
              <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={5}
                rowsPerPageOptions={[]}
              />
            </TableCell>
          </TableRow>
        );
      }
    } else {
      tableHeadContent = (
        <TableRow>
          <TableCell align="center" sx={cellStyle}>
            {endoColumnTitle}
          </TableCell>
          <TableCell align="center" sx={cellStyle}>
            {mesoColumnTitle}
          </TableCell>
          <TableCell align="center" sx={cellStyle}>
            {ectoColumnTitle}
          </TableCell>
        </TableRow>
      );

      tableBodyContent = rows.map((row, index) => (
        <TableRow key={index}>
          <TableCell align="center" sx={cellStyle}>
            {Math.abs(row.Endomorphy)}
          </TableCell>
          <TableCell align="center" sx={cellStyle}>
            {Math.abs(row.Mesomorphy)}
          </TableCell>
          <TableCell align="center" sx={cellStyle}>
            {Math.abs(row.Ectomorphy)}
          </TableCell>
        </TableRow>
      ));
    }
    return [tableHeadContent, tableBodyContent];
  };

  return (
    <>
      <Typography textAlign={"center"} variant="h6" mt={2}>
        You are a {typeResult}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="results table" size="small">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={12}
                sx={{ backgroundColor: "black", color: "white" }}
              >
                RESULTS
              </TableCell>
            </TableRow>
            {UpdateTableContent()[0]}
          </TableHead>
          <TableBody>{UpdateTableContent()[1]}</TableBody>
        </Table>
        <Modal
          open={openEditModal}
          onClose={handleEditModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-description" textAlign={"center"}>
              Do you want to
              <Typography fontWeight={"bold"} component={"span"}>
                {" "}
                edit{" "}
              </Typography>
              this somatotype?
            </Typography>
            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleEditModalClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    props.setIsAdding(false);
                    navigate("/Add");
                    window.scrollTo(0, 0);
                    handleEditModalClose();
                  }}
                >
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={openDeleteModal}
          onClose={handleDeleteModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-description" textAlign={"center"}>
              Do you want to
              <Typography fontWeight={"bold"} component={"span"}>
                {" "}
                delete{" "}
              </Typography>
              this somatotype?
            </Typography>
            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDeleteModalClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    deleteSomatotype(props.idSomatotype);
                    handleDeleteModalClose();
                    props.setDashboardSnackBarOpen(true);
                    props.setDashboardSnackBarMessage(
                      "Somatotype deleted successfully !"
                    );
                  }}
                >
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </TableContainer>
      <Grid item sx={{ textAlign: "center", marginTop: 2 }}
      >
        <Typography variant="body1" sx={{ color: "black" }}>
          Your Somatotype is:
        </Typography>
        <Typography variant="h6" sx={{ color: "#e4ae3a", textAlign: "center" }}>
          {typeResult}
        </Typography>
        <img
          src={avatar}
          alt="manu tribesman"
          style={{ width: "100px" }}
        />
        <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
          EnMs are muscular and heavy built,with a gift for strength and power sports.
        </Typography>
      </Grid>
    </>
  );
};

export default ResultsTable;
