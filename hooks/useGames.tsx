import axios from 'axios'
import { useQuery } from 'react-query'

const URL = `https://mock-game-api-9a408f047f23.herokuapp.com/api/games`
const API_KEY = '01964fa8-f0e5-40fc-a13b-9f5c3a5415f3'
const QUERY_KEY = 'games'

const fetchGames: () => Promise<Game[]> = async () => {
  try {
    const { data } = await axios.get<Game[]>(URL, {
      headers: {
        'X-API-Key': API_KEY
      }
    })
    return data
  } catch (error) {
    throw error
  }
}

export const useGames = () => {
  return useQuery(QUERY_KEY, fetchGames)
}
