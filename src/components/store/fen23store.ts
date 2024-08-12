import {defineStore} from "pinia"
import token,{config} from "../apis/token"
import {Response} from "./response"
import "../api"
import type { AxiosResponse } from 'axios';
import { Orders } from "../models/orders";
import { Orderdetails } from "../models/orderdetails";
import { OrdersApi,OrddetailsApi } from "../api";
import {showToast} from "../apis/toast"
export const fen23store = defineStore('orders', {  
    state :(): {  
        orders:Orders[]
        ordersMap:Map <string,Orders>
        orderdetails:Orderdetails
        search:string,
        open:boolean
    }=>({
        orders:[],
        ordersMap:new Map(),
        orderdetails:{},
        search:"",
        open:false
    }),  
    actions: {  
    
       async selectorders(id : number){
          const ordersApi = new OrdersApi(config,"",token);
          const response : AxiosResponse<Response> = await  ordersApi.ordersSelectdivideGet(id)
          let item = response.data.data.records
          this.orders = item
          this.ordersMap = new Map(item.map(item => [item.id, item]));
       },

       //详情
       async detail(id : number){
            this.open = true
            const orddetailsApi = new OrddetailsApi (config,"",token);
            const response : AxiosResponse<Response> = await  orddetailsApi.orderdetailsSelectidGet(id)
            this.orderdetails = response.data.data
            console.log(this.orderdetails)
       }
    },
  
  });