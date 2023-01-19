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
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { display, flexbox, fontWeight } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IParamsAvatar, ISomatotype } from "../../App";
import axios from "axios";
import { useCookies } from "react-cookie";
import { AddPoint, IPoints } from "../../datas/Calculation";
import { getSomatotypeType } from "../testPage/TestPage";
import { useNavigate } from "react-router-dom";
import { getSpecificColors } from "../../datas/Colors";

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
  setIdRow?: (id: number) => void;
  idRow?: number;
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
  setTypeResult?: (result: string) => void;
  colorIndex?: number;
  setAvatar?: (avatar: IParamsAvatar) => void;
  getAvatar?: () => void;
}

const ResultsTable: FC<resultProps> = (props: any) => {
  const [rows, setRows] = useState<any[]>([]);

  const [cookies, setCookie] = useCookies(["user"]);

  const [shownSomatotypeArray, setShownSomatotypeArray] = useState<
    ISomatotype[]
  >([]);

  const [updating, setUpdating] = useState<boolean>(false);

  const [page, setPage] = useState(0);
  const rowsPerPage: number = 5;

  const navigate = useNavigate();

  const xxs = useMediaQuery("(max-width:400px)");
  const xSmall = useMediaQuery("(max-width:550px)");
  const small = useMediaQuery("(max-width:650px)");
  const minSmall = useMediaQuery("(min-width:900px)");
  const medium = useMediaQuery("(max-width:1000px)");

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

      if (props.idRow === 0) {
        props.getAvatar();
      }

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
        props.setTypeResult(
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
      props.setTypeResult(
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
        somatotypeToShow.ectomorphy!,
        getSpecificColors(props.colorIndex).darkColor!
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

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: xxs ? "90%" : xSmall ? "80%" : medium ? "50%" : "35%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "25px",
  };

  let endoColumnTitle = small || minSmall ? "Endo" : "Endomorphy";
  let mesoColumnTitle = small || minSmall ? "Meso" : "Mesomorphy";
  let ectoColumnTitle = small || minSmall ? "Ecto" : "Ectomorphy";

  let cellStyle = small || minSmall ? { padding: "6px 6px" } : null;

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
              sx={{
                backgroundColor: row.IsDisplayed
                  ? getSpecificColors(props.colorIndex).clearColor
                  : "white",
              }}
            >
              <TableCell align="center" sx={cellStyle}>
                <Checkbox
                  onChange={(e) => {
                    handleCheckBoxChange(e, row);
                  }}
                  aria-label="Somatotype selection checkbox"
                  checked={row.IsDisplayed}
                  icon={
                    <VisibilityOffIcon
                      sx={{
                        color: getSpecificColors(props.colorIndex).lightColor,
                      }}
                    />
                  }
                  checkedIcon={
                    <VisibilityIcon
                      sx={{
                        color: getSpecificColors(props.colorIndex).lightColor,
                      }}
                    />
                  }
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0)",
                    },
                  }}
                />
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {row.Date}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {Math.abs(row.Endomorphy).toFixed(1)}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {Math.abs(row.Mesomorphy).toFixed(1)}
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
                {Math.abs(row.Ectomorphy).toFixed(1)}
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
                        color: getSpecificColors(props.colorIndex).lightColor,
                        padding: "0",
                        "&:hover": {
                          color: getSpecificColors(props.colorIndex).lightColor,
                          backgroundColor: "rgba(0,0,0,0)",
                        },
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
                        color: getSpecificColors(props.colorIndex).lightColor,
                        padding: "0",
                        "&:hover": {
                          color: getSpecificColors(props.colorIndex).lightColor,
                          backgroundColor: "rgba(0,0,0,0)",
                        },
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
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table aria-label="results table" size="small">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={12}
                sx={{
                  backgroundColor: getSpecificColors(props.colorIndex)
                    .darkColor,
                  color: "white",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                }}
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
            <Typography
              id="modal-modal-description"
              fontSize={"150%"}
              textAlign={"center"}
            >
              Do you want to
              <Typography
                fontWeight={"bold"}
                fontSize={"100%"}
                component={"span"}
              >
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
                  sx={{
                    borderColor: "#000000",
                    color: "#000000",
                    padding: "14px 30px",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    borderRadius: "40px",
                    textTransform: "initial",
                    width: "100%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                      color: "#ffffff",
                      borderColor: "#000000",
                    },
                  }}
                  variant="outlined"
                  onClick={handleEditModalClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    width: "100%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                    },
                    display: "flex",
                    "&:hover": { bgcolor: "#000000" },
                  }}
                  variant="contained"
                  onClick={() => {
                    props.setIsAdding(false);
                    navigate("/Test");
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
            <Typography
              id="modal-modal-description"
              fontSize={"150%"}
              textAlign={"center"}
            >
              Do you want to
              <Typography
                fontWeight={"bold"}
                fontSize={"100%"}
                component={"span"}
              >
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
                  sx={{
                    borderColor: "#000000",
                    color: "#000000",
                    padding: "14px 30px",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    borderRadius: "40px",
                    textTransform: "initial",
                    width: "100%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                      color: "#ffffff",
                      borderColor: "#000000",
                    },
                  }}
                  variant="outlined"
                  onClick={handleDeleteModalClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    width: "100%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                    },
                    display: "flex",
                    "&:hover": { bgcolor: "#000000" },
                  }}
                  variant="contained"
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
    </>
  );
};

export default ResultsTable;
