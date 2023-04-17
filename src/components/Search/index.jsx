import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../store/Students";
import { products } from "../../utils/products";
import { SearchContainer } from "./style";

export const Search = () => {
  const searchToggle = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const skills = products;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(toggleSearch());
  };

  return (
    <SearchContainer
      anchor={"top"}
      open={searchToggle}
      onClose={toggleDrawer()}
    >
      <Stack spacing={2} width={"100%"} height="80">
        <Autocomplete
          getOptionLabel={(skills) => `${skills.title}`}
          options={skills}
          isOptionEqualToValue={(option, value) =>
            option.title.toLowerCase() === value.title.toLowerCase()
          }
          noOptionsText="NO AVAILABLE OPTION"
          renderOption={(props, skills) => (
            <Box component="li" {...props} id={skills.id}>
              {skills.title}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Search Product" />
          )}
        />
      </Stack>
    </SearchContainer>
  );
};
