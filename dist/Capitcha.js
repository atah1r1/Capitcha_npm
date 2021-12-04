"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Capitcha;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Capitcha(_ref) {
  let {
    setCaptchaText,
    captchaSize = 6,
    defaultCaptchaText = 'gh97dp',
    reloadBackground = '#494992',
    captchaCustomClass = '',
    reloadColor = '#FFFFFF',
    borderType = 'dashed',
    borderColor = '#4DACF5',
    backgroundColor = '#FFFFFF',
    iconWidth = 25,
    iconHeight = 25,
    reloadCustomClass = ''
  } = _ref;
  const [captchaValue, setCaptchaValue] = (0, _react.useState)(defaultCaptchaText);

  const getRandomCaptcha = () => {
    const getGenRand = (max, min) => {
      const rando = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const rand = rando(max, min);
      return "number" != typeof rand ? "A" : rand;
    };

    const ALPHAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = [];

    for (let i = 0; i < captchaSize; i++) {
      const gen = getGenRand(ALPHAS.length - 1, 0);
      result.push(getGenRand(9, 0) + ALPHAS[gen]);
    }

    result = result.join('').substring(0, captchaSize);
    setCaptchaText(result);
    setCaptchaValue(result);
  };

  (0, _react.useEffect)(() => {
    getRandomCaptcha();
  }, []);
  (0, _react.useEffect)(() => {
    setCaptchaText(defaultCaptchaText);
  }, [setCaptchaText, defaultCaptchaText]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "captcha_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: captchaCustomClass.length > 0 ? captchaCustomClass : "captcha_value"
  }, /*#__PURE__*/_react.default.createElement("span", null, captchaValue)), /*#__PURE__*/_react.default.createElement("div", {
    className: reloadCustomClass.length > 0 ? reloadCustomClass : "captcha_reload"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: getRandomCaptcha
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: iconWidth,
    height: iconHeight,
    fill: "currentColor",
    className: "bi bi-arrow-repeat",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
  })))), /*#__PURE__*/_react.default.createElement("style", {
    jsx: true
  }, "\n\t\t\t\t\t@import url('https://fonts.googleapis.com/css2?family=Tourney:wght@100;200;300;400&display=swap');\n\t\t\t\t\t.captcha_container {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t}\n\t\t\t\t\t.captcha_container div {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t}\n\t\t\t\t\t.captcha_value {\n\t\t\t\t\t\tborder: 1px ".concat(borderType, " ").concat(borderColor, ";\n\t\t\t\t\t\tpadding: 2px 30px;\n\t\t\t\t\t\tbackground-color: ").concat(backgroundColor, ";\n\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\tfont-size: 25px;\n\t\t\t\t\t\tcolor: #4eacf5;\n\t\t\t\t\t\tfont-family: 'Tourney', cursive;\n\t\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t\t\tuser-select: none;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t}\n\n\t\t\t\t\t\t.captcha_reload span{\n\t\t\t\t\t\t\tpadding: 8px 10px;\n\t\t\t\t\t\t\tbackground-color: ").concat(reloadBackground, ";\n\t\t\t\t\t\t\tcolor: ").concat(reloadColor, ";\n\t\t\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}\n\t\t\t\t\t")));
}