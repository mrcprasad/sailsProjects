/**
 * Home.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'somePostgresqlServer',
  tableName: 'users',
  attributes: {
     name:{
       type:'string',
       required:true
     },

     email:{
       type:'string',
       email:true,
       unique:true
     },

     mobile:{
       type:'number',
       required:true
     },

     city:{
       type:'string',
       required:true
     }
  }
};
