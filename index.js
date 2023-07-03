import express from "express";
import bodyParser from "body-parser";

const app=express();
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

class Fruit {
    constructor(id, name, color) {
        this.id=id;
        this.name=name;
        this.color=color;
    }
}

const fruits=[
    new Fruit(1, 'Banana', 'yellow'),
    new Fruit(2, 'Orange', 'orange'),
    new Fruit(3, 'Apple', 'red'),
    new Fruit(4, 'Grapes', 'green'),
];

app.get('/sortedfruits', (req, res) => {
    const sortedFruits=fruits.sort((a, b) => a.color.localeCompare(b.color));
    res.status(200).json(sortedFruits);
})



const port=3000;

app.listen(port, () => {
    console.log('Server started on port 3000');
});