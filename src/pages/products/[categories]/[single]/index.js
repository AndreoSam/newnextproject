import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getSingleprod } from '../../../../../Redux/Slice/prodcustSlics';
import { useDispatch } from 'react-redux'
import styles from "@/styles/product.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Single = () => {
    let [state, setState] = useState([]);
    const dispatch = useDispatch();
    let router = useRouter();
    // console.log("Router", router.query.single);
    let id = router.query.single;
    // console.log("ID: ", id);

    useEffect(() => {
        if (id) {
            dispatch(getSingleprod(id))
                .then((res) => {
                    console.log("Dispatch data: ", res.payload)
                    setState(res.payload);
                })
                .catch((err) => {
                    console.log("Dispatch data error: ", err);
                })
        }
    }, [dispatch, id])

    return (
        <div className={`${styles.cat}`}>
            <div className={`${styles.cat_2}`}>
                <Card sx={{ maxWidth: 500, padding: "10px", boxShadow:"0px 0px 20px whitesmoke", borderRadius:"18px" }} className={`${styles.cat_2}`} >
                    <CardMedia
                        style={{ width: 300, height: 300 }}
                        image={state.image}
                        alt="no img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {state.title}
                        </Typography>
                        <Typography gutterBottom variant="subtitle" component="div">
                            Price: ${state.price}
                        </Typography>
                        <Typography gutterBottom variant="subtitle" component="div">
                            {/* Rating: {state.rating.rate}, People Purchased: {state.rating.count} */}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                            {state.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Single