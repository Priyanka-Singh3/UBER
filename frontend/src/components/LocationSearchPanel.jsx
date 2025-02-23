import React from "react";

const LocationSearchPanel = (props) => {
    // sample location array
    const locations = [
        "RajNagar Part-1 WZ - 424 , Palam Colony",
        "Africa Avenue , Chanakyapuri",
        "SadhNagar Gali-41 , Palam Colony",
        "RajNagar Part-2 Rathi Niwas , Palam Colony",
    ]
  return (
    <div>
      {/* this is just a sample data */}
      {
        locations.map(function(ele, idx){
            return (
                <div key={idx} onClick={() => {
                  props.setVehiclePanel(true)
                  props.setPanelOpen(false)
                }} className="flex gap-4 my-2 items-center justify-start border-2 border-gray-50 active:border-black p-3 rounded-xl">
                    <h2 className=" bg-[#eee] rounded-full h-8 w-8 flex justify-center items-center">
                    <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 className="font-medium">{ele}</h4>
                </div>
            )
        })
      }
    </div>

  );
};

export default LocationSearchPanel;
