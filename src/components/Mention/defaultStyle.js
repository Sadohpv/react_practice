export default {
    control: {
      position:"fixed",
      backgroundColor: "red",
      fontSize: 14,
      fontWeight: "normal",
    },
  
    "&multiLine": {
      control: {
        fontFamily: "monospace",
        minHeight: 40,
        maxWidth : 226,
        backgroundColor: "#e9eaec",
        
      },
      highlighter: {
        

        padding: 9,
        border: "1px solid #000000",
      },
      input: {
        padding: 9,
        border: "1px solid #000000",
      },
    },
  
    "&singleLine": {
      display: "inline-block",
      width: 180,
  
      highlighter: {
        padding: 1,
        border: "2px inset transparent",
      },
      input: {
        padding: 1,
        border: "2px inset",
      },
    },
  
    suggestions: {
      list: {
        backgroundColor: "red",
        border: "1px solid red",
        fontSize: 14,
      },
      item: {
        padding: "5px 15px",
        borderBottom: "1px solid red",
        "&focused": {
          backgroundColor: "#cee4e5",
        },
      },
    },
  };