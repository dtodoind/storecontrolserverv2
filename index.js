const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const path = require("path");

const { sequelize, Manager_master } = require("./models");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "electronreact/build")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "electronreact/build", "index.html"));
//     });
// }

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/category", categoryRoutes);

const depositoRoutes = require("./routes/depositoRoutes");
app.use("/deposito", depositoRoutes);

const managermasterRoutes = require("./routes/managermasterRoutes");
app.use("/managermaster", managermasterRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/product", productRoutes);

const ordermasterRoutes = require("./routes/ordermasterRoutes");
app.use("/ordermaster", ordermasterRoutes);

const orderproductRoutes = require("./routes/orderproductRoutes");
app.use("/orderproduct", orderproductRoutes);

const employeeRoutes = require("./routes/employeeRoutes");
app.use("/employee", employeeRoutes);

const salesactivityRoutes = require("./routes/salesactivityRoutes");
app.use("/salesactivity", salesactivityRoutes);

const expensecatRoutes = require("./routes/expensecatRoutes");
app.use("/expensecat", expensecatRoutes);

const expenseRoutes = require("./routes/expenseRoutes");
app.use("/expense", expenseRoutes);

const notificationRoutes = require("./routes/notificationRoutes");
app.use("/notification", notificationRoutes);

const registerRoutes = require("./routes/registerRoutes");
app.use("/register", registerRoutes);
// app.post("/users", async (req, res) => {
//     const { name, email } = req.body;

//     try {
//         const user = await User.create({ name, email });

//         return res.json(user);
//     } catch (error) {
//         console.log("User Creating Error: " + error);
//         return res.status(500).json(error);
//     }
// });

// app.get("/users", async (req, res) => {
//     try {
//         const users = await User.findAll();
//         return res.json(users);
//     } catch (error) {
//         console.log("Getting Users Error: " + error);
//         return res.status(500).json(error);
//     }
// });

// app.get("/users/:uuid", async (req, res) => {
//     const uuid = req.params.uuid;
//     try {
//         const users = await User.findOne({
//             where: { uuid },
//             include: "posts",
//         });
//         return res.json(users);
//     } catch (error) {
//         console.log("Getting One Users Error: " + error);
//         return res.status(500).json(error);
//     }
// });

// app.post("/posts", async (req, res) => {
//     const { userUuid, body } = req.body;

//     try {
//         const user = await User.findOne({ where: { uuid: userUuid } });

//         const posting = await Posts.create({ body, userId: user.id });

//         return res.json(posting);
//     } catch (error) {
//         console.log("Creating Post Error: " + error);
//         return res.status(500).json(error);
//     }
// });

// app.get("/posts", async (req, res) => {
//     try {
//         const posts = await Posts.findAll({
//             include: "user",
//         });
//         return res.json(posts);
//     } catch (error) {
//         console.log("Getting Users Error: " + error);
//         return res.status(500).json(error);
//     }
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log("Server up on http://localhost:" + PORT);
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Database Connected");
});
