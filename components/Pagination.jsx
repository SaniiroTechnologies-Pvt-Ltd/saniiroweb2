import * as React from "react";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Box } from "@mui/material";

const Pagination = ({ totalCount, pageSize = 10, currentPage, onChange }) => {
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
          // variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "secondary.main",
            },
          }}
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => onChange(value)}
          size="large"
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
                borderRadius: 2,
                fontWeight: 500,
                // minWidth: 32,
                // height: 32,
              }}
              {...item}
            />
          )}

          showFirstButton
          showLastButton
        // hidePrevButton
        // hideNextButton
        />
      </Box>
    </React.Fragment>
  );
};

export default Pagination;
