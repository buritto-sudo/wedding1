import {
  BRIDE_FULLNAME,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

/**
 * 초대 메시지와 혼주 정보를 제공하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 모시는 글 섹션
 */
export const Invitation = () => {
  return (
    <>
      <LazyDiv className="card invitation">
        <h2 className="english">Invitation</h2>

        <div className="break" />

        {/* 초대 문구 */}
        <div className="content">싱그러운 여름 향기 가득한 날</div>
        <div className="content">소중한 분들을 모시고</div>
        <div className="content">사랑의 약속을 하려고 합니다.</div>
        <div className="break" />
        <div className="content">햇살이 뜨거울 땐 가려주고,</div>
        <div className="content">비가 오면 우산이 되어주는</div>
        <div className="content">부부가 되겠습니다.</div>
        <div className="break" />
        <div className="content">기쁜날 함께 하시어</div>
        <div className="content">저희의 앞날을 축복해 주세요.</div>

        <div className="break" />

        {/* 혼주 및 신랑 정보 */}
        <div className="name">
          {GROOM_FATHER} · {GROOM_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{GROOM_TITLE}</span>
          </span>{" "}
          {GROOM_FULLNAME}
        </div>
        {/* 혼주 및 신부 정보 */}
        <div className="name">
          {BRIDE_FATHER} · {BRIDE_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{BRIDE_TITLE}</span>
          </span>{" "}
          {BRIDE_FULLNAME}
        </div>
      </LazyDiv>
    </>
  )
}
