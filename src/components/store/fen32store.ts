import {defineStore} from "pinia"
import token,{config} from "../apis/token"
import {Response} from "./response"
import "../api"
import type { AxiosResponse } from 'axios';
import { SysRole } from "../models/sys-role";
import { CopyRoleApi } from "../api";
import {showToast} from "../apis/toast"
export const fen32store = defineStore('sysRole', {  
    state :(): {  
      sysRole:SysRole[]
      sysRoleMap:Map<string, SysRole>
      sysRolefrom:SysRole
      currentPage:number
      pagercount:number
    }=>({
      sysRole:[],
      sysRoleMap:new Map<string, SysRole>(),
      sysRolefrom:{},
      currentPage:1,
      pagercount:0
    }),  
    actions: {  
      async selectdivide(id : number){
        const copyRoleApi = new CopyRoleApi(config,"",token);
        const response : AxiosResponse<Response> = await  copyRoleApi.sysRoleSelectdivideGet(id)
        let item = response.data.data.records
        this.sysRole = item
        this.sysRoleMap = new Map(item.map(item => [item.id, item]));
      },
      inset(){
              
        this.selectdialogFormVisible = true
        this.categoriesfrom = {
            isStatus:false,
            id:0
        }
      },
      //改变权限
      async updatestate(id:number,isStatus:boolean){
          try{ 
              let status:boolean = !isStatus
              const copyRoleApi  = new CopyRoleApi(config,"",token);
              const response :AxiosResponse<Response> = await copyRoleApi.sysRoleUpdatestatusPut(id,status);
              this.selectCategories(this.currentPage)
          } catch (error) {
              console.log(error)
          }
      },
      //编辑
      edit(id){
          this.categoriesfrom = this.categoriesMap.get(id)
          this.selectdialogFormVisible = true
      },
      //删除
      async delete(id:number){
          try{ 
              const copyRoleApi  = new CopyRoleApi(config,"",token);
              // const response :AxiosResponse<Response> = await copyRoleApi.(id);
              showToast("删除成功","Default")
              this.selectCategories(this.currentPage)
          } catch (error) {
            showToast(error,"Error") 
          }
      }
    },
  
  });