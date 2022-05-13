import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { StripeProvider } from '@stripe/stripe-react-native'
import { useEffect, useState } from 'react'

function App() {
  const [publishableKey, setPublishableKey] = useState('')

  const fetchPublishableKey = async () => {
    try {
      const key = await fetchKey() // fetch key from your server here
      setPublishableKey(key)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPublishableKey()
  }, [])

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier='merchant.identifier'
    >
      <View style={styles.container}>
        <Text>Testing123</Text>
        <StatusBar style='auto' />
      </View>
    </StripeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
