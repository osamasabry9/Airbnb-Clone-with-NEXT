"use client";
import { SearchResultData, SearchResultItem } from "@/types/app";
import React, { useState } from "react";
import MapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import * as MarkerImg from "../../../../public/mapMarker.png";

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<SearchResultItem | null>(null);
  const coordinates = searchResultData.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates) as {
    latitude: number;
    longitude: number;
  };

  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });
  return (
    <MapGl
      {...viewport}
      mapStyle={"mapbox://styles/ossamasoliman99/cm2z7bdap00de01qw8efe2yl3"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      onMove={(nextViewport) =>
        setViewport((prev) => {
          return {
            ...prev,
            longitude: nextViewport.viewState.longitude,
            latitude: nextViewport.viewState.latitude,
          };
        })
      }
    >
      {searchResultData.map((listing) => (
        <div key={listing.long}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <div
              onClick={() => setSelectedLocation(listing)}
              className="animate-bounce"
            >
              <Image src={MarkerImg} alt="map-marker" width={24} height={24} />
            </div>
          </Marker>
          {selectedLocation?.long === listing.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={listing.long}
              latitude={listing.lat}
            >
              {listing.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGl>
  );
};

export default Map;
