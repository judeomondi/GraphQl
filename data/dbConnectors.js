import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/widgets", {
    useNewUrlParser : true
})

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: Number
    },
    stores: {
        type: Array
    }
});

const widgets = mongoose.model('widgets', widgetSchema);

export { widgets };