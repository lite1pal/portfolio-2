import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple";

// function Code({ children, ...props }) {
//   let codeHTML = highlight(children);
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }

function CustomSyntaxHighlighter({ children, ...props }: any) {
  return (
    <SyntaxHighlighter language="javascript" style={syntaxStyle}>
      {children}
    </SyntaxHighlighter>
  );
}

let components = {
  //   code: Code,
  SyntaxHighlighter: CustomSyntaxHighlighter,
};

export default function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
