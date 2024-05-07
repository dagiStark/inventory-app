#! /usr/bin/env node

console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Item = require("./models/items");

  const items = [];

  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createItems();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  

  async function itemCreate(index, name, description, category, price, number_in_stock) {
    const itemDetail = { 
      index: index,
      name: name, 
      description: description,
      category:  category,
      price: price,
      number_in_stock: number_in_stock
    };
  
    const item = new Item(itemDetail);
  
    await item.save();
    items[index] = item;
    console.log(`Added item: ${name}`);
  }
  

  async function createItems() {
    console.log("Adding items");
    await Promise.all([
      itemCreate(0, "Crankshaft", "Rothfuss", "1973-06-06", 124.55, 10),
      itemCreate(1, "Camshaft", "Bova", "1932-11-8", 234.55, 44),
      itemCreate(2, "Spark Plugs", "Asimov", "1920-01-02", 77.5, 30),
      itemCreate(3, "Valves", "Billings", false, 56.7, 25),
      itemCreate(4, "Driveshaft", "Jones", "1971-12-16", 45.3, 21),
    ]);
  }
  