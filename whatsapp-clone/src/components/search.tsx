import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { UserListSearchStyles } from "@styles/components.styles";

interface ISearch {
  label: string;
}

export default function Search({ label }: ISearch) {
  return (
    <FormControl sx={UserListSearchStyles} variant="standard">
      <TextField
        id="search"
        // label={label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{ ".MuiInputBase-root": { height: "35px" } }}
      />
    </FormControl>
  );
}
