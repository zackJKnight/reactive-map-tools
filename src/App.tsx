import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl= '../ne_10m_admin_0_countries_chn.geojson'  //"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

 function App() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo: any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
export default App;
