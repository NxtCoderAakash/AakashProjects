import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { RedCross, TickGreen } from '../../../../core/utility/iconHelper';
import CityDropDown from '../../../../shared/form/CityDropDown';
import AsyncSelect from 'react-select/async';
const useStyles = makeStyles({
  list: {
    width: 370,
    '& .MuiDrawer-paperAnchorRight':{
        minWidth: 370
    },
  },
  fullList: {
    width: 370,
  },
});

// getPincodeMasterData
// postPincodeMasterData
// updatePincodeMasterData
// getOtpPincodeMasterData
// resendOtpPincodeMasterData
// getCitiesPincodeMasterData
// getUpdateHistoryPincodeMasterData

export default function PincodeAlterationDialog({open,handleSideDialog,onSubmitNewPincode,pincodeCityList,onSubmitChangedPincode,onClose=()=>handleSideDialog()}) {
    const [newPincodeData,setNewPincodeData]=useState({weekDays:"",status:"ACTIVE",city:""})
  const classes = useStyles();

  const handleDataChange=(event)=>{
    const {name,value}=event.target
    if(name==="status"){
        setNewPincodeData({...newPincodeData,[name]:(newPincodeData[name]==="ACTIVE"?"INACTIVE":"ACTIVE")})
    }
    else if(name==="pincode"){
        const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
            setNewPincodeData({...newPincodeData,[name]:value.slice(0, 6)})
        }
       
    }
  }

  const cityChangeHandler=(value)=>{
    setNewPincodeData({...newPincodeData,cityId:value.value,city:value})
  }

  const handleAreaChange=(e)=>{
    const {value}=e.target

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
        setNewPincodeData({...newPincodeData,areaName:value})
    }

  }
  const getCorrespondingDayValue=(value)=>{
    switch (value) {
        case "Mon":
            return "MONDAY"
        case "Tue":
            return "TUESDAY"
        case "Wed":
            return "WEDNESDAY"
        case "Thurs":
            return "THURSDAY"
        case "Fri":
            return "FRIDAY"
        case "Sat":
            return "SATURDAY"
        case "Sun":
            return "SUNDAY"
        default:
            return "NA"
    }
}

const onHandleWeekdays=(dayShort)=>{
    const dayValue=getCorrespondingDayValue(dayShort)
    const {weekDays}=newPincodeData
    if(weekDays.includes(dayValue)){
        const withoutDay=weekDays.split(",").filter((item)=>(item!==dayValue)).filter(items=>Boolean(items)).join(",")
        return setNewPincodeData({...newPincodeData,weekDays:withoutDay})
    }
    else{
        const addDay=weekDays.split(",")
        const NewWeekdays=[...addDay,dayValue].filter(items=>Boolean(items)).join(",")
        return setNewPincodeData({...newPincodeData,weekDays:NewWeekdays})
    }
}

const handleUpdateValues=()=>{
    handleSideDialog()
    onSubmitChangedPincode("new",newPincodeData)
}

  return (
    <Drawer anchor={"right"} open={open} onClose={onClose} className={classes.list} >
           <div className="bg-drawer-content" >
                
                <h3 className='add-pincode-heading'>Add Pincode</h3>
                <div className='bg-container-card'>
                    <div>
                        <h4>City Name</h4>
                        <CityDropDown
                            placeholder="Select City"
                            onCityChange={cityChangeHandler}
                            value={newPincodeData.city}
                            manualCityList={pincodeCityList}
                            className="ml-0 city-drop"
                            
                        />
                    </div>
                    <div>
                        <h4>Pincode</h4>
                        <input name="pincode"  onChange={handleDataChange} value={newPincodeData.pincode}/>
                    </div>
                    <div>
                        <h4>Area Name</h4>
                        <input name="areaName" onChange={handleAreaChange} value={newPincodeData.areaName}/>
                    </div>
                    <div className='bg-container-status'>
                        <h4>Status</h4>
                        <button name="status" onClick={handleDataChange} className={`status ${newPincodeData.status?"":"inactive"}`}>{newPincodeData.status?"Active":"Inactive"}</button>
                    </div>
                    <div className='weekday-availability-section'>
                        <h4>Week days Availability</h4>
                        <div className='weekday-bg-container'>
                            {["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"].map((item,i)=>(
                            <div className='weekday-card'>
                                <p style={{color:"black",fontSize:"12px"}}>{item}</p>
                                <img onClick={()=>onHandleWeekdays(item)} src={newPincodeData.weekDays.includes(getCorrespondingDayValue(item))?TickGreen:RedCross} className='tick-image'/>
                            </div>))}
                        </div>
                        
                    </div>
                    <div className='button-container'>
                        <button className='button update' onClick={handleUpdateValues}>Update Values</button>
                        <button className='button cancel' onClick={onClose}>Cancel</button>
                    </div>
                </div>
           </div>
    </Drawer>
  );
}

