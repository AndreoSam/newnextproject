import { useRouter } from "next/router"
import styles from "@/styles/product.module.css";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProd } from "../../../../Redux/Slice/prodcustSlics";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Categories = () => {
  let [state, setState] = useState([]);
  const dispatch = useDispatch();
  let router = useRouter()
  // console.log("Router: ", router.query);
  let id = router.query.categories;
  // console.log("ID: ", id);

  useEffect(() => {
    if (id) {
      dispatch(getProd(id))
        .then((res) => {
          // console.log("Dispatch data: ", res.payload)
          setState(res.payload);
        })
        .catch((err) => {
          console.log("Dispatch data error: ", err);
        })
    }

  }, [dispatch, id])

  // console.log("STATE: ", state);

  return (
    <div className={`${styles.cat}`}>
      <div className={`${styles.cat_2}`}>

        <Box sx={{ flexGrow: 1 }} className={`${styles.cat_2}`}>
          <Typography variant="h1" className={`${styles.categoryheader}`}>{id}</Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {state.map((prod) => (
              <Grid item xs={2} sm={4} md={4} key={prod.id}>
                <Item className={`${styles.item_grid}`}>
                  <img src={prod.image} alt="no img" style={{ height: 125 }} />
                  <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "18px" }}>{prod.title}</Typography>
                  <Typography variant="subtitle">Price: ${prod.price}</Typography>
                  <Button variant="contained">
                    <Link href={`/products/categories/${prod.id}`}>Details</Link>
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div >
  )
}

export default Categories