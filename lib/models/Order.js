const pool = require('../utils/pool');

module.exports = class Order {
  id;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.quantity = row.quantity;
  }

  //-------------------------------------------------------------------//
  static async insert({quantity}) {
    const {rows} = await pool.query(
      'INSERT INTO orders (quantity) VALUES ($1) RETURNING *',
      [quantity]
    );
    return new Order(rows[0]);
  }
  
  //-------------------------------------------------------------------//

  static async getAllOrders(){

    const {rows} = await pool.query(
      'SELECT * FROM orders',
     
    );
    return rows.map((item) =>  new Order(item));
  }





  static async getOrderById(id){

const {rows} = await pool.query('SELECT * FROM orders WHERE id=$1', [id]);
console.log(rows);
return rows[0];
  
  }















  //-------------------------------------------------------------------//
};



//Instance method
//arr.map(), arr.filter()

//static methods
//Order.insert();