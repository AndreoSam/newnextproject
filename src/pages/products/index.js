import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../../Redux/Slice/prodcustSlics'
import { useEffect, useState } from 'react'
import styles from "@/styles/product.module.css"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(No, Category,) {
  return { No, Category, };
}

const Products = () => {
  let [state, setState] = useState([]);

  // let { loading, userData, error } = useSelector((state) => state.product);
  // console.log("UserData", userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
      .then((res) => {
        // console.log("Dispatch data: ", res.payload)
        setState(res.payload);
      })
      .catch((err) => {
        console.log("Dispatch data error: ", err);
      })
  }, [dispatch, setState])


  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.sub}`}>
        <h1>View all Products</h1>
        {/* <ul>
          {state.map((prod, index) => ( */}
        <TableContainer component={Paper} sx={{ backgroundColor: "whitesmoke" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontSize: "18px", fontWeight: "bolder" }}>Sl No.</TableCell>
                <TableCell sx={{ fontSize: "18px", fontWeight: "bolder" }} align="left">Category</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((prod, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell align="left">{prod}</TableCell>
                  <TableCell align="right">
                    <Button variant='contained'>
                      <Link href={`/products/${prod}`} className={`${styles.mainprod}`}>more</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* // <Box key={index} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            //   <li stule={{ display: "flex", flexDirection: "row" }}>
            //     <Typography sx={{ fontSize: "30px" }}>{prod}</Typography>
            //   </li>
            //   <Button variant='contained'>
            //     <Link href={`/products/${prod}`} className={`${styles.mainprod}`}>more</Link>
            //   </Button>
            // </Box>
          ))}
        </ul> */}
      </div>
    </div >
  )
}

export default Products