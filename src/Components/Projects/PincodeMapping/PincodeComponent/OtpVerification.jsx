import React, { Component, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import { Dialog, DialogContent, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { setNotification } from '../../../../redux/actions/notificationAction';
import { useDispatch } from 'react-redux'
import { showLoader, hideLoader } from '../../../../redux/actions/loaderAction'
import { getOtpPincodeMasterData, postPincodeMasterData, resendOtpPincodeMasterData, updatePincodeMasterData } from '../../../../core/services/logisticsServices';
// import { getMobile } from '../../../core/services/rbacServices'
import { getPincodeMasterDataAction } from '../../../../redux/actions/pincodeMasterAction';
const getUserID=()=>("12345")
const getMobile=()=>("9999999999")

const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: "grey",
        height: "50vh",
        textAlign: "center"
    },
    avatar: {
        // margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    submit: {
        margin: theme.spacing(0.5, 0, 0.5)
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));
export default function OtpVerification(props) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const theme = useTheme();
    const [otp, setOtp] = useState('')
    const [otpKey,setOtpKey]=useState("")

    const handleChange = (val) => {
        setOtp(val)
    }
 

    useEffect(()=>{
        getOtpPincodeMasterData({
            mobileNumber: getMobile()
        }
        )
        .then(apiResponse => {
            if (apiResponse.isValid) {
                setOtp("")
                setOtpKey(apiResponse.otpKey)
                dispatch(hideLoader())
                dispatch(setNotification('success', "Success", "Resent OTP"))
            }
            else
            {
                dispatch(hideLoader())
                dispatch(setNotification('danger', "Error", apiResponse.message))
            }
              
          })
    },[])

    const onSubmitPincode=()=>{
        if(props.pincodeChangeType.type==="old"){
            const payload={
                userId:"414357",
                otp:otp,
                otpKey:otpKey,
                pincodeDetails:props.updatedPincode
                
            }
            
    
            updatePincodeMasterData(payload).then((apiResponse)=>{
                if(apiResponse.isValid){
                    dispatch(hideLoader())
                    props.onClose()
                    dispatch(setNotification('success', "Success", apiResponse.message))
                    dispatch( getPincodeMasterDataAction({
                        "userId":getUserID()
                    }
                    ))

                }
                else{
                    dispatch(hideLoader())
                    props.onClose()
                    dispatch(setNotification('danger', "Error", apiResponse.message))
                }
            })
        }
        else if(props.pincodeChangeType.type==="new"){
            const payload={
                userId:"414357",
                otp:otp,
                otpKey:otpKey,
                ...props.pincodeChangeType.newData
            }
            
    
            postPincodeMasterData(payload).then((apiResponse)=>{
                if(apiResponse.isValid){
                    dispatch(hideLoader())
                    props.onClose()
                    dispatch(setNotification('success', "Success", apiResponse.message))
                    dispatch( getPincodeMasterDataAction({
                        "userId":getUserID()
                    }
                    ))
                }
                else{
                    dispatch(hideLoader())
                    props.onClose()
                    dispatch(setNotification('danger', "Error", apiResponse.message))
                }
            })
        }
        props.onClose()
    }
    const resendOtp=()=>{
        dispatch(showLoader())
        resendOtpPincodeMasterData({
            mobileNumber: getMobile(),
            otpKey:otpKey
        }
        )
        .then(apiResponse => {
            if (apiResponse.isValid) {
                setOtp("")
                setOtpKey(apiResponse.otpKey)
                dispatch(hideLoader())
              dispatch(setNotification('success', "Success", "Resent OTP"))
            }
            else
            {
                dispatch(hideLoader())
                dispatch(setNotification('danger', "Error", apiResponse.message))
            }
              
          })
    }
    return (
        <Dialog open={props.open} fullWidth maxWidth="xs" onClose={props.onClose}>
            <DialogContent>
                <Grid item container justify="center">
                    <Grid item container alignItems="center" direction="column">
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography component="h1" style={{margin:"15px"}} variant="h5">
                                Enter Verification Code
                            </Typography>
                            
                        </Grid>
                        <Grid item>
                            <Typography component="h6" style={{margin:"15px",fontSize:"14px"}} variant="h6">
                                OTP sent
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item spacing={3} justify="center">
                        <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={4}
                            separator={<span>-</span>}
                            inputStyle={{
                                width: "2rem",
                                height: "2rem",
                                margin: "0 0.5rem",
                                fontSize: "1rem",
                                borderRadius: 4,
                                border: "1px solid rgba(0,0,0,0.3)"
                            }}
                            isInputNum={true}
                        />
                        <p style={{color:"red",textAlign:"center",cursor: "pointer",margin:"15px"}} onClick={resendOtp}> Resend OTP</p>
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onSubmitPincode}
                        >
                            Verify
                        </Button>
                    </Grid>
                </Grid>

            </DialogContent>

        </Dialog>

    );

}
