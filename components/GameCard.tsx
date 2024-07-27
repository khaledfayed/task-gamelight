import { FC } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

type GameCardProps = {
  game: Game
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  const handleCallToAction = () => {
    // navigate to the game
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Image
          source={{ uri: game.iconURL }}
          style={{ width: 60, height: 60, borderRadius: 10 }}
        />
        <View>
          <Text>{game.title}</Text>
          <Text>{game.rating}</Text>
        </View>
        <View style={styles.likeButton} />
      </View>
      <Button title='Play' onPress={handleCallToAction} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 40,
    marginBottom: 10
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  likeButton: {
    backgroundColor: 'grey',
    padding: 10,
    width: 32,
    height: 32,
    borderRadius: 8
  }
})
