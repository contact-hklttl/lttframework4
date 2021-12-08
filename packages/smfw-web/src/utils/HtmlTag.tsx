import React from 'react';
import StyledComponent from './StyledComponent';

function HtmlTag(tagName: string, makeStyles: any) {
    const El = StyledComponent(tagName, makeStyles);

    return (props: any) => <El {...props.attrs}>{props.children}</El>;
}

export default HtmlTag;
