import React,{useEffect, useRef, useState} from "react";
import "./styles.scss"
import DropDown from "../../../shared/form/DropDown";
import CityDropDown from "../../../shared/form/CityDropDown";
import SearchField from "../../../shared/form/Search";
import PincodeTable from "./PincodeComponent/Pincodecomponent.jsx";
import { getCitiesPincodeMasterDataAction } from "../../../redux/actions/pincodeMaster.getCities.Action.js";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { getPincodeMasterDataAction } from "../../../redux/actions/pincodeMasterAction.js";
// import { getUpdateHistoryPincodeMasterDataAction } from "../../redux/actions/pincodeMaster.getUpdateHistory.Action.js";

import { SearchIcon, TimeHistoryBlueIcon } from "../../../core/utility/iconHelper.js";
// import { setNotification } from "../../redux/actions/notificationAction.js";
// import { getUserID } from "../../core/services/rbacServices.js";
import ViewPinHistoryDrawer from "./PincodeComponent/ViewPinHistoryDrawer/index.js"
const statusValues=[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]

const getUserID=()=>("12345")




const PincodeMapping=()=>{

    const [showSideBar,setShowSideBar]=useState(false)
    const [cityFilter,setCityFilter]=useState("")
    const [statusFilter,setStatusFilter]=useState("")
    const [searchPincode,setSearchPincode]=useState("")
    const pincodeList = useSelector((state) => state.pincodeList.pincodeList);
    const pincodeCityList=useSelector((state)=>state.pincodeActiveCities.pincodeCityList)
    const [localPincodeList, setLocalPincodeList] = useState(pincodeList);
    const gridRef = React.createRef();
    const [openPinChangeHistory,setOpenPinChangeHistory]=useState(false)
    const dispatch=useDispatch()


    useEffect(() => {

       dispatch(getCitiesPincodeMasterDataAction())
   }, [])

   useEffect(() => {
    dispatch( getPincodeMasterDataAction({
         "userId":getUserID(),
     }
     ))
 }, [])

    useEffect(()=>{
      setLocalPincodeList(pincodeList)
  },[pincodeList])

    const handleSideDialog=()=>{
      setShowSideBar(!showSideBar)
  }

  const onClickApplyFilters=()=>{
    dispatch( getPincodeMasterDataAction({
      userId:getUserID(),
      cityId:cityFilter.value,
      status:statusFilter.value,
      pincode:searchPincode
  }
  ))
  }

  const onClickClearFilters=()=>{
      setCityFilter("")
      setSearchPincode("")
      setStatusFilter("")
      dispatch( getPincodeMasterDataAction({
        userId:getUserID()
    }
    ))

    const api = gridRef.current.api;
    const columnApi = gridRef.current.columnApi;
    
    // Iterate over all columns and clear filters
    columnApi.getAllColumns().forEach((column) => {
      api.setFilterModel(null, column);
    });

    // Refresh the grid to apply the changes
    api.refreshCells();
  }
 
  const cityChangeHandler=(value)=>{
    setCityFilter(value)
  }

  const onChangeStatusFilter=(value)=>{
    setStatusFilter(value)
  }
  const setSearchText = (value) => {
    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setSearchPincode(value.slice(0, 6))
    }
  };
  const renderSearchField = () => {
    return (
      <SearchField
        value={searchPincode}
        onSearch={setSearchText}
        onEnter={onClickApplyFilters}
        onClick={onClickApplyFilters}
        onClearInput={()=>setSearchPincode("")}
        placeholder="Search Pincode"
        icon={SearchIcon}
        // className={styles.widerSearch}
        className="dropdown-wraper"
        style={{border: "none"}}
      />
    );
  };

  const handleClickTimeHistory=()=>{
    setOpenPinChangeHistory(true)
  }
  
    return(
        <div className="bg-container-pinMap">
        <div className="bg-time-history">
              <h3>Pincode Mapping</h3>
              <button onClick={handleClickTimeHistory}><img src={TimeHistoryBlueIcon}/>View Change History</button>
        </div>
        
        <div className="flex justify-content-between w-full container-fluid mt-3 filter-container-main" style={{padding:"0px"}}>
            <div className="flex">
            <CityDropDown
                placeholder="Select City"
                onCityChange={cityChangeHandler}
                value={cityFilter}
                className="dropdown-wraper ml-0"
                manualCityList={pincodeCityList}
            />
            <DropDown
            placeholder="Select Status"
            onChange={onChangeStatusFilter}
            options={statusValues}
            value={statusFilter}
            className="dropdown-wraper"
            />
           
           { renderSearchField()}
            <Button color="success" type="button" className="rounded no-margin ml-5" onClick={onClickApplyFilters}>Apply</Button>
            <Button className="rounded no-margin" type="button" onClick={onClickClearFilters}>Clear</Button>
           </div>
           
           <button onClick={handleSideDialog} className="add-pincode-button dropdown-wraper">
                Add Pincode
           </button>

        </div>
        <div className="bg-container-pincode">
          <PincodeTable
            showSideBar={showSideBar}
            handleSideDialog={handleSideDialog}
            localPincodeList={localPincodeList}
            pincodeList={pincodeList}
            setLocalPincodeList={setLocalPincodeList}
            gridRef={gridRef}
            
          />
        </div>
        {
          openPinChangeHistory && 
          <ViewPinHistoryDrawer
            open={openPinChangeHistory}
            onClose={() => setOpenPinChangeHistory(false)}
          />
        }
        </div>
    )
}


export default PincodeMapping