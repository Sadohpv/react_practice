export default {
    control: {
      backgroundColor: "#e9eaec",
      fontSize: 14,
      fontWeight: "normal",
    },
  
    "&multiLine": {
      control: {
      backgroundColor: "#e9eaec",

        fontFamily: "monospace",
        minHeight: 63,
		
      },
      highlighter: {
        padding: 9,
        border: "1px solid transparent",
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
        border: "1px solid #000000",
        fontSize: 14,
      },
      item: {
        padding: "5px 15px",
        borderBottom: "1px solid #000000",
        "&focused": {
          backgroundColor: "red",
        },
      },
    },
  };