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

ClassicEditor
    .create( document.querySelector( '#app'), {
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
        ],

        // So is the rest of the default configuration.
        toolbar: [
            'heading',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'undo',
            'redo'
        ]
    } )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );

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
