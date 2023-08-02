import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);
    // const cnpj: number = 12282034001762
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0ZDIwNTE5LWZjYTMtNGQ1OS1iNWVlLTM3YTU1MWY2YjBjMyIsImVtYWlsIjoibWljaGFlbC5saW1hQHRrc29sdWNvZXMuY29tLmJyIiwiZnVsbE5hbWUiOiJtaWNoYWVsLmxpbWEyMiIsInJvbGUiOiJtYXN0ZXIiLCJjb25maXJtZWRFbWFpbCI6dHJ1ZSwiaXNQYXNzd29yZENoYW5nZWQiOnRydWUsImFjY291bnRJZCI6IjkyNGQ5YzEyLTI2NTMtNGEyZi1hYzgzLWNjYjU3YTRmOWQ2OSIsInBob25lIjpudWxsLCJhY3RpdmUiOnRydWUsImFjY291bnRUeXBlIjoicHJvZHVjZXIiLCJjb25maXJtZWRFbWFpbERhdGUiOiIyMDIzLTA3LTMxVDEzOjQ3OjIxLjY1NVoiLCJjb21wYW5pZXNSZWdpc3RlcmVkIjowLCJpc1NvbWVDb21wYW55QWN0aXZlIjpmYWxzZSwiaWF0IjoxNjkwODUzMzIyLCJleHAiOjE2OTM0NDUzMjJ9.Xc6tQHPerm-JEMJv4D-nVLIyRIp9ysheoDgeEpZhgyY";
    // async function getData() {



    //     try {
    //         const res = await axios.get(`http://172.25.67.251:3001/anp/producer/cnpj/${cnpj}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });

    //         const data = await res.data
    //         setGroups(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

    return (
        <Container>
            <Header />
            <Highlight
                title="Turmas"
                subTitle="Jogue com a sua turma"
            />

            <FlatList
                data={groups}
                keyExtractor={item => item} // id unico do item da listaS
                renderItem={({ item }) => <GroupCard title={item} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma' />}
            />
            <Button
                title="Criar nova turma"
            />
        </Container>
    )
}
