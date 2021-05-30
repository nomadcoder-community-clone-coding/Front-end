import React from 'react';
import { Container, Wrapper, Row, Link, Title, Content, Section1, Section2, Section3, Section4, Left, Right } from './styledFooter';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>;
};

Footer.Section1 = function FooterColumn({ children, ...restProps }) {
    return <Section1 {...restProps}>{children}</Section1>;
};

Footer.Section2 = function FooterColumn({ children, ...restProps }) {
    return <Section2 {...restProps}>{children}</Section2>;
};

Footer.Section3 = function FooterColumn({ children, ...restProps }) {
    return <Section3 {...restProps}>{children}</Section3>;
};

Footer.Section4 = function FooterColumn({ children, ...restProps }) {
    return <Section4 {...restProps}>{children}</Section4>;
};

Footer.Left = function FooterColumn({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>;
};

Footer.Right = function FooterColumn({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>;
};


Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Footer.Content = function FooterContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
