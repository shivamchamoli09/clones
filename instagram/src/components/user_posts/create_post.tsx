import { ModalWrapper } from "@hoc";
import { Box, Button, Typography } from "@mui/material";
import { MediaSelectIcon } from "@svgs";
import React from "react";

interface ICreatePost {
  onClose?: () => void;
}

const CreatePost: React.FC<ICreatePost> = (props) => {
  const { onClose } = props;
  const fileInput = React.useRef<any>({});
  return (
    <ModalWrapper
      onClose={onClose}
      modalWidth={520}
      modalStyles={{ borderRadius: "12px" }}
    >
      <Box
        height={"44px"}
        sx={{ borderBottom: "1px solid rgb(219,219,219)" }}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Create new post
        </Typography>
      </Box>

      <Box
        height={300}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MediaSelectIcon />
        <Typography variant="h5" fontWeight={"medium"} sx={{ mt: 2 }}>
          Drag photos and videos here
        </Typography>
        <input
          id="files"
          ref={fileInput}
          multiple
          type={"file"}
          style={{ visibility: "hidden" }}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {
            fileInput?.current?.click();
          }}
        >
          Select From Computer
        </Button>
      </Box>
    </ModalWrapper>
  );
};

export default CreatePost;
