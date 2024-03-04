import { Dialog, DialogContent, DialogTitle, Drawer } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { capaitalize, getDate } from "../../../../core/utility";
import SearchIcon from "@material-ui/icons/Search";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { getUserID } from "../../../../core/services/rbacServices";
// import { setNotification } from "../../../../redux/actions/notificationAction";
// import { showLoader, hideLoader } from "../../../../redux/actions/loaderAction";
// import { getBikeRtoDetails } from "../../../../core/services/documentQcServices";
import { useDispatch, useSelector } from "react-redux";
import { getUpdateHistoryPincodeMasterDataAction } from "../../../../../redux/actions/pincodeMaster.getUpdateHistory.Action";
// import SearchField from "../../../../shared/components/form/Search";
// import { SearchIcon as SearchIconOwn } from "../../../../core/utility/iconHelper";
import { DatePicker } from "rsuite";
import { Button } from "reactstrap";
import moment from "moment";
const getUserID=()=>("12345")

const useStyles = makeStyles({
  table: {
    minWidth: 400
  },
  tableHead: {
    marginBottom: "30px",

  },
});

function createData(label, value) {
  return { label, value };
}

export default function ViewPinHistoryDrawer({
  open,
  onClose,
  exceptionData,
  vehicleDetails,regNo
}) {
  const classes = useStyles();
  // const [searchText, setSearchText] = useState("");
  const [rtoList, setRtoList] = useState([]);

  const [filteredList, setFilteredList] = useState(rtoList);
  const fetchedUpdatedHistory=useSelector((store)=>store.pincodeUpdateHistory.pincodeUpdateHistory )
  const [filters,setFilters]=useState({pincode:"",eventDate:""})
  const [searchKeyword,setSearchKeyword]=useState("")
  useEffect(() => {
   
    document.body.style.paddingRight = '0px';
    return () => {
      document.body.style.paddingRight = '';
    };
    
  }, []); 

  
  function checkEmpty(value){
    return value?JSON.stringify(value).slice(1,-1):"-"
  }

  function getRows(rtoListTemp, challan,separateChallans) {
    let rows = [];
    const {
      regNo,
      chassis,
      engine,
      model,
      // vehicleColour,
      // type,
      // normsType,
      // bodyType,
      // ownerCount,
      // owner,
      // ownerFatherName,
      // mobileNumber,
      // status,
      // statusAsOn,
      // regAuthority,
      // regDate,
      // vehicleManufacturingMonthYear,
      // rcExpiryDate,
      // vehicleTaxUpto,
      // vehicleInsuranceCompanyName,
      // vehicleInsuranceUpto,
      // rcFinancer,
      // vehicleCubicCapacity,
      // grossVehicleWeight,
      // unladenWeight,
      // vehicleCategory,
      // rcStandardCap,
      // vehicleCylindersNo,
      // vehicleSeatCapacity,
      // vehicleSleeperCapacity,
      // vehicleStandingCapacity,
      // wheelbase,
      // puccNumber,
      // puccUpto,
      // blacklistStatus,
      // blacklistDetails,
      // permitIssueDate,
      // permitNumber,
      // permitType,
      // permitValidFrom,
      // permitValidUpto,
      // nonUseStatus,
      // nonUseFrom,
      // nonUseTo,
      // nationalPermitNumber,
      // nationalPermitUpto,
      // nationalPermitIssuedBy,
      // nocDetails,
      // rtoCode,
      // vehicleManufacturerName,
      // presentAddress,
      // isCommercial,
      // permanentAddress,
      vehicleInsurancePolicyNumber
    } = rtoListTemp;

    if (rtoListTemp) {
      rows = [
        createData("Registration No.", checkEmpty(regNo)),
        createData("Chassis", checkEmpty(chassis)),
        createData("Engine", checkEmpty(engine)),
        // createData("MMV", vehicleManufacturerName && model ?`${vehicleManufacturerName} ${model}`:"-"),
        // createData("Vehicle Manufacturer Name", checkEmpty(vehicleManufacturerName)),
        // createData("Model", checkEmpty(model)),
        // createData("Vehicle colour", checkEmpty(vehicleColour)),
        // createData("Type", checkEmpty(type)),
        // createData("Norms Type", checkEmpty(normsType)),
        // createData("Body Type", checkEmpty(bodyType)),
        // createData("Owner Count", checkEmpty(ownerCount)),
        // createData("Owner", checkEmpty(owner)),
        // createData("Owner Father Name", checkEmpty(ownerFatherName)),
        // createData("Mobile No", checkEmpty(mobileNumber)),
        // createData("Status", checkEmpty(status)),
        // createData("Status as on", checkEmpty(statusAsOn)),
        // createData("Registration Authority", checkEmpty(regAuthority)),
        // createData("Registration Date", checkEmpty(regDate)),
        // createData("Manufacturing Month/Year", checkEmpty(vehicleManufacturingMonthYear)),
        // createData("RC Expiry Date", checkEmpty(rcExpiryDate)),
        // createData("Vehicle Tax Upto", checkEmpty(vehicleTaxUpto)),
        // createData("Vehicle Insurance Company", checkEmpty(vehicleInsuranceCompanyName)),
        // createData("Vehicle Insurance Upto", checkEmpty(vehicleInsuranceUpto)),
        // createData("Vehicle Insurance Policy No.", checkEmpty(vehicleInsurancePolicyNumber)),
        // createData("RC Financer", checkEmpty(rcFinancer)),
        // createData("Present Address", checkEmpty(presentAddress)),
        // createData("Permanent Address", checkEmpty(permanentAddress)),
        // createData("Vehicle Cubic Capacity", checkEmpty(vehicleCubicCapacity)),
        // createData("Gross Vehicle Weight", checkEmpty(grossVehicleWeight)),
        // createData("Unladen Weight", checkEmpty(unladenWeight)),
        // createData("Vehicle category", checkEmpty(vehicleCategory)),
        // createData("RC Standard Cap", checkEmpty(rcStandardCap)),
        // createData("Vehicle Cylinders No.", checkEmpty(vehicleCylindersNo)),
        // createData("Vehicle Seat Capacity", checkEmpty(vehicleSeatCapacity)),
        // createData("Vehicle Sleeper Capacity", checkEmpty(vehicleSleeperCapacity)),
        // createData("Vehicle Standing Capacity", checkEmpty(vehicleStandingCapacity)),
        // createData("Wheel Base", checkEmpty(wheelbase)),
        // createData("PUCC Number", checkEmpty(puccNumber)),
        // createData("PUCC Upto", checkEmpty(puccUpto)),
        // createData("Blacklist Status", checkEmpty(blacklistStatus)),
        // createData("Black List Details", blacklistDetails.length?JSON.stringify(blacklistDetails):"-"),
        // createData("Permit Issue Date", checkEmpty(permitIssueDate)),
        // createData("Permit Nubmer", checkEmpty(permitNumber)),
        // createData("Permit Type", checkEmpty(permitType)),
        // createData("Permit Valid From", checkEmpty(permitValidFrom)),
        // createData("Permit Valid Upto", checkEmpty(permitValidUpto)),
        // createData("Non Use Status", checkEmpty(nonUseStatus)),
        // createData("Non Use From", checkEmpty(nonUseFrom)),
        // createData("Non Use To", checkEmpty(nonUseTo)),
        // createData("National Permit Number", checkEmpty(nationalPermitNumber)),
        // createData("National Permit Up to", checkEmpty(nationalPermitUpto)),
        // createData("National Permit Issued By", checkEmpty(nationalPermitIssuedBy)),

        // // createData("Is Commercial", isCommercial.toString()),
        // createData("Noc Details", checkEmpty(nocDetails)),
        // createData("Financed", (rcFinancer && rcFinancer!=="NA" && rcFinancer!=="None")?"Yes":"No"),
        // createData("Class", checkEmpty(rtoListTemp["class"])),
        // createData("RTO Code", checkEmpty(rtoCode)),
        // createData("Parivahan Challan details", challan && challan.challanDetails?challan.challanDetails:challan?challan:"-"),
        // createData("State Challan details", separateChallans?separateChallans:"-"),
        // createData("Commercial Vehicle", JSON.stringify(isCommercial)),
      ];
    }
    return rows;
  }


 
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      userId:getUserID(),
  };
    dispatch(getUpdateHistoryPincodeMasterDataAction(payload))

    // documentQcBikeDetailes(regNo,false);
  }, []);

  function unescapeJson(json) {
    if(!json){
      return json
    }
    return json
      .replace(/\\\\/g, "\\") // Unescape slashes
      .replace(/\\n/g, "\n") // Unescape newlines
      .replace(/\\'/g, "'") // Unescape single quotes
      .replace(/\\"/g, '"') // Unescape double quotes
      .replace(/\\&/g, "&") // Unescape ampersands
      .replace(/\\r/g, "\r") // Unescape carriage returns
      .replace(/\\t/g, "\t") // Unescape tabs
      .replace(/\\b/g, "\b") // Unescape backspaces
      .replace(/\\f/g, "\f"); // Unescape form feeds
    
  }

  const onSearchInput = (event) => {
    setSearchKeyword(event.target.value);
  };

  const onSearchList = (searchValue) => {
    const filterList = rtoList.filter((item) => {
      let tempList = [
        item.label,
        typeof item.value !== "object"
          ? item.value
          : JSON.stringify(item.value).replace(/_/g, ' '),
      ];
      return tempList.some((tempItem) =>
        (tempItem ? tempItem.toLowerCase() : "").includes(
          searchValue.toLowerCase()
        )
      );
    });
    setFilteredList(filterList); 
  };

  function Highlight({ text = "", highlight = "" }) {
    if (!highlight.trim() || typeof text !== "string") {
      return <span style={{overflowWrap:"anywhere"}}>{text}</span>;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
      <span style={{overflowWrap:"anywhere"}}> 
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} style={{ backgroundColor: "yellow" }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  }


 const  handleClickApplyFilter=(filterBool)=>{
  if(!filterBool){
    setFilters({pincode:"",eventDate:""})
  }
    const payload = {
      userId:getUserID(),
      ...(filterBool ? filters  : {})
      // ...filters
  };
  dispatch(getUpdateHistoryPincodeMasterDataAction(payload))
  }

  const onChangeDate=(value)=>{
    const formattedDate=moment(value).format('YYYY-MM-DD')
    setFilters({...filters,eventDate:formattedDate})
  }

  const onChangePincode=(event)=>{
    const {value}=event.target
    const re = /^[0-9\b]+$/;
        if (value === "" || re.test(value)) {
            setFilters({...filters,pincode:value.slice(0, 6)})
        }
  }
  

  return (
    <div>
      <Drawer
        open={open}
        className="dialog-for-rto"
        maxWidth="lg"
        fullWidth={true} 
        anchor="bottom"

      >
        <div className="dialog-title-rto">
              Pincode History
          <div>
            <div className="pin-search-input-container">
              <input placeholder="Search pincode"
              className="search-pincode-input"
              onChange={onChangePincode}
              />
              <SearchIcon style={{ color: "grey" }} />
            </div>
            <DatePicker 
            placeholder="Select Date"
            className="date-picker-input"
            onChange={onChangeDate}
            format="YYYY-MM-DD"
            cleanable
            oneTap
            />
            <Button
            color="success"
            type="button"
            className="rounded no-margin ml-3"
            onClick={()=>handleClickApplyFilter(true)}
          >
            Apply
          </Button>
          <Button className="rounded no-margin" type="button" 
          onClick={()=>handleClickApplyFilter(false)}
          >
					Clear
				</Button>
          </div>
          <div style={{ float: "right" }}>
            <div className="input-container">
              <input
                className="input-element"
                type="search"
                placeholder="Enter Keywords"
                onChange={onSearchInput}
                value={searchKeyword}
              />
              <SearchIcon style={{ color: "grey" }} />
            </div>

            <span
              className="float-right close-button"
              onClick={onClose}
              style={{ cursor: "pointer" }}
            >
              &#10005;
            </span>
          </div>
        </div>
        <div className="dialogMain">
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell align="left" style={{minWidth:"150px",width:"10%"}}>
                    Event Date
                  </TableCell>
                  <TableCell align="left" style={{width:"10%"}}>
                    Pincode
                  </TableCell>
                  <TableCell align="left" style={{width:"35%"}}>
                    New Values
                  </TableCell>
                  <TableCell align="left" style={{width:"35%"}}>
                    Old Values
                  </TableCell>
                  <TableCell align="left" style={{width:"10%"}}>
                    Updated By
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fetchedUpdatedHistory.filter((row)=>(Object.values(row).some((itemValues)=>itemValues.toString().toLowerCase().includes(searchKeyword.toLowerCase())))).map((eachRow)=>(
                    <TableRow>
                    <TableCell ><Highlight text={eachRow.eventDate} highlight={searchKeyword}/></TableCell>
                    <TableCell ><Highlight text={eachRow.eventDate} highlight={searchKeyword}/></TableCell>
                    <TableCell ><div style={{width:"520px",overflow:"wrap"}}><Highlight text={eachRow.newData} highlight={searchKeyword}/></div></TableCell>
                    <TableCell ><div style={{width:"520px",overflow:"auto"}}><Highlight text={eachRow.existingData} highlight={searchKeyword}/></div></TableCell>

                    {/* <TableCell>{eachRow.updatedBy}</TableCell>
                    <TableCell>{eachRow.updatedBy}</TableCell> */}

                    <TableCell><Highlight text={eachRow.updatedBy} highlight={searchKeyword}/></TableCell>
                  </TableRow>
                ))}
                
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Drawer>
    </div>
  );
}
