import {defineStore} from "pinia"
import token,{config} from "../apis/token"
import {Response} from "./response"
import "../api"
import type { AxiosResponse } from 'axios';
import { Users } from "../models/users";
import { SysRole } from "../models/sys-role";
import { CopyUsersControllerApi } from "../api";
import type { CheckboxValueType } from 'element-plus'
import {showToast} from "../apis/toast"
export const fen33store = defineStore('users', {  
    state :(): {  
        users: Users[];  
        usersMap:Map<string, Users>;
        usersfrom:Users;
        sysRole:SysRole[];
        sysRoleform:SysRole;
        cities:[{value:string,label:string}]
        value:CheckboxValueType[]
        currentPage:number
        pagercount:number
        dialogFormVisible:boolean
        checkAll:boolean,
        indeterminate:boolean
    }=>({
        users:[],
        usersMap:new Map<string,Users>(),
        usersfrom:{},
        sysRole:[],
        sysRoleform:{},
        cities:[
          {
            value: 'Beijing',
            label: 'Beijing',
          },
        
        ],
        value:([]),
        currentPage:1,
        pagercount:0,
        dialogFormVisible:false,
        checkAll:false,
        indeterminate:false
    }),  
    actions: {  
      async selectdivide(id : number){
        const copyUsersControllerApi = new CopyUsersControllerApi(config,"",token);
        const response : AxiosResponse<Response> = await  copyUsersControllerApi.usersSelectdivideGet(id)
        let item = response.data.data.records
        this.pagercount = response.data.data.pages
        this.users = item
        this.usersMap = new Map(item.map(item => [item.id, item]));
     },
     currentchange(val){
      this.currentPage = val
     },
     inset(){
        this.dialogFormVisible = true
        this.usersfrom = {
          id:0,
          name:"",
          age:0,
          sex:""
        }
     },
     

    }
    
  });