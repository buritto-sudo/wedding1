import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info" style={{ display: "block", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div className="transportation-icon-wrapper" style={{ margin: 0 }}>
              <BusIcon className="transportation-icon" />
            </div>
            <div className="heading" style={{ margin: 0, fontWeight: "bold" }}>대중교통</div>
          </div>
          
          <div className="content" style={{ textAlign: "left", lineHeight: "1.6", width: "100%", wordBreak: "keep-all" }}>
            <div style={{ marginBottom: "8px" }}>
              <b>* 리무진버스</b>
              <br />
              5001번 (40분 소요) 보람병원 입구 하차, 도보 5분
            </div>
            <div>
              <b>* KTX</b>
              <br />
              · 청량리역 - 태화강역 (2시간 10분), 택시 10분
              <br />
              · 서울역 - 울산역 (2시간 30분), 택시 40분 소요
            </div>
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info" style={{ display: "block" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div className="transportation-icon-wrapper" style={{ margin: 0 }}>
              <CarIcon className="transportation-icon" />
            </div>
            <div className="heading" style={{ margin: 0, fontWeight: "bold" }}>자가용</div>
          </div>
          
          <div className="content" style={{ textAlign: "left", lineHeight: "1.6", width: "100%", wordBreak: "keep-all" }}>
            네이버 지도, 카카오내비, 티맵 이용
            <br />
            <b>르엘컨벤션웨딩홀</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
