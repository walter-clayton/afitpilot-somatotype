import { Button } from "@mui/material";
import React, { useState, FC } from "react";
import axios from "axios";
import ModalTakeScan from "./ModalTakeScan";

interface ITakeScan {
  setModalTakeScan?: (bool: boolean) => void;
}

const TakeScan: FC<ITakeScan> = (props) => {
  // const [fetching, setFetching] = useState<boolean>(false)
  const [openModalScan, setOpenModalScan] = useState<boolean>(false);

  const getIdScan = async () => {
    const uri: string =
      "https://api.developer.in3d.io/scans/new?config=head_body";
    const options = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN_FOR_SCAN}`,
    };
    const response = await axios.post(uri, { headers: options });
  };

  const handleClick = () => {
    // setFetching((b) => true);
    setOpenModalScan((b) => true);
  };

  return (
    <div>
      <Button
        sx={{
          borderRadius: "40px",
          display: "flex",
          margin: "20px auto 0 auto",
          backgroundColor: "RGB(51, 164, 116)",
          padding: "20px 50px",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "30px",
          "&:hover": { bgcolor: "#28835c" },
        }}
        variant="contained"
        onClick={handleClick}
      >
        Take the scan
      </Button>
      <ModalTakeScan
        openModalScan={openModalScan}
        setOpenModalScan={setOpenModalScan}
      />
    </div>
  );
};

export default TakeScan;
