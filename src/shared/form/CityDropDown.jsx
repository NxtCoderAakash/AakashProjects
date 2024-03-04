import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import classname from 'classnames'

const CityDropDown = ({ value, className, onCityChange,manualCityList=[] }) => {

  const cities = useSelector(state => state.cities.cityList)

  const getCities = () => {
    let cityListTaken=[]
    if(manualCityList.length){
      cityListTaken=manualCityList
    }
    else{
      cityListTaken=cities
    }
    if (cityListTaken.length) {
      return cityListTaken.map(city => {
        return {
          value: city.cityId,
          label: city.cityName
        }
      })
    }
    return []
  }

  return (
    <div className={classname("city-dropdown-container", className)}>
      <Select
        options={getCities()}
        classNamePrefix="city-dropdown"
        placeholder="Select City"
        onChange={onCityChange}
        value={value}
        
      />
    </div>
  )
}

export default CityDropDown