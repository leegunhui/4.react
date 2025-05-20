import React, { useState } from 'react';
import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";
const MapContainer = () => {

  const [result, setResult] = useState("")
  const [position, setPosition] = useState(null);

  const center = {
    // 지도의 중심좌표
    lat: 33.450701,
    lng: 126.570667,
  }

  return (
    <div>
      <Map
        center={center} //지도 중심 좌표 lat : 위도, lng : 경도
        style={{ width: '600px', height: '600px' }} //지도의 너비와 높이
        level={3} //지도 확대 레벨
        onClick={(event, mouseEvent) => {
          const latlng = mouseEvent.latLng
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });

          setResult(
            `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`,
          )
        }}
      >

        <MapMarker position={position ?? center} />

        <MapInfoWindow // 인포윈도우를 생성하고 지도에 표시합니다
          position={{
            // 인포윈도우가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.570667
          }}
          removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
        >
          {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
          <div style={{ padding: "5px", color: "#000" }}> Hello World!</div>
        </MapInfoWindow>
      </Map>

      <p>
        <em>지도를 클릭해주세요!</em>
      </p>
      <div id="clickLatLng">
        {position && `클릭한 위치의 위도는 ${position.lat}이고, 경도는 ${position.lng} 입니다.`}
      </div>
    </div>
  );
};

export default MapContainer;