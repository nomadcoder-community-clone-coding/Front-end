import styled from 'styled-components';

export const Box = styled.div`
    position : absolute;
    padding: 64px 32px 64px 32px;
    bottom : 0;
    width: 100%;

    @media (max-width: 1960px){
        padding: 64px 32px;
    }f
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    justify-content: flex-start;
    margin: 0 auto;
`

export const Row = styled.div`
    display: grid;
    /*grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));*/
    grid-template-columns : 2fr 1fr 1fr 2.5fr;
    grid-gap: 3px;
    @media (max-width: 1800px) {
    grid-template-columns: 320px 1fr 1fr 2fr;;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const FooterLink = styled.a`
    font-size : 18 px;
    color: gray;
    margin-bottom: 15px;
    text-decoration: none;
    min-width: 100px;
    &:hover {
        color: #404040;
        transition: 200ms ease-in;
}
`

export const Heading = styled.p`
    color: gray;
    font: semibold,
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing : 0.7px;
    margin-bottom: 20px;
    font-weight: bold;
`

export const FooterContent1 = styled.p`
    font-size: 12px;
    line-height: 10px;
    text-decoration: non solid rgb(107, 114, 128);
    color: gray;
    margin-bottom: 0px;
    min-width: 300px;
`

export const FooterContent2 = styled.p`
    font-size: 1rem;
    color: gray;
    margin-bottom: 0px;
`
export const Bottom = styled.div`
    display: grid;
    grid-template-columns : 10fr 30px 30px 30px 30px;
  
`
export const FooterLeft = styled.button`
    margin-left: 55px;
    width: 500px;
    font-size : 16px;
    line-height: 24px;
    text-decoration : non solid rgb(156, 163, 175);
    text-align: left;
    background: white;
    color: #9CA3AF;
    border: none;
    outline: none;
`;

export const FooterRight = styled.button`
    background: white;
    color: gray;
    border: none;
    outline: none;
`;