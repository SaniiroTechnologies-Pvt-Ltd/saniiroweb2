import React, { useState, forwardRef } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const renderQtyRateTable = (values) => (
  <table
    style={{
      width: "100%",
      border: "1px solid #e0e0e0",
      borderRadius: "5px",
      overflow: "hidden",
    }}
  >
    <thead>
      <tr style={{ backgroundColor: "#DFFFD6" }}>
        <th>Qty</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      {values.map((value, index) => (
        <tr key={index}>
          <td>{value.Qty}</td>
          <td>₹{value.Rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const FeatureTable = forwardRef((props, ref) => {
  const features = props.features || [];
  const [openStates, setOpenStates] = useState(
    features.map((_, index) => index === 0) // Set the first row to open
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div ref={ref}>
      <Stack
        display={{ xs: "none", lg: "block" }}
        sx={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <Table
          sx={{ width: "90%", margin: "0 auto", borderCollapse: "collapse", borderRadius: 16 }}
          size="small"
          aria-label="a pricing comparison table"
        >
          <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
            <TableRow>
              <TableCell
                sx={{
                  padding: 1.25,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: "bold",
                  border: `1px solid ${theme.palette.primary.contrastText}`,
                  width: { lg: 300 },
                }}
              >
                Features
              </TableCell>
              {features[0]?.Data[0]?.CompareCheckbox.map((pkg, i) => (
                <TableCell key={i} align="center">
                  {pkg.Name.trim()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                <TableRow
                  sx={{ border: 0, cursor: "pointer" }}
                  onClick={() => handleOpen(i)}
                >
                  <TableCell
                    sx={{
                      padding: "10px",
                      fontWeight: "bold",
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                    }}
                    colSpan={features[0]?.Data[0]?.CompareCheckbox.length + 1}
                  >
                    <Stack direction="row" alignItems="center">
                      <ArrowDropDownIcon
                        className="navlinkli-link-downarrow"
                        sx={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: "common.white",
                          transform: openStates[i] ? "rotate(180deg)" : "rotate(0)",
                        }}
                      />
                      <Typography fontSize={"0.875rem"} fontWeight={"bold"}>
                        {feature.heading} {feature.Data.length}
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
                {feature.Data.map((item, j) => (
                  <TableRow
                    key={j}
                    sx={{
                      display: openStates[i] ? "table-row" : "none",
                    }}
                  >
                    <TableCell
                      sx={{
                        paddingLeft: "50px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        fontWeight: "bold",
                        backgroundColor: "#005cbf24",
                      }}
                    >
                      {item.field1 || feature.heading}
                    </TableCell>
                    {item.CompareCheckbox.map((available, k) => (
                      <TableCell key={k} align="center">
                        {available.Value === "true" ? (
                          <Typography color={"#05d105"}>✓</Typography>
                        ) : available.Value === "false" ? (
                          <Typography color={"#ff0000"}>✘</Typography>
                        ) : Array.isArray(available.Value) ? (
                          renderQtyRateTable(available.Value)
                        ) : (
                          available.Value
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Stack>

      {/* Mobile View */}
      <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
        sx={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <Table
          sx={{
            width: "90%",
            margin: "0 auto",
            borderCollapse: "collapse",
          }}
          size="small"
          aria-label="a pricing compare table"
        >
          <TableBody>
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                <TableRow
                  sx={{ border: 0, cursor: "pointer" }}
                  onClick={() => handleOpen(i)}
                >
                  <TableCell
                    sx={{ padding: "10px", fontWeight: "bold" }}
                    colSpan={feature.Data[0].CompareCheckbox.length + 1}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      width={"90vw"}
                      justifyContent={"space-between"}
                      border={"1px solid lightgray"}
                      p={"8px 5px"}
                    >
                      <Typography fontWeight={"bold"}>
                        {feature.heading}
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlinkli-link-downarrow"
                        sx={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: openStates[i] ? "#818181" : "#818181",
                          transform: openStates[i]
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
                <div
                  style={{
                    overflowX: "auto",
                    width: "90vw",
                    margin: "0 auto",
                  }}
                >
                  <table>
                    <tbody>
                      {feature.Data.map((item, j) => (
                        <tr
                          key={j}
                          style={{
                            display: openStates[i] ? "table-row" : "none",
                          }}
                        >
                          <td
                            style={{
                              position: "sticky",
                              left: 0,
                              backgroundColor: "#fff",
                              zIndex: 1,
                              paddingLeft: "20px",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              fontWeight: "bold",
                            }}
                          >
                            <Typography p={2} fontWeight={"bold"}>
                              {item.field1}
                            </Typography>
                          </td>
                          {item.CompareCheckbox.map((available, k) => (
                            <td key={k} align="center">
                              <Typography p={1.5}>
                                {available.Value === "true" ? (
                                  <Typography color={"tertiary.main"}>✓</Typography>
                                ) : available.Value === "false" ? (
                                  <Typography color={"#ff0000"}>✘</Typography>
                                ) : Array.isArray(available.Value) ? (
                                  available.Value.map((val, index) => (
                                    <div key={index}>
                                      Qty: {val.Qty}, Rate: {val.Rate}
                                    </div>
                                  ))
                                ) : (
                                  available.Value
                                )}
                              </Typography>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </div>
  );
});

export default FeatureTable;
