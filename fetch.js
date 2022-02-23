import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
export default function () {

    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        () => {
            fetch('https://raw.githubusercontent.com/PedroCorcaque/flaskapp-mongodb-aic-iii/master/teste.json')
                .then((resp) => resp.json())
                .then((json) => (setDados(json.data)))
                .catch(() => (alert('Erro ao carregar os dados')))
                .finally(() => setCarregando(false))
        }, []
    )
    return (
        <View>
            {
                carregando ? <ActivityIndicator /> : (
                    <FlatList
                        data={ dados }
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.nome}</Text>
                        )}
                    />

                )
            }
        </View>
    )
}