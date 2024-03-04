import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { getAmount, getDate, renderString, getDatePayload } from '../../../core/utility';
import { reduxForm } from 'redux-form';
import { connect, useDispatch, useSelector } from 'react-redux'
import './walletDb.scss'
import {ExportToExcel, RedCross, TickGreen } from '../../../../core/utility/iconHelper'
import "./pincodestyles.scss"
import PincodeAlterationDialog from './PincodeAlterationDialog.component';
import { postPincodeMasterData } from '../../../../core/services/logisticsServices';
// import { getUserID } from '../../../core/services/rbacServices';
import OtpVerification from './OtpVerification';
import { setNotification } from '../../../../redux/actions/notificationAction';

const getUserID=()=>("12345")
const PincodeTable = ({ closeLegderModal,showSideBar,handleSideDialog,localPincodeList,setLocalPincodeList,pincodeList,gridRef,list=[]}) => {

    const pincodeCityList=useSelector((state)=>state.pincodeActiveCities.pincodeCityList)
    
    const [changedPincodes,setChangedPincodes]=useState([])
    const [openOtpDialog,setOpenOtpDialog]=useState(false)
    const [pincodeChangeType,setPincodeChangeType]=useState({})
    const dispatch=useDispatch()

    useEffect(()=>{
        setChangedPincodes(getUpdatedPincodes)
    },[localPincodeList])
    
    useEffect(() => {
        if (gridRef.current && gridRef.current.api) {
            gridRef.current.api.setRowData( localPincodeList );
            
        }
        
      }, [localPincodeList]);


      

    const propData = {}

    // propData.personalAccountNumber = useSelector((state) => state.shdTransaction.personalAccountNumber);
    // propData.personalIfscCode = useSelector((state) => state.shdTransaction.personalIfscCode);
    // propData.storeId = list.storeId
    // propData.walletId = list.walletId



    const getRowHeight = params => params.node.group ? 50 : 50;

    const setHeaderHeight = params => params.node.group ? 50 : 60;


    const renderUtrNumber = (item) => {
        return (
            <>
                {item.value.toString()}
            </>
        )
    }

    const renderCheckBox=(item)=>{
        return (
            <>
                {<input type="checkbox" checked={changedPincodes.some((individualPin)=>(individualPin.pincode===item.data.pincode))}/>}
            </>
        )
    }
    const renderComments = (item) => {
        return (
            <>
                <p className={getClassName(item.value)} > {(item.value.toString())} </p>
            </>
        )
    }
    

    const renderWeekeday = (item,weekday) => {
        const weekdayBool=item.value.includes(weekday)
        return (
            <>
                {item.data.status==="ACTIVE"?<p className={getClassName(item.value)} > {weekdayBool?<img src={TickGreen} className='tick-image'/>:<img src={RedCross} className='tick-image'/>} </p>:<></>}
            </>
        )
    }

    const renderStatus = (item) => {
        return (
            <>
                <p style={{padding: "5px 0px"}} ><button name="status" className={`status ${item.value==="ACTIVE"?"":"inactive"}`}>{item.value==="ACTIVE"?"Active":"Inactive"}</button></p>
            </>
        )
    }


    const getClassName = (value) => {
        if (value === 'SUCCESS' || value === 'PROCESSED') return 'S'
        if (value === 'PENDING' || value === 'INITIATED') return 'P'
        if (value === 'FAILED') return 'F'
        if (value === 'PROCESSING') return 'Pcg'
    }


    const exportToExcel = () => {
        gridRef.current.api.exportDataAsCsv();
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

    const handleDaySelection=(params)=>{
        const {colDef,data,rowIndex,value,api}=params
        if(data.status==="ACTIVE"){
            const dayValue=getCorrespondingDayValue(colDef.headerName)
        const newlocalPincodeList=localPincodeList.map((pincodeData)=>{
            const {weekDays,pincodeId,pincode,...rest}=pincodeData
            if(pincodeId==data.pincodeId){
                if(weekDays.includes(dayValue)){
                    const withoutDay=weekDays.split(",").filter((item)=>(item!==dayValue)).sort().join(",")
                    return {...pincodeData,weekDays:withoutDay}
                }
                else{
                    const addDay=weekDays.split(",")
                    const NewWeekdays=[...addDay,dayValue].sort().join(",")
                    return {...pincodeData,weekDays:NewWeekdays}
                }
            }
            else{
                return pincodeData
            }
        })
        setLocalPincodeList(newlocalPincodeList)
        }
        else{
            dispatch(setNotification('danger', "Warning", "Pincode Not Active. Please Activate Pincode"))
        }
        
    }

    const handleStatusChange=(params)=>{
        const {data}=params
        const newlocalPincodeList=localPincodeList.map((pincodeData)=>{
            const {status,pincodeId,...rest}=pincodeData
            if(pincodeId==data.pincodeId){
                if(status==="ACTIVE"){
                    return {...pincodeData,status:"INACTIVE"}
                }
                else{
                    return {...pincodeData,status:"ACTIVE"}
                }
            }
            else{
                return pincodeData
            }
        })
        setLocalPincodeList(newlocalPincodeList)
    }


    const onSubmitNewPincode=async (newPinData)=>{
        const insertNewPinPayload={
            userId:getUserID(),
            otp:"6723",
            otpKey:"11",
            ...newPinData
        }
        await postPincodeMasterData(insertNewPinPayload)
        // onclose()
    }

    

    const getUpdatedPincodes=useMemo(()=>{
        const arePincodesEqual = (p1, p2) => (
            (p1.weekDays !== p2.weekDays || p1.status !== p2.status) &&
            p1.pincode === p2.pincode &&
            p1.pincodeId === p2.pincodeId
            );
            const changedPincodes = localPincodeList.filter(newPincode =>
            pincodeList.some(oldPincode => arePincodesEqual(newPincode, oldPincode))
            );
            return changedPincodes
    },[localPincodeList])

  

    const onSubmitChangedPincode=(type,newData)=>{
        setOpenOtpDialog(true)
        setPincodeChangeType({type,newData})
    }

    const rowClassRules = {
        'changed-row': params => (getUpdatedPincodes.some((individualPin)=>(individualPin.pincode===params.data.pincode))),
      };

      const getRowId = useMemo(() => {
        return (params) => {
          return params.data.pincodeId;
        };
      }, []);

      const onClickCancelSelection=()=>{
        setLocalPincodeList(pincodeList)
        setChangedPincodes([])
    }

    return (
        <>
            <div className='create-bulk-wrap' style={{ overflowX: 'hidden' }}>
                <div className='pending-inventory-filter-container viewLeader_filter' style={{}}>
                    <div className="exportToExcleLedger" onClick={exportToExcel} style={{}}>
                        <img
                            className="exportLedger"
                            src={ExportToExcel}
                            alt="X"
                            style={{ height: '13px', position: 'absolute', marginLeft: '-11px' }}
                        />
                        <span style={{ fontSize: '15px', marginLeft: '20px' }}> Export to excel </span>
                    </div>
                </div>
                <>
                    <div className='ww'>
                        <div className="ag-theme-alpine" style={{ height: 850, width: '100%' }}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <div
                                    id="myGrid"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        // position:"relative",
                                        bottom:"0px",
                                        border: '1px solid #dddddd'
                                    }}
                                    className="ag-theme-alpine"
                                >
                                    {console.log(localPincodeList,"localpincodeList")}
                                   
                                    <AgGridReact
                                        ref={gridRef}
                                        reactUi="true"
                                        defaultColDef={{
                                            width:"120px",
                                            sortable: true,
                                            resizable: true,
                                            editable: true,
                                            filter: true,
                                            headerClass: "gridHeader",
                                        }}
                                        getRowHeight={getRowHeight}
                                        rowData={localPincodeList}
                                        setHeaderHeight={setHeaderHeight}
                                        rowSelection={'multiple'}
                                        // pagination={true}
                                        // paginationPageSize={10}
                                        getRowId={getRowId}
                                        editable={true}
                                        enableCellTextSelection={true}
                                        rowClassRules={rowClassRules}
                                        enableCellChangeFlash={true}
                                        
                                    >

                                        <AgGridColumn headerName="">
                                        <AgGridColumn field="pincodeId" wrapText={true} autoHeight={false} editable={false} headerName='' cellRenderer={renderCheckBox} flex={0.5} minWidth={60}/>
                                        <AgGridColumn field="pincode" wrapText={true} autoHeight={false} editable={false} headerName='Pincode' cellRenderer={renderUtrNumber} flex={1.5} onCellClicked={handleSideDialog} minWidth={100}/>
                                        <AgGridColumn field="areaName" wrapText={true} autoHeight={false} editable={false} headerName='Area Name' cellRenderer={renderComments} flex={2} minWidth={100}/>
                                        <AgGridColumn field="cityName" wrapText={true} autoHeight={false} editable={false} headerName='City Name' cellRenderer={renderComments} flex={1.5} minWidth={100}/>
                                        <AgGridColumn field="status" wrapText={true} autoHeight={false} editable={false} headerName='Status' cellRenderer={renderStatus} onCellClicked={handleStatusChange} flex={2} minWidth={140}/>
                                        </AgGridColumn>
                                        <AgGridColumn headerName="Weekday Availability">
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Mon' cellRenderer={(val)=>renderWeekeday(val,"MONDAY")} flex={1}  minWidth={30}/>
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Tue' cellRenderer={(val)=>renderWeekeday(val,"TUESDAY")} flex={1} minWidth={30}/>
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Wed' cellRenderer={(val)=>renderWeekeday(val,"WEDNESDAY")} flex={1} minWidth={30}/>
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Thurs' cellRenderer={(val)=>renderWeekeday(val,"THURSDAY")} flex={1} minWidth={30}/>
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Fri' cellRenderer={(val)=>renderWeekeday(val,"FRIDAY")} flex={1} minWidth={30}/>
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Sat' cellRenderer={(val)=>renderWeekeday(val,"SATURDAY")} flex={1} minWidth={30}/>
                                            <AgGridColumn field="weekDays" wrapText={true} autoHeight={false} editable={false} onCellClicked={handleDaySelection} headerName='Sun' cellRenderer={(val)=>renderWeekeday(val,"SUNDAY")} flex={1} minWidth={30}/>
                                            
                                        </AgGridColumn>
                                    </AgGridReact>
                                    
                                </div>
                                
                            </div>
                           
                        </div>
                    </div>
                </>

            </div>
            <div className='bottomStatus'>
                <button className='button cancel' onClick={onClickCancelSelection}>Cancel </button>
                <button disabled={!Boolean(changedPincodes.length)} className={`button update ${!Boolean(changedPincodes.length)?"disabled-b":""}`}  onClick={()=>onSubmitChangedPincode("old")}>Update Selected value ({changedPincodes.length})</button>
            </div>
            {
                showSideBar && 
                <PincodeAlterationDialog
                    open={showSideBar}
                    onClick={handleSideDialog}
                    handleSideDialog={handleSideDialog}
                    onSubmitNewPincode={onSubmitNewPincode}
                    pincodeCityList={pincodeCityList}
                    onSubmitChangedPincode={onSubmitChangedPincode}
                    
                />
            }
            
            {
                openOtpDialog &&
                <OtpVerification
                    open={openOtpDialog}
                    onClose={()=>setOpenOtpDialog(false)}
                    updatedPincode={changedPincodes}
                    pincodeChangeType={pincodeChangeType}
                />
            }
        </>
    );
};

const ReduxForm = reduxForm({
    form: 'bulk-sale-form',
})(PincodeTable)

export default connect()(ReduxForm)

