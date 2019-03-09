import React from "react";

const Switch = ({ buttonText, switchOn, switchOff, hitGiphy }) => (
  <div>
    {buttonText === "ボタン" && (
      <button
        onClick={() => {
          hitGiphy();
        }}
      >
        テスト
      </button>
    )}
    {buttonText === "スロット開始" ? (
      <button
        onClick={() => {
          switchOn();
        }}
      >
        あああ
      </button>
    ) : (
      <button
        onClick={() => {
          switchOn();
        }}
      >
        いいい
      </button>
    )}
  </div>
);

export default Switch;
