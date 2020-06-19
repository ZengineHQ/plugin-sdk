import React from 'react';
import MarkdownView from 'react-showdown';

export interface MarkdownProps {
  options?: object
  children: string
}

const Markdown: React.FC<MarkdownProps> = (props) => (
  <MarkdownView markdown={props.children} options={props.options} />
)

Markdown.defaultProps = {
  options: {
    omitExtraWLInCodeBlocks: false,
    simplifiedAutoLink: true,
    excludeTrailingPunctuationFromURLs: true,
    literalMidWordUnderscores: false,
    strikethrough: true,
    tables: false,
    tablestablesHeaderId: false,
    ghCodeBlocks: false,
    tasklists: false,
    disableForced4SpacesIndentedSubliststasklists: true,
    simpleLineBreaks: true,
    requireSpaceBeforeHeadingText: false,
    ghCompatibleHeaderId: false,
    ghMentions: false,
    backslashEscapesHTMLTags: false,
    parseImgDimensions: false,
    openLinksInNewWindow: true,
  }
};

export default Markdown;
