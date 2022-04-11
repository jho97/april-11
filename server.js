const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res)=> {
 if (req.query.item) {
     console.log(req.query.item)
     const searchTerm = req.query.item.toLowerCase()
     const filteredItems = inventory.filter(invItem => {
         return invItem.toLowerCase().includes(searchTerm)
     })

        res.status(200).send(filteredItems)
     } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:id', (req, res) => {
    const index = Number(req.params.id)
    const item = inventory[index]
    res.status(200).send(item)
})

app.listen(5050, () => console.log('Server is running on port 5050'))