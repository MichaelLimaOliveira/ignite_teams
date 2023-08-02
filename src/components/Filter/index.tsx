import { TouchableOpacityProps } from "react-native";
import { FilterContainer, FilterStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string
}

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <FilterContainer isActive={isActive} {...rest}>
            <Title>
                {title}
            </Title>
        </FilterContainer>
    );
}