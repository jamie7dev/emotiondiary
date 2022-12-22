import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrappaer_${emotion}`,
        ].join(" ")}
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div
        className="info_wrapper"
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
      >
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton
          text={"수정하기"}
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        />
      </div>
    </div>
  );
};
export default DiaryItem;
