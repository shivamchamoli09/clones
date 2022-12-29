export const UserListContainerStyles = {
  background: "#FFF",
};

export const ChatHeaderContainerStyles = {
  background: "#f0f2f5",
  padding: "10px",
  borderLeft: "1px solid #d1d7db",
};

export const ChatBackgroundStyles = {
  background: "#efeae2",
  transition: "background-color .3s ease",
  width: "100%",
  height: "80vh",
  overflowY: "scroll",
  // pb: 10,
  pt: 4,
};

export const ChatFooterContainerStyles = {
  background: "#f0f2f5",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  bottom: 0,
  height: "65px",
};

export const ChatInputStyles = {
  borderRadius: "8px",
  backgroundColor: "#FFF",
  outline: "none",
  ml: 6,
  ".MuiInputBase-root": {
    height: "42px",
    border: "none",
  },
};

export const ChatWrapperContainerStyles = {
  background: "#f0f2f5",
  m: 3,
  position: "relative",
  height: "93vh",
};

export const MessageRow = {
  paddingRight: "57px",
  paddingLeft: "50px",
};

export const MessageContainerStyle = {
  boxShadow: "0 1px 0.5px rgba(11,20,26,.13)",
  borderRadius: "7.5px",
  padding: "6px 7px 8px 9px",
  marginTop: "7px",
  maxWidth: "65%",
  width: "fit-content",
  position: "relative",
};

export const MessageSenderContainerStyles = {
  ...MessageContainerStyle,
  marginLeft: "auto",
  backgroundColor: "#d9fdd3",
  borderTopRightRadius: "0!important",
};

export const MessageReceiverContainerStyles = {
  ...MessageContainerStyle,
  marginRight: "auto",
  backgroundColor: "#fff",
  borderTopLeftRadius: "0!important",
};

export const MessageTextStyles = {
  color: "#111b21",
  fontSize: "14.2px",
  overflowWrap: "break-word",
  whiteSpace: "pre-wrap",
};

export const MessageSubTextStyles = {
  whiteSpace: "nowrap",
  fontSize: ".6875rem",
  color: "#66778",
};

export const SenderTextSubIconContainer = {
  position: "absolute",
  top: "-1.5px",
  right: "-8px",
};
export const ReceiverTextSubIconContainer = {
  position: "absolute",
  top: "-1.5px",
  left: "-8px",
};

export const EmojiInputContainer = {
  height: "320px",
  position: "absolute",
  top: "-300px",
};
