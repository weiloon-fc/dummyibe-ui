<script setup>
import axios from 'axios'
import { ref } from 'vue'

const url = ref('')

const selectSeat = async () => {
  url.value = ''
  const plain_payload = {
    SabreAuthToken:
      'T1RLAQIItC55F9S53kHeLf6reHjPnMkOiRi3FEpTNZoCfjtwJhB8WOjWoxBN3QiLHAe9ZKwOAADQ+s7Z5BLagOVPChdSDUiKaty2wb+R2+Idj9gHemyQqrJ1y5wBI+4jVnZVehOn8mknaGv408RolRY3ao72mVb/DvLQwp7eIKRHi3Pu5+POGRLV7jUfUBz1NCoAw2TvefC4heH6hypGEf9mwfPmcDxRAYwx9Ry89cg5i2ClMHOqoHTfMVHgs9U2e87MbZbXwRH/HZeolnDYeXVfrB7+EgQ1Mw0RoKGyrWJRS4QqbsBOltIA4997saAYiwLI7DAwWmOVWd5FhXJGw/C5rGM9w5I1ZQ**',
    RefId: '13e36dfc-3db5-43b2-9505-932413b66329',
    POS: 'X0EJ',
    RedirectUrl: 'https://dummyibe-api.forecepts.net/api/Certificate/SelectedSeat',
    CallbackUrl: '', // "https://dummyibe-api.forecepts.net/SelectedSeat",
    Flights: [
      {
        OriginCity: 'SIN',
        DestinationCity: 'NRT',
        DepartureDate: '2025-02-25',
        FlightNo: '12',
        RBD: 'F',
        CabinCode: 'F',
        AirlineCode: 'SQ'
      },
      {
        OriginCity: 'NRT',
        DestinationCity: 'SIN',
        DepartureDate: '2025-03-02',
        FlightNo: '801',
        RBD: 'J',
        CabinCode: 'F',
        AirlineCode: 'SQ'
      }
    ],
    Passengers: [
      {
        Id: 1,
        FirstName: 'Wei Loon',
        LastName: 'Loke',
        PaxType: 'ADT',
        FrequentFlyer: {
          CarrierCode: 'SQ',
          Number: '8881234567'
        }
      },
      {
        Id: 2,
        FirstName: 'Wei Wei',
        LastName: 'Loke',
        PaxType: 'CNN'
      }
    ]
  }

  const result = await axios.post(
    //'https://localhost:7228/api/Certificate/GetSingleSignOnToken',
    'https://dummyibe-api.forecepts.net/api/Certificate/GetSingleSignOnToken',
    plain_payload
  )
  // const newWindow = window.open("https://seatmap.forecepts.net/12/sso")
  // setTimeout(() => { newWindow.postMessage(JSON.parse(JSON.stringify({ text: result.data })), "https://seatmap.forecepts.net/12/sso") }, 1000)

  const formPost = await axios.post(
    'https://seatmap-api.forecepts.net/12/sso',
    //'https://localhost:7031/12/sso',
    result.data
  )
  url.value = formPost.data.redirect
}
</script>

<template>
  <main>
    <button style="line-height: 30px; margin: 10px 30px" @click="selectSeat">Select Seat</button>
    <br />
    <a style="margin: 10px 30px" v-if="url" :href="url">Redirect to Seat Map Site</a>
  </main>
</template>
