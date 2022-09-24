import { useRef, useState } from "react";
import { questions } from "../api/entity";
import "./Questions.scss";
import backGround from './../assets/contentBackground.svg'


export default function Questions({ state, setState }) {
  const [showResult, setShowresult] = useState(false);
  const barRef = useRef();

  const page = state.page;
  const pageContent = questions.find((q) => q.page === page);
  const totalPages = questions.length;

  const buttonHandler = (buttonPrice) => {
    const nextPage = state.page + 1;

    setState((prev) => ({
      ...prev,
      page: nextPage > totalPages ? totalPages : nextPage,
      price: prev.price + buttonPrice
    }));

    if (page === totalPages) {
      barRef.current.style.width = "100%";
      barRef.current.innerText = "100%";
      setTimeout(() => {
        setShowresult(true);
      }, 500);
    }
  };

  return (
    <div className="Questions">
      {!showResult && (
        <div className="content">
          <div className="progress-bar">
            <div
              className="bar"
              ref={barRef}
              style={{
                width: page * (100 / totalPages) - 100 / totalPages + "%"
              }}
            >
              <span>{Math.ceil(page * (100 / totalPages) - 100 / totalPages) + "%"}</span>
            </div>
          </div>
          <div className="Content_img">
            <img className="imgBack" src={backGround} />
            <img className="imgMain" src={pageContent.photo} />
          </div>
          <h3>{pageContent.question}</h3>
          <div className="buttons">
            {pageContent.buttons.map((button, i) => (
              <button
                key={"button" + i}
                onClick={() => buttonHandler(button.price)}
              >
                {button.title}
              </button>
            ))}
          </div>
        </div>
      )}
      {showResult && <h2>Total cost: ${state.price}</h2>}
    </div>
  );
}
