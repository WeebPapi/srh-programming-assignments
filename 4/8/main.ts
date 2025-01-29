import EventEmitter from "events"
// Callbacks
export const inventory = [
  { itemName: "apple", stock: 10 },
  { itemName: "banana", stock: 5 },
  { itemName: "orange", stock: 0 },
]

export const placeOrder = (
  itemName: string,
  quantity: number,
  cb: (status: string) => void
) => {
  const items = inventory.map((item) => item.itemName)
  const searchedItem = inventory[items.findIndex((item) => item === itemName)]
  if (searchedItem.stock - quantity >= 0) {
    searchedItem.stock -= quantity
    cb("success")
  } else {
    cb("fail")
  }
}

// Auction

let BID = 0

const emitter = new EventEmitter()

emitter.on("new-bid", (bidAmt) => {
  BID += bidAmt
  if (BID >= 100) emitter.emit("sold")
  else console.log(`Bid increased to ${BID}`)
})
emitter.on("sold", () => {
  console.log("Item has been sold")
})

emitter.emit("new-bid", 20)
emitter.emit("new-bid", 20)
emitter.emit("new-bid", 20)
emitter.emit("new-bid", 20)
emitter.emit("new-bid", 20)
emitter.emit("new-bid", 20)

// Flights

const availableFlights = [
  {
    departure: "Tbilisi",
    destination: "Berlin",
  },
  {
    departure: "Tbilisi",
    destination: "London",
  },
  {
    departure: "Paris",
    destination: "Athens",
  },
  {
    departure: "Wakanda",
    destination: "New York",
  },
]

export const bookFlight = async (departure: string, destination: string) => {
  const flights = availableFlights.filter(
    (flight) =>
      flight.departure === departure && flight.destination === destination
  )
  if (flights.length !== 0) {
    return `Flight from ${departure} to ${destination} successfully booked!`
  }
  throw new Error("No flights found")
}
