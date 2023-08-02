import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Content, Icon, NewGroupContainer } from "./styles";

export function NewGroup() {
    return (
        <NewGroupContainer>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subTitle="crie a turma para adicionar as pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                />
                <Button title="Criar" />
            </Content>
        </NewGroupContainer>
    )
}