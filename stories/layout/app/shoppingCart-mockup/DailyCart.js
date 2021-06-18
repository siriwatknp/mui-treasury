import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DailySizeSelector from "./DailySizeSelector";
import DailyInteger from "./DailyInteger";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  heading: {
    fontWeight: 900,
    fontSize: "1.75rem",
    textAlign: "center",
    [breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [breakpoints.up("md")]: {
      fontSize: "2.25rem",
    },
  },
  table: {
    minWidth: 650,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  name: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    fontWeight: "bold",
    fontSize: 16,
    margin: "0 0 8px 0",
  },
  descr: {
    fontSize: 14,
    color: palette.text.secondary,
  },
}));

function createData(image, name, descr, size, quantity, totalPrice) {
  return { image, name, descr, size, quantity, totalPrice };
}

const rows = [
  createData(
    "https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg",
    "Henry T-Shirt",
    "White, Screen",
    "S",
    2,
    "$39.98"
  ),
  createData(
    "https://www.hybridoutfitters.com/wp-content/uploads/2019/11/147.jpg",
    "Stripe Tee",
    "ocean, stripe",
    "M",
    3,
    "$100"
  ),
  createData(
    "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/09/18/goods-first-img/1568766431491927776.jpg",
    "Sweater Hood",
    "Light Brown, Wool",
    "S",
    1,
    "$39.99"
  ),
  createData(
    "https://l.lnwfile.com/_resize_images/600/600/w1/nh/5z.jpg",
    "Jackboot",
    "Brown, Leather",
    10.5,
    1,
    "$69.99"
  ),
];

const DailyCart = () => {
  const styles = useStyles();
  return (
    <Box pt={{ xs: 2, sm: 4, md: 6 }}>
      <Typography className={styles.heading} variant={"h1"} gutterBottom>
        Shopping Cart.
      </Typography>
      <TableContainer>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Box display={"flex"} alignItems={"center"}>
                    <Box width={80} height={80}>
                      <img
                        className={styles.image}
                        alt={row.name}
                        src={row.image}
                      />
                    </Box>
                    <Box ml={2}>
                      <p className={styles.name}>{row.name}</p>
                      <span className={styles.descr}>{row.descr}</span>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <DailySizeSelector>{row.size}</DailySizeSelector>
                </TableCell>
                <TableCell>
                  <DailyInteger>{row.quantity}</DailyInteger>
                </TableCell>
                <TableCell>{row.totalPrice}</TableCell>
                <TableCell>
                  <IconButton>
                    <Close />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DailyCart;
