import React from 'react'
import Logo from './Logo'
import AirExportChart from './Charts/AirExportChart'
import AirImportChart from './Charts/AirImportChar'
import SeaImport from './Charts/SeaImport'
import SeaExport from './Charts/SeaExport'
import BarChart from './Charts/BarChart'
// import OpusCornerChart from './Charts/OpusCornerChart'
const Overview = () => {
  return (
    <div>
        <Logo />
        <div className="flex flex-wrap">
        <AirExportChart />
        <AirImportChart/>
        </div>
        <div className="flex flex-wrap">
        <SeaExport />
        <SeaImport />
        <BarChart />
        {/* <OpusCornerChart /> */}
        </div>
    </div>
  )
}

export default Overview