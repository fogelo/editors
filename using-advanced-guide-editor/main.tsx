// // main.js

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
// class Editor extends ClassicEditor {
//   // Plugins to include in the build.
//   static builtinPlugins = [
//     Essentials,
//     Autoformat,
//     Bold,
//     Italic,
//     BlockQuote,
//     Heading,
//     Link,
//     List,
//     Paragraph,
//   ];

//   static defaultConfig = {
//     toolbar: {
//       items: [
//         "heading",
//         "bold",
//         "italic",
//         "link",
//         "bulletedList",
//         "numberedList",
//         "blockQuote",
//         "undo",
//         "redo",
//       ],
//     },

//     // This value must be kept in sync with the language defined in webpack.config.js.
//     //   language: "en",
//     //   image: {
//     //     toolbar: [
//     //       "imageTextAlternative",
//     //       "toggleImageCaption",
//     //       "imageStyle:inline",
//     //       "imageStyle:block",
//     //       "imageStyle:side",
//     //     ],
//     //   },
//     //   table: {
//     //     contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
//     //   },
//   };
// }

// export default Editor;

import ReactDOM from "react-dom/client";
import React, { useEffect, useRef } from "react";
const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("hellof from useEffect");
    ClassicEditor.create(ref.current, {
      // The plugins are now passed directly to .create().
      plugins: [
        Essentials,
        Autoformat,
        Bold,
        Italic,
        BlockQuote,
        Heading,
        Link,
        List,
        Paragraph,
        AutoImage,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Base64UploadAdapter,
      ],

      // So is the rest of the default configuration.
      toolbar: [
        "heading",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "undo",
        "redo",
        "insertImage",
      ],
      image: {
        // styles: ["alignCenter", "alignLeft", "alignRight"],
        resizeOptions: [
          {
            name: "resizeImage:original",
            label: "Default image width",
            value: null,
          },
          {
            name: "resizeImage:50",
            label: "50% page width",
            value: "50",
          },
          {
            name: "resizeImage:75",
            label: "75% page width",
            value: "75",
          },
        ],
        toolbar: [
          "imageTextAlternative",
          "toggleImageCaption",
          "|",
          "imageStyle:inline",
          "imageStyle:wrapText",
          "imageStyle:breakText",
          "imageStyle:side",
          "|",
          "resizeImage",
        ],
        insert: {
          integrations: ["insertImageViaUrl"],
        },
      },
    })
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div ref={ref}>hello</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
