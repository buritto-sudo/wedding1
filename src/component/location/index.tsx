{/* 자가용 및 주차 안내 */}
<div className="location-info" style={{ display: "block" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
    <div className="transportation-icon-wrapper" style={{ margin: 0 }}>
      <CarIcon className="transportation-icon" />
    </div>
    <div className="heading" style={{ margin: 0, fontWeight: "bold" }}>자가용 및 주차 안내</div>
  </div>
  
  <div className="content" style={{ textAlign: "left", lineHeight: "1.6", width: "100%", wordBreak: "keep-all" }}>
    <div style={{ marginBottom: "14px", color: "#374151" }}>
      네비게이션(네이버 지도, 카카오내비, 티맵):<br />
      <b style={{ color: "#111827", fontSize: "15px" }}>르엘컨벤션웨딩홀</b> 검색
    </div>

    {/* 본관 주차장 카드 */}
    <div style={{
      backgroundColor: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      padding: "12px 14px",
      marginBottom: "12px"
    }}>
      <div style={{ fontWeight: "700", color: "#1f2937", marginBottom: "4px" }}>
        🚗 본관 주차장
      </div>
      <div style={{ fontSize: "13.5px", color: "#4b5563" }}>
        롯데백화점 · 호텔 · 별관 주차장<br />
        <span style={{ color: "#2563eb", fontWeight: "600" }}>* 뷔페에서 주차권 발급</span>
      </div>
    </div>

    {/* 대체 주차장 카드 */}
    <div style={{
      backgroundColor: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      padding: "12px 14px"
    }}>
      <div style={{ fontWeight: "700", color: "#1f2937", marginBottom: "8px" }}>
        🅿️ 대체 주차장 안내
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#4b5563" }}>
        <div>
          <b>제1대체: 극동(이어도)주차장</b> (도보 3분)<br />
          <span style={{ color: "#2563eb" }}>* 뷔페 주차권 발급</span> · 울산 남구 달삼로 82
        </div>
        <div style={{ borderTop: "1px dashed #e5e7eb", paddingTop: "8px" }}>
          <b>제2대체: 공구월드 상가 옆 공영</b> (도보 7분)<br />
          <span style={{ color: "#059669" }}>* 주말 무료 주차</span> · 울산 남구 갈밭로 16
        </div>
        <div style={{ borderTop: "1px dashed #e5e7eb", paddingTop: "8px" }}>
          <b>제3대체: 삼산동 1공영주차장</b> (도보 7분)<br />
          <span style={{ color: "#059669" }}>* 주말 무료 주차</span> · 울산 남구 삼산동 1622-3
        </div>
        <div style={{ borderTop: "1px dashed #e5e7eb", paddingTop: "8px" }}>
          <b>제4대체: 농수산물 하이파킹 유료</b> (도보 7분)<br />
          <span style={{ color: "#2563eb" }}>* 뷔페 주차권 발급</span> · 울산 남구 삼산동 1622-1
        </div>
      </div>
    </div>
  </div>
</div>
