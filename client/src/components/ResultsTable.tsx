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
  ClickAwayListener,
  Grid,
  IconButton,
  Modal,
  Popper,
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
  Id: string
) {
  return { Endomorphy, Mesomorphy, Ectomorphy, Date, Id };
}

interface resultProps {
  somatotypes?: ISomatotype[];
  showHistory?: boolean;
  getUserDatas?: () => void;
  setOpenAddModal?: (openModal: boolean) => void;
  setIsAdding?: (openModal: boolean) => void;
  setIdRow?: (id: string) => void;
  idRow?: string;
}

const ResultsTable: FC<resultProps> = (props: any) => {
  const { height, width } = useWindowDimensions();

  const [rows, setRows] = useState<any[]>([]);

  const [cookies, setCookie] = useCookies(["user"]);

  const deleteSomatotype = async (id: string) => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_DELETESOMATOTYPE_URL}/${id}`!,
        { headers: headers }
      );
      //TO DO Set snackbar message to say deleted sucessfully
      props.getUserDatas();
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
    }
  };

  useEffect(() => {
    setRows([]);
    props.somatotypes.forEach((somatotype: ISomatotype) => {
      setRows((rows) => [
        ...rows,
        createRow(
          String(somatotype.endomorphy),
          String(somatotype.mesomorphy),
          String(somatotype.ectomorphy),
          String(somatotype.createdAt),
          String(somatotype._id)
        ),
      ]);
    });
  }, [props.somatotypes]);

  const handleEditResultsClick = () => {
    handleEditModalOpen();
  };

  const handleDeleteResultsClick = () => {
    handleDeleteModalOpen();
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const row = event.target.parentElement?.parentElement?.parentElement;

    if (event.target.checked) {
      row!.style.backgroundColor = "lightgrey";
    } else {
      row!.style.backgroundColor = "white";
    }
  };

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);

  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleDeleteModalOpen = () => setOpenDeleteModal(true);
  const handleDeleteModalClose = () => setOpenDeleteModal(false);

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

  let endoColumnTitle = width >= 600 ? "Endomorphy" : "Endo";
  let mesoColumnTitle = width >= 600 ? "Mesomorphy" : "Meso";
  let ectoColumnTitle = width >= 600 ? "Ectomorphy" : "Ecto";

  let cellStyle = width >= 600 ? null : { padding: "6px 6px" };

  let tableHeadContent = null;
  let tableBodyContent = null;

  if (props.showHistory) {
    tableHeadContent = (
      <TableRow hover={true}>
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

    tableBodyContent = rows.map((row,index) => (
      <TableRow hover={true} key={index}>
        <TableCell align="center" sx={cellStyle}>
          <Checkbox
            onChange={handleCheckBoxChange}
            aria-label="Somatotype selection checkbox"
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
  } else {
    tableHeadContent = (
      <TableRow hover={true}>
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
      <TableRow hover={true} key={index}>
        <TableCell align="center" sx={cellStyle}>
          {row.Endomorphy}
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          {row.Mesomorphy}
        </TableCell>
        <TableCell align="center" sx={cellStyle}>
          {row.Ectomorphy}
        </TableCell>
      </TableRow>
    ));
  }

  return (
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
          {tableHeadContent}
        </TableHead>
        <TableBody>{tableBodyContent}</TableBody>
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
                  props.setOpenAddModal(true);
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
                  deleteSomatotype(props.idRow);
                  handleDeleteModalClose();
                }}
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default ResultsTable;
