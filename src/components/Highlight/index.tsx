import { HighlightContainer, SubTitle, Title } from "./styles";
type Props = {
    title: string,
    subTitle: string
}
export function Highlight({ title, subTitle }: Props) {
    return (
        <HighlightContainer>
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subTitle}
            </SubTitle>
        </HighlightContainer>
    );
}