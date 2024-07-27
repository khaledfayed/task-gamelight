import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { Home } from './tabs/Home'

const queryClient = new QueryClient()

export default function App () {
  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
