import { FC } from 'react'
import { useGames } from '../hooks/useGames'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { GameCard } from '../components/GameCard'

export const Home: FC = () => {
  const { data, isLoading } = useGames()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='blue' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <GameCard game={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  }
})
