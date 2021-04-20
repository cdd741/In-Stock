const app = express();
const inventories = require ('./routes/inventories');
const warehouses = require ('./routes/warehouses');

//parse form data
app.use(express.urlenconded({extended:true}))

//parse json
app.use(express.json());

//route
app.use('/inventories',inventories)
app.use('/warehouses',warehouses)