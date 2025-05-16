import * as React from "react";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Box } from "@mui/material";

const CustomPagination = ({ totalCount, pageSize = 10, currentPage, onChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <React.Fragment>
      <Box
        component={'div'}
        sx={{
          mt: 4,
          boxSizing: 'border-box',
          display: "flex",
          color: "secondary.contrastText",
          justifyContent: "center",
          alignItems: "center",
          borderSpacing: 2,
          mb: 6,
        }}
      >

        <MuiPagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: "secondary.contrastText",
            },
          }}
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => onChange(value)}
          renderItem={(item) => (
            <PaginationItem
              component="a"
              sx={{
                "&.Mui-selected": {
                  textDecoration: "underline",
                  color: "secondary.main",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "secondary.contrastText",
                    color: "secondary.main",
                  },
                },
                mx: 0.5,
                borderRadius: 4,
                fontWeight: 500,
                minWidth: 32,
                height: 32,
              }}
              {...item}
            />
          )}
          // size="large"
          showFirstButton
          showLastButton
        // hidePrevButton
        // hideNextButton
        />
      </Box>
    </React.Fragment>
  );
};

export default CustomPagination;
