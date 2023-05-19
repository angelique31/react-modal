"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./pluginModalStyles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Modal component
 *
 * A modal component designed to provide an accessible interface for presenting content
 * in an overlay on top of the main content. The modal can be opened or closed by changing the `isOpen` prop,
 * and the modal can be dismissed by clicking outside the modal, clicking the close button, or pressing the
 * Escape key. The focus is confined within the modal for better accessibility.
 *
 *  * Un composant modal conçu pour fournir une interface accessible et conviviale pour présenter du contenu
 * dans une superposition par-dessus le contenu principal. La modal peut être ouverte ou fermée en modifiant la prop `isOpen`,
 * et la modal peut être fermée en cliquant en dehors de la modal, en cliquant sur le bouton de fermeture, ou en appuyant sur la
 * touche Echap. Le focus est confiné à l'intérieur de la modal pour une meilleure accessibilité
 *
 * @component
 * @param {object} props The properties for the Modal component.
 * @param {string} props.title The title of the modal. Displayed at the top of the modal.
 * @param {string} props.buttonLabel The label for the close button. Displayed in the button that closes the modal.
 * @param {boolean} props.isOpen The state of the modal. If `true`, the modal is open. If `false`, the modal is closed.
 * @param {Function} props.onClose The function to be called when the modal is requested to be closed.
 *   This function should set `isOpen` to `false`.
 * @param {Function} props.onButtonClick The function to be called when the button inside the modal is clicked.
 * @returns {ReactElement} The rendered Modal component.
 */
var Modal = function Modal(_ref) {
  var title = _ref.title,
    buttonLabel = _ref.buttonLabel,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    onButtonClick = _ref.onButtonClick;
  var closeButtonRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isOpen) {
      var handleDocumentKeyDown = function handleDocumentKeyDown(event) {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleDocumentKeyDown);
      closeButtonRef.current.focus();
      return function () {
        document.removeEventListener("keydown", handleDocumentKeyDown);
      };
    }
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title-modal"
  }, title), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button-modal-close",
    onClick: onButtonClick,
    ref: closeButtonRef
  }, buttonLabel)))), document.getElementById("modal-root"));
};
Modal.propTypes = {
  title: _propTypes["default"].string,
  buttonLabel: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onButtonClick: _propTypes["default"].func
};
var _default = Modal;
exports["default"] = _default;